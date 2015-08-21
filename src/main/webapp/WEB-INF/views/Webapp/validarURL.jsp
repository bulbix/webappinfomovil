<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>


<tiles:insertDefinition name="head">
	<tiles:putAttribute name="titulo" value="Valida Url"/>
</tiles:insertDefinition>

<body role="document" data-spy="scroll" data-target=".navbar" data-offset="75" id="page-top" onload="autosave()">




<!-- Fixed navbar -->
<nav class="navbar navbar-inverse navbar-static-top">
      <div class="container">
    <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
          <a class="navbar-brand" href="http://infomovil.com"><span><img src="<c:url value="/resources/webapp/images/apple-touch-icon-57x57.png"/>" width="50" height="50" alt="Infomovil" /> </span><span class="marLeft">Modo edición  <span class="hidden-xs">Infomovil</span></span></a> </div>
    <div id="navbar" class="navbar-collapse collapse text-right">
          <ul class="nav navbar-nav navbar-right">
        <li class="active"><a href="#" class="smoothScroll">${usuarioLogueado} <img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/fa-user.png"/>"/> </a></li>
        <li><a href="<c:url value="/infomovil/cerrarSesion"></c:url>" class="smoothScroll"> Cerrar sesión <img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/fa-sign-out.png"/>"/></a></li>
      </ul>
        </div>
    <!--/.nav-collapse --> 
  </div>
    </nav>
<!-- / Fixed navbar --> 

<!--Theme showcase -->
<div class="theme-showcaseApp" role="main" id="intro"> 
   
   
   
   <!-- Header -->
<div class="headerBg">
  <header>
    <div class="container header" >
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div style="height:30%; display:block; width:100%; min-height:70px;"></div>
          <p class="textWhite text-center"> <img src="<c:url value="/resources/webapp/images/fa-warning.png"/>" width="30" height="30" alt="Alerta" /></p>
          <p class="textWhite text-center"><strong>El formato de la URL no es el correcto</strong></p>
          <div style="height:30%; display:block; width:100%; min-height:70px;"></div>
        </div>
      </div>
    </div>
  </header>
</div>
<!-- /. Header --> 

    </div>
<!--/Theme showcase --> 


<!--Footer-->

<footer class="footer bgBlack"> </footer>
<!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
<div class="scroll-top page-scroll visible-xs visble-sm"> <a class="btn" href="#page-top"> <img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/fa-chevron-up.png"/>"/> Subir</a> </div>

<!--/Footer--> 

<!-- /container -->


<form id="publicarDominio" action="<c:url value="/infomovil/publicarSitio"/>" method="post">
	<div id="modalPublicacion"></div>
	<input type="hidden" id="nombreDominio" name="nombreDominio" >
	<input type="hidden" id="tipoDominio" name="tipoDominio" >
	<input type="hidden" id="idCatTipoRecurso" name="idCatTipoRecurso" value="1">
</form>
<!-- Bootstrap core JavaScript
    ================================================== --> 
<!-- Placed at the end of the document so the pages load faster --> 
<script type="text/javascript" src="<c:url value="/resources/webapp/js/jquery.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/webapp/js/bootstrap.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/webapp/js/docs.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/webapp/js/smoothscroll.js"/>"> </script>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug --> 
<script type="text/javascript" src="<c:url value="/resources/webapp/js/ie10-viewport-bug-workaround.js"/>"></script>
<!-- bxSlider Javascript file --> 
<script type="text/javascript" src="<c:url value="/resources/webapp/js/jquery.bxslider.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/webapp/js/jqBootstrapValidation.js"/>"></script>

<script>

$(function () {
	  $('[data-toggle="popover"]').popover()
	});
	
$('#description').elastic();
// jQuery for page scrolling feature - requires jQuery Easing plugin

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
	
</script>
</body>
</html>
