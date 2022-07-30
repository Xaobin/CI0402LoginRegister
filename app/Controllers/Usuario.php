<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\UsuarioModel;

class Usuario extends BaseController{
    public function login(){
        $data = [];

        if ($this->request->getMethod() == 'post') {

            $rules = [
                'email' => 'required|min_length[6]|max_length[50]|valid_email',
                'senha' => 'required|min_length[8]|max_length[255]|validaUsuario[email,password]',
            ];

            $errors = [
                'senha' => [
                    'validaUsuario' => "Email or Password don't match",
                ],
            ];

            if (!$this->validate($rules, $errors)) {

                return view('login', [
                    "validation" => $this->validator,
                ]);

            } else {
                $model = new UsuarioModel();

                $usuario = $model->where('email', $this->request->getVar('email'))
                    ->first();

                // Stroing session values
                $this->setUserSession($usuario);
                // Redirecting to dashboard after login
                return redirect()->to(base_url('dashboard'));

            }
        }
        return view('login');
    }

    private function setUserSession($usuario)
    {
        $data = [
            'id' => $usuario['id'],
            'nome' => $usuario['nome'],
            'email' => $usuario['email'],
            'isLoggedIn' => true,
        ];

        session()->set($data);
        return true;
    }

    public function registro(){
        $data = [];

        if ($this->request->getMethod() == 'post') {
            //let's do the validation here
            $rules = [
                'nome' => 'required|min_length[3]|max_length[20]',
                'email' => 'required|min_length[6]|max_length[50]|valid_email|is_unique[usuarios.email]',
                'senha' => 'required|min_length[8]|max_length[255]',
                'senha_confirma' => 'matches[senha]',
            ];

            if (!$this->validate($rules)) {

                return view('registro', [
                    "validation" => $this->validator,
                ]);
            } else {
                $model = new UsuarioModel();

                $newData = [
                    'nome' => $this->request->getVar('nome'),
                    'email' => $this->request->getVar('email'),
                    'senha' => $this->request->getVar('senha'),
                ];
                $model->save($newData);
                $session = session();
                $session->setFlashdata('success', 'Registrado com sucesso');
                return redirect()->to(base_url('login'));
            }
        }
        return view('registro');
    }

    public function perfil(){

        $data = [];
        $model = new UsuarioModel();

        $data['usuario'] = $model->where('id', session()->get('id'))->first();
        return view('perfil', $data);
    }

    public function logout(){
        session()->destroy();
        return redirect()->to('login');
    }
}