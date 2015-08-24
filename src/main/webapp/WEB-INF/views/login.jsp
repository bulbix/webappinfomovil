<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<tiles:insertDefinition name="head">
	<tiles:putAttribute name="titulo" value="Login Infomovil"/>
</tiles:insertDefinition>

<body role="document" data-spy="scroll" data-target=".navbar" data-offset="75" id="page-top">

<!-- Fixed navbar -->
<tiles:insertDefinition name="navGen"></tiles:insertDefinition>
<!-- / Fixed navbar --> 

<!--Theme showcase -->
<div class="theme-showcaseApp" role="main" id="intro"> 

	<c:if test="${not empty errorCta}">
			<div class="errorblock col-xs-12 text-center textBlack">
				<h4><img src="<c:url value="/resources/webapp/images/fa-informacion.png"/>" width="40" height="40" alt="${errorCta}" /> ${errorCta} </h4>
                </div>
	</c:if>
		     
      <!-- Main jumbotron for a primary marketing message or call to action -->
      <div class="container text-center">
    <div class="divider hidden-xs hidden-sm"></div>
    <h1 class="textBlack hidden">Edita tu sitio web</h1>
    <h3 class="textBlack">Edita tu sitio web</h3>
    <div class="container">
    
    <c:if test="${not empty error}">
			<div class="errorblock col-xs-12 text-center textWhite">
				<img src="<c:url value="/resources/webapp/images/fa-warning.png"/>" width="15" height="15" alt="Alerta" /> ${sessionScope["SPRING_SECURITY_LAST_EXCEPTION"].message}</div>
	</c:if>
			
      <form name='f' action="j_spring_security_check" method='POST'>
        
        <!--email-->
        <div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
              <div class="control-group">
            <!--<label class="control-label"></label>-->
            <div class="controls">
                  <input type="email" class="form-control" placeholder="Email" required="required" name="j_username" <c:if test="${not empty ctaCorreo}"> value = " ${ ctaCorreo } " </c:if>/>
                  <p class="help-block"></p>
                </div>
          </div>
            </div>
        <!--email--> 
        
        <!--password-->
        <div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
              <div class="control-group">
            <!--<label class="control-label"></label>-->
            <div class="controls">
                  <input type="password" class="form-control" placeholder="Contraseña" required="required" name='j_password'/>
                  <p class="help-block"></p>
                </div>
          </div>
            </div>
        <!--password-->
        
        <input type='checkbox' style="display:none" name='_spring_security_remember_me' checked/>
        

        <div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3"> <span style="margin:10px 0; display:block; width:100%; min-height:23px; "><a href="<c:url value="/resetpassword"/>" class="linkWhite">Si olvidaste o no tienes contraseña, haz click aquí</a></span> </div>

<!--         <input type="hidden" name="_spring_security_remember_me" value="true" /> -->


        <div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
              <input type="submit" value="Inicia sesi&oacute;n" class="btn btn-default btn-outlineGreen col-xs-12 text-center textWhite">
            </div>
<div class="clear dividerSmall"></div>

		<div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3"> <span class="textWhite"> ¿Aún no tienes cuenta? </span><span><a href="<c:url value="/registrar"/>">Regístrate</a></span> </div>

        <div class="divider"></div>
        <div class="text-center">
        
        
        
        <img src="<c:url value="/resources/webapp/images/line.png"/>" width="740" alt="Linea"/></div>
    
        <div class="col-xs-12 col-sm-12" style="padding: 10px 0;"> <span class="textWhite text-center text-small" >Si continúas, aceptas las</span><span> <a href="#" title="Condiciones del servicio" data-toggle="modal" data-target="#myModalTerminos">condiciones del servicio </a></span><span class="textWhite">y las </span><span><a href="#" data-toggle="modal" data-target="#myModalAviso">pol&iacute;ticas de privacidad</a></span><span class="textWhite"> de Infomovil.</span>
              </p>
            </div>
      </form>
        </div>
  </div>
    </div>
<!--/Theme showcase --> 

<!--Footer-->
<tiles:insertDefinition name="footer"></tiles:insertDefinition>
<!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
<div class="scroll-top page-scroll visible-xs visble-sm"> <a class="btn" href="#page-top"> <img src="<c:url value="/resources/webapp/images/fa-chevron-up.png"/>" width="15" height="15" alt="Alerta" /> Subir</a> </div>

<!--/Footer--> 
<!-- /container -->
 
 <tiles:insertDefinition name="modalGen">
	<tiles:putAttribute name="tituloModal" value="Condiciones del servicio"/>
	<tiles:putAttribute name="nombreArchivo" value="Terminos.html"/>
</tiles:insertDefinition>
<!-- <div id="myModalTerminos" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> -->
<!--       <div class="modal-dialog modal-lg"> -->
<!--     <div class="modal-content"> -->
<!--           <div class="modal-header"> -->
<!--         <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> -->
<!--         <p class="modal-title" >Condiciones del servicio</p> -->
<!--       </div> -->
<!--           <div class="modal-body bgWhite"> -->
          
         
<!--         <iframe class="legales" src="http://www.infomovil.com/pages/legal/terminos.html" frameborder="0"></iframe> -->
<!--       </div> -->
<!--           <div class="modal-footer"> -->
<!--         <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button> -->
<!--       </div> -->
<!--         </div> -->
<!--   </div> -->
<!--     </div> -->
<!-- <div id="myModalAviso" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> -->
<!--       <div class="modal-dialog modal-lg"> -->
<!--     <div class="modal-content"> -->
<!--           <div class="modal-header"> -->
<!--         <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> -->
<!--         <p class="modal-title" >Pol&iacute;ticas de privacidad</p> -->
<!--       </div> -->
<!--           <div class="modal-body bgWhite"> -->
<!--         <iframe class="legales" src="http://www.infomovil.com/pages/legal/aviso.html" frameborder="0"></iframe> -->
<!--       </div> -->
<!--           <div class="modal-footer"> -->
<!--         <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button> -->
<!--       </div> -->
<!--         </div> -->
<!--   </div> -->
<!--     </div> -->
<!-- Bootstrap core JavaScript --> 
<!-- Placed at the end of the document so the pages load faster --> 
<tiles:insertDefinition name="jsCore"></tiles:insertDefinition> 
<tiles:insertDefinition name="jsScripts"></tiles:insertDefinition>

</body>
</html>
