<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<tiles:insertDefinition name="head">
	<tiles:putAttribute name="titulo" value="Infomovil"/>
</tiles:insertDefinition>

<body>
<!-- Fixed navbar -->
<tiles:insertDefinition name="navGen"></tiles:insertDefinition>
<!-- / Fixed navbar --> 

<!--Theme showcase -->
<div class="theme-showcaseApp" role="main" id="intro"> 
   <!-- Header -->
<div class="headerBg">
  <header>
    <div class="container header" >
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="h30w100"></div>
          <p class="textWhite text-center"> <img src="<c:url value="/resources/webapp/images/fa-warning.png"/>" width="30" height="30" alt="Alerta" /></p>
          <p class="textWhite text-center">El formato de la URL no es el correcto</p>
          <div class="h30w100"></div>
        </div>
      </div>
    </div>
  </header>
</div>
<!-- /. Header --> 
    </div>
<!--/Theme showcase --> 
<!--Footer-->

<tiles:insertDefinition name="footer"></tiles:insertDefinition>
<!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
<div class="scroll-top page-scroll visible-xs visble-sm"> <a class="btn" href="#page-top"> <img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/fa-chevron-up.png"/>"/> Subir</a> </div>

<!--/Footer--> 

<!-- /container -->

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
<%-- <script type="text/javascript" src="<c:url value="/resources/webapp/js/jquery.bxslider.min.js"/>"></script> --%>
<%-- <script type="text/javascript" src="<c:url value="/resources/webapp/js/jqBootstrapValidation.js"/>"></script> --%>

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
