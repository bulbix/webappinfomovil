<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<tiles:insertDefinition name="head">
	<tiles:putAttribute name="titulo" value="${tituloCont}"/>
</tiles:insertDefinition>

<body role="document" data-spy="scroll" data-target=".navbar" data-offset="75" id="page-top">

<!-- Fixed navbar -->
<tiles:insertDefinition name="navGen"></tiles:insertDefinition>
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
<tiles:insertDefinition name="footer"></tiles:insertDefinition>
<!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
<div class="scroll-top page-scroll visible-xs visble-sm"> <a class="btn" href="#page-top"> <i class="fa fa-chevron-up"></i> Subir</a> </div>


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
    </div></p>
    

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
