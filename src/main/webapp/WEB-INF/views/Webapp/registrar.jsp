<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!doctype html>
<html lang="es">
    <head itemscope="" itemtype="http://schema.org/WebSite">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta charset="ISO-8859-1" />
    <meta name="title" content="Infomovil" />
    <meta name="author" content="Infomovil"/>
    <meta name="designer" content="Infomovil"/>
    <meta name="description" content="Infomovil. Nunca antes ha sido tan f&aacute;cil crear un sitio web. Con Infomovil crea tu sitio f&aacute;cil, r&aacute;pido y gratuito en 5 minutos."/>
    <meta name="keywords" content="emprendedor, PyMEs, negocios PyMEs, sitio web, p&aacute;gina web, productividad, utilidades, web, m&oacute;vil, infomovil, micronegocio, crea tu sitio, mobile friendly, personal, gratis"/>
    <meta name="revisit-after" content="1 days"/>
    <meta name="rating" content="general"/>
    <meta name="copyright" content="Infomovil" />
    <meta name="name" content="Infomovil"/>
    <meta property="og:title" content="Infomovil" />
    <meta property="og:type" content="website"/>
    <meta property="og:description" content="Infomovil. Nunca antes ha sido tan f&aacute;cil crear un sitio web. Con Infomovil crea tu sitio f&aacute;cil, r&aacute;pido y gratuito en 5 minutos." />
    <meta property="og:image" content="resources/webapp/images/apple-touch-icon-57x57.png"/>
    <meta property="og:url" content="http://www.infomovil.com" />
    <meta itemprop="name" content="Infomovil"/>
    <meta itemprop="description" content="Infomovil. Nunca antes ha sido tan f&aacute;cil crear un sitio web. Con Infomovil crea tu sitio f&aacute;cil, r&aacute;pido y gratuito en 5 minutos. Sitio web creado con www.infomovil.com"/>
    <link rel="apple-touch-icon" href="resources/webapp/images/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="57x57" href="resources/webapp/images/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="resources/webapp/images/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="resources/webapp/images/apple-touch-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="resources/webapp/images/apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="resources/webapp/images/apple-touch-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="resources/webapp/images/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="resources/webapp/images/apple-touch-icon-152x152.png" />
    <link rel="shortcut icon" href="resources/webapp/images/favicon.ico" type="image/x-icon" />
    <link rel="image_src" href="resources/webapp/images/apple-touch-icon-57x57.png"/>
    <title itemprop="name">Infomovil</title>
    <link rel="canonical" href="http://www.infomovil.com" itemprop="url" />
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 8]>
      <script src=" resources/webapp/js/html5shiv.min.js"></script>
      <script src=" resources/webapp/js/respond.min.js"></script>
    <![endif]-->
    <!-- Bootstrap core CSS -->
    <link href="resources/webapp/css/bootstrap.min.css" rel="stylesheet" />
    <!-- Bootstrap theme -->
    <link href="resources/webapp/css/bootstrap-theme.min.css" rel="stylesheet" />
    <!-- Custom styles for this template -->
    <link href="resources/webapp/css/theme.css" rel="stylesheet" />
    <!-- Custom styles for this template -->
    <link href="resources/webapp/css/sticky-footer-navbar.css" rel="stylesheet" />
    <!-- bxSlider CSS file -->
    <link href="resources/webapp/css/jquery.bxslider.css" rel="stylesheet" />
    <link rel="stylesheet" href="resources/webapp/fonts/font-awesome.min.css">
    <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-53077061-1', 'auto');
 ga('send', 'pageview'); 
    </script>
    </head>

    <body role="document" data-spy="scroll" data-target=".navbar" data-offset="75" id="page-top">

<!-- Fixed navbar -->
<nav class="navbar navbar-inverse navbar-static-top">
      <div class="container">
    <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
          <a class="navbar-brand" href="http://infomovil.com"><span><img src="resources/webapp/images/apple-touch-icon-57x57.png" width="50" height="50" alt="Infomovil" /> </span><span class="marLeft">Infomovil</span></a> </div>
    <div id="navbar" class="navbar-collapse collapse text-right">
          <ul class="nav navbar-nav navbar-right">
        <li><a href="http://infomovil.com" class="smoothScroll">Inicio</a></li>
        <li class="active"><a href="#" class="smoothScroll">Regístrate</a></li>
        <li><a href="<c:url value="/login"/>" class="smoothScroll">Iniciar sesión</a></li>
      </ul>
        </div>
    <!--/.nav-collapse --> 
  </div>
    </nav>
<!-- / Fixed navbar --> 

<!--Theme showcase -->
<div class="theme-showcaseApp" role="main" id="intro"> 
      
      <!-- Main jumbotron for a primary marketing message or call to action -->
      <div class="container text-center">
    <div class="divider hidden-xs hidden-sm"></div>
    <h1 class="textBlack hidden">Registra tu cuenta</h1>
    <h3 class="textBlack">Registra tu cuenta</h3>
    <div class="container">
          <form id="formRegistro" action="registrar" method="post">
<!--         nombre -->
<!--         <div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3"> -->
<!--               <div class="control-group"> -->
<!--             <label class="control-label hidden-xs"></label> -->
<!--             <div class="controls"> -->
<!--                   <input type="text" class="form-control" placeholder="Nombre" id="nombre" name="nombre" required="required"/> -->
<!--                   <p class="help-block"></p> -->
<!--                 </div> -->
<!--           </div> -->
<!--             </div> -->
<!--         nombre  -->
        
        <!--email-->
        <div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
              <div class="control-group">
            <label class="control-label hidden-xs"></label>
            <div class="controls">
                  <input type="email" class="form-control" placeholder="Correo" id="correo" name="correo" required="required"/>
                  <p class="help-block textBlack"></p>
                </div>
          </div>
            </div>
        <!--email--> 
        
        <!--password-->
        <div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
              <div class="control-group">
            <label class="control-label hidden-xs"></label>
            <div class="controls">
                  <input type="password" class="form-control" placeholder="Contraseña" id="contrasenia" name="contrasenia" required="required" data-validation-regex-regex="(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,15})$" 
        				data-validation-regex-message="Contraseña debe ser de 8 a 15 caracteres (letras y números)"/>
                  <p class="help-block textBlack"></p>
                </div>
          </div>
            </div>
        <!--password-->
        
         <!--confirm password-->
        <div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
              <div class="control-group">
            <label class="control-label hidden-xs"></label>
            <div class="controls">
                  <input type="password" class="form-control" placeholder="Confirmar contraseña" data-validation-matches-match="contrasenia" data-validation-matches-message=
    "Las contraseñas no coinciden"/>
                  <p class="help-block"></p>
                </div>
          </div>
            </div>
        <!--confirm password-->
         <!--codigo-->
        <div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
              <div class="control-group">
            <label class="control-label hidden-xs"></label>
            <div class="controls">
                  <input type="text" class="form-control" placeholder="Código de promoción" id="codigo" name="codigo"/>
                  <p class="help-block"></p>
                </div>
          </div>
            </div>
        <!--codigo--> 
        
        
        <div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
        <div class="divider"></div>
              <input type="submit" value="&iexcl;Reg&iacute;strame!" class="btn btn-default btn-outlineGreen col-xs-12 text-center textWhite">
            </div>
        
        <div class="divider"></div>
        <div class="text-center"><img src="resources/webapp/images/line.png" width="740" alt=""/></div>
        <div class="col-xs-12 col-sm-12"> <span class="textWhite text-center text-small">Si continúas, aceptas las</span><span> <a href="#" title="Condiciones del servicio" data-toggle="modal" data-target="#myModalTerminos">condiciones del servicio </a></span><span class="textWhite">y las </span><span><a href="#" data-toggle="modal" data-target="#myModalAviso">pol&iacute;ticas de privacidad</a></span><span class="textWhite"> de Infomovil.</span>
              
            </div>
      </form>
        </div>
  </div>
    </div>
<!--/Theme showcase --> 

<!--Footer-->

<footer class="footer">
      <section class="bgBlack">
    <div class="container">
          <div class="row" >
        <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3 ">
              <p class="helpMx txtWhite reset text-center"><em>Ayudando a construir una economía digital.</em></p>
            </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-md-offset-4"> <img src="resources/webapp/images/logo_infomovil.png" alt="Infomovil" onerror="this.src='  resources/webapp/images/trans.png';" class="img-responsive imgLog" />
              <meta itemprop="name" content="Infomovil" />
            </div>
        <div  class="col-xs-12 resetAll">
              <p class="text-center text-small reset">Descarga la app y crea tu página web en 5 minutos.</p>
            </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-md-offset-4">
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mar10TB"> <a href="https://itunes.apple.com/mx/app/infomovil/id898313250?mt=8" target="blank"> <img src="resources/webapp/images/icn_appstore.png" class="img-responsive imgDes"  alt="app store" onerror="this.src='resources/webapp/images/trans.png';"/> </a> </div>
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mar10TB"> <a href="https://play.google.com/store/apps/details?id=com.infomovil.infomovil" target="blank"> <img src="resources/webapp/images/icn_gstore.png" class="img-responsive imgDes" alt="google store" onerror="this.src='resources/webapp/images/trans.png';"/> </a> </div>
            </div>
      </div>
          <div class="dividerSmall"></div>
          <div class="col-xs-12 col-sm-12">
        <p  class="text-center text-small reset">Consulta las <a href="#" title="Condiciones del servicio" data-toggle="modal" data-target="#myModalTerminos">condiciones del servicio </a>y las <a href="#" data-toggle="modal" data-target="#myModalAviso">pol&iacute;ticas de privacidad</a> de Infomovil.</p>
      </div>
          <div class="dividerSmall"></div>
        </div>
    </div>
  </section>
    </footer>
<!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
<div class="scroll-top page-scroll visible-xs visble-sm"> <a class="btn" href="#page-top"> <i class="fa fa-chevron-up"></i> Subir</a> </div>

<!--/Footer--> 
<!-- /container -->

<div id="myModalTerminos" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
    <div class="modal-content">
          <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <p class="modal-title" >Condiciones del servicio</p>
      </div>
          <div class="modal-body bgWhite">
        <iframe class="legales" src="http://www.infomovil.com/pages/legal/terminos.html" frameborder="0"></iframe>
      </div>
          <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
      </div>
        </div>
  </div>
    </div>
<div id="myModalAviso" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
    <div class="modal-content">
          <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <p class="modal-title" >Pol&iacute;ticas de privacidad</p>
      </div>
          <div class="modal-body bgWhite">
        <iframe class="legales" src="http://www.infomovil.com/pages/legal/terminos.html" frameborder="0"></iframe>
      </div>
          <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
      </div>
        </div>
  </div>
    </div>
<!-- Bootstrap core JavaScript
    ================================================== --> 
<!-- Placed at the end of the document so the pages load faster --> 
<script src="resources/webapp/js/jquery.min.js"></script> 
<script src="resources/webapp/js/bootstrap.min.js"></script> 
<script src="resources/webapp/js/docs.min.js"></script> 
<script src="resources/webapp/js/smoothscroll.js" type="text/javascript"></script> 
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug --> 
<script src="resources/webapp/js/ie10-viewport-bug-workaround.js"></script> 
<!-- bxSlider Javascript file --> 
<script src="resources/webapp/js/jquery.bxslider.min.js"></script> 
<script src="resources/webapp/js/jqBootstrapValidation.js"></script> 
<script>
  $(function () { $("input,select,textarea,password").not("[type=submit]").jqBootstrapValidation(); } );
</script> 
<script>

// jQuery for page scrolling feature - requires jQuery Easing plugin

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
</script>
</body>
</html>
