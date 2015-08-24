<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<tiles:insertDefinition name="head">
	<tiles:putAttribute name="titulo" value="Restablecer contraseña"/>
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
    <h1 class="textBlack hidden">Restablecer tu contraseña</h1>
    <h3 class="textBlack">Restablecer tu contraseña</h3>
    <div class="container">
    
	<c:if test="${not empty mensaje}">
				<div class="errorblock col-xs-12 text-center textBlack">
				<h5><img src="<c:url value="/resources/webapp/images/fa-informacion.png"/>" width="40" height="40" alt="${mensaje}" /> ${mensaje} </h4>
                </div>
<!-- 			<div class="errorblock"> -->
<%-- 				${mensaje}</div> --%>
	</c:if>
          <form name='f' action="<c:url value="/executeResetPassword"/>" method='POST' >
        
        <!--email-->
        <div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
              <div class="control-group">
            <label class="control-label">Ingresa tu e-mail y te enviaremos una liga para restablecer tu contraseña</label>
            <div class="controls">
                  <input type="email" class="form-control" placeholder="Email" required="required" name="email"/>
                  <p class="help-block"></p>
                </div>
          </div>
            </div>
        <!--email-->
        
        
        <div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
              <input type="submit" value="Enviar por correo" class="btn btn-default btn-outlineGreen col-xs-12 text-center textWhite">
            </div>
       
        <div class="divider"></div>
      
       
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
    
<!-- Bootstrap core JavaScript --> 
<!-- Placed at the end of the document so the pages load faster --> 
<tiles:insertDefinition name="jsCore"></tiles:insertDefinition> 
<tiles:insertDefinition name="jsScripts"></tiles:insertDefinition>
</body>
</html>
