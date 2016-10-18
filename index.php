<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Blog</title>

  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="css/bootstrap.css">
  <link rel="stylesheet" href="css/estilos.css">

</head>
<body>

<?php 
include("header.php");
include("slidershow.php");
?>

<div class="container">
<div class="row padding-menor"><!-- row Level 1-->
<div class="col-xs-12 col-sm-9 col-md-9">
  <div class="row"><!-- row Level 2-->
  
  <?php
  for ($i=0; $i < 9; $i++) { 
    echo "<div class='col-xs-12 col-sm-4 col-md-4 no-padding'>";
        echo "<div class='thumbnail'>";
          echo "<img src='img/2.jpg' alt='INFORMACION DE LA IMG'>";
          echo "<div class='caption'>";
            echo "<h3>Thumbnail label</h3>";
            echo "<p class='text-justify'>Twitter Bootstrap es un framework o conjunto de herramientas de Código abierto para diseño de sitios y aplicaciones web. Contiene plantillas de diseño con tipografía, formularios, botones, cuadros, menús de navegación y otros elementos de diseño basado en HTML y CSS, así como, extensiones de JavaScript opcionales adicionales.</p>";
            echo "<p><a href='#' class='btn btn-primary' role='button'>Button</a> <a href='#' class='btn btn-default' role='button'>Button</a></p>";
          echo "</div>";
        echo "</div>";
    echo "</div>";    
  }
   ?>   

</div><!-- Level 2-->
</div><!-- ccol-xs-12 col-md-9 no-padding --> 
<div class="col-xs-12 col-sm-3 col-md-3">
  <div class="row padding-left">
      <aside>
          <h4>Categorias</h4>
          <div class="list-group">
            <a href="#" class="list-group-item active">Categoria 1</a>
            <a href="#" class="list-group-item">Categoria 2</a>
            <a href="#" class="list-group-item">Categoria 3</a>
            <a href="#" class="list-group-item">Categoria 4</a>
            <a href="#" class="list-group-item">Categoria 5</a>
            <a href="#" class="list-group-item">Categoria 6</a>
            <a href="#" class="list-group-item">Categoria 7</a>
          </div>
          <h4>Articulos Recientes</h4>
          <a href="#" class="list-group-item">
            <h4 class="list-group-heading">Inicia proyectos HTML5 mas rapido</h4>
            <p class="list-group-item-text">Bootstrap fue desarrollado por Mark Otto y Jacbod Thornton de Twitter.</p>
          </a>
          <a href="#" class="list-group-item">
            <h4 class="list-group-heading">Inicia proyectos HTML5 mas rapido</h4>
            <p class="list-group-item-text">Bootstrap fue desarrollado por Mark Otto y Jacbod Thornton de Twitter.</p>
          </a>
          <a href="#" class="list-group-item">
            <h4 class="list-group-heading">Inicia proyectos HTML5 mas rapido</h4>
            <p class="list-group-item-text">Bootstrap fue desarrollado por Mark Otto y Jacbod Thornton de Twitter.</p>
          </a>
      </aside> 
  </div><!-- row -->
</div><!-- col-xs-12 col-sm-3 col-md-3 -->   
</div><!-- row Level 1 -->
</div><!-- container-->
<div class="clearfix"></div>
<div class="container">
    <div class="row">
        <div class="col-md-9 padding-menor">
          <nav aria-label="Page navigation" class="text-center">
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div><!-- col-xs-12 col-md-9 -->
    </div><!-- row -->
</div><!-- container -->

<?php 
include("footer.php");
?>

<script src="js/jquery-3.1.0.min.js"></script>
<script src="js/bootstrap.min.js">

</script>

</body>
</html>
