<!DOCTYPE html>
<html lang="en">
<head>
  <title><?php
    if (!isset($title)){ echo MYAPPNAME." ";}
    else{ echo $title." - ".MYAPPNAME; } ?></title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="<?php echo base_url('assets/bootstrap/css/dklightzero.css'); ?>">
  <script src="<?php echo base_url('assets/bootstrap/js/bootstrap.bundle.min.js');?>" integrity="" crossorigin="anonymous"></script>
        <script src="offcanvas.js"></script>
        <script src="<?php echo base_url('assets/bootstrap/js/jquery-3.3.1.slim.min.js'); ?>" integrity="" crossorigin="anonymous"></script>
        <script src="<?php echo base_url('assets/bootstrap/js/popper.min.js'); ?>" integrity="" crossorigin="anonymous"></script>
        
</head>
<body>
<div class="container bg-default">
  <div class="container bg-light col-md-8">
   <?= $this->renderSection("body") ?>
   <p>&nbsp;</p>
</div>
</div>
</body>
</html>