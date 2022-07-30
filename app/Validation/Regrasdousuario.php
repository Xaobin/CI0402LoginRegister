<?php
namespace App\Validation;
use App\Models\UsuarioModel;

class Regrasdousuario{

  public function validaUsuario(string $str, string $fields, array $data){
    $model = new UsuarioModel();
    $usuario = $model->where('email', $data['email'])
                  ->first();

    if(!$usuario)
      return false;

    return password_verify($data['senha'], $usuario['senha']);
  }
}
