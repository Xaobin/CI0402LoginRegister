<?= $this->extend("layouts/app") ?>

<?= $this->section("body") ?>
<? $buttons2="
<div class='dropdown'>

<div class='menu' aria-labelledby='dropdownMenuButton'>
 <a class='item' href='".site_url('login')."'>Login</a>
    <a class='item' href='".site_url('registro')."'>Registro</a>

</div>
</div>
";
?>
<div class="container" style="margin-top:20px;">
    <div class="row">
        
            <?=$buttons2 ?>
          
        </div>
    </div>
</div>

<?= $this->endSection() ?>