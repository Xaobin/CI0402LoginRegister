<?= $this->extend("layouts/app") ?>

<?= $this->section("body") ?>

<div class="container" style="margin-top:20px;">
    <div class="row">
        <div class="panel panel-primary">
            <div class="panel-heading">Registro</div>
            <div class="panel-body">
                <?php if (isset($validation)) : ?>
                    <div class="col-12">
                        <div class="alert alert-danger" role="alert">
                            <?= $validation->listErrors() ?>
                        </div>
                    </div>
                <?php endif; ?>
                <form class="" action="<?= base_url('registro') ?>" method="post">
                    <div class="form-group">
                        <label for="name">Nome</label>
                        <input type="text" class="form-control" name="nome" id="nome">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" name="email" id="email">
                    </div>
                   
                    <div class="form-group">
                        <label for="password">Senha</label>
                        <input type="password" class="form-control" name="senha" id="senha">
                    </div>
                    <div class="form-group">
                        <label for="password_confirm">Confirma a senha</label>
                        <input type="password" class="form-control" name="senha_confirma" id="senha_confirma">
                    </div>
                    <button type="submit" class="btn btn-success">Enviar</button>
                </form>
            </div>
        </div>
    </div>
</div>

<?= $this->endSection() ?>