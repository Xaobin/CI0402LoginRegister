<?= $this->extend("layouts/app") ?>

<?= $this->section("body") ?>

<div class="container" style="margin-top:20px;">
    <div class="row">
        <div class="panel panel-primary">
            <div class="panel-heading">Perfil</div>
            <div class="panel-body">
                <h3>Olá, <?= $user['nome'] ?></h3>
                <hr>
                <p>Email: <?= $user['email'] ?></p>
                
            </div>
        </div>
    </div>
</div>

<?= $this->endSection() ?>