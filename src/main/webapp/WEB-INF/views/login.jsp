<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<tiles:insertDefinition name="head">
	<tiles:putAttribute name="titulo" value="Inicia sesión"/>
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
    <div class=" text-center">
    <div class="divider hidden-xs hidden-sm"></div>
    <h1 class="textPurple hidden">Edita tu página web</h1>
    
    <h5 class="textPurple">Edita tu página web</h5>
    <div class="dividerSmall"></div>
    <div class="">
    
    <c:if test="${not empty error}">
		<div class="errorblock col-xs-12 text-center textWhite">
			<img src="<c:url value="/resources/webapp/images/fa-warning.png"/>" width="15" height="15" alt="Alerta" /> ${sessionScope["SPRING_SECURITY_LAST_EXCEPTION"].message}</div>
	</c:if>
			
    <form name='f' action="j_spring_security_check" method='POST'>
      
      <!--email-->
    	<div class="form-group col-xs-12">
        	<div class="control-group">
          <!--<label class="control-label"></label>-->
	        	<div class="controls">
	            	<input type="email" class="form-control" style="text-transform:lowercase; max-width:280px; margin:0 auto" placeholder="Email" required="required" name="j_username" <c:if test="${not empty ctaCorreo}"> value = " ${ ctaCorreo } " </c:if>/>
	                <p class="help-block text-left" style="max-width:280px; margin:10px auto;"></p>
	            </div>
        	</div>
        </div>
      <!--email--> 
      
      <!--password-->
		<div class="form-group col-xs-12">
      		<div class="control-group">
          <!--<label class="control-label"></label>-->
	          	<div class="controls">
	            	<input type="password" class="form-control" style="max-width:280px; margin:0 auto" placeholder="Contraseña" required="required" name='j_password'/>
	                <p class="help-block text-left" style="max-width:280px; margin:10px auto;"></p>
	            </div>
        	</div>
         </div>
      <!--password-->
      
      	<input type='checkbox' style="display:none" name='_spring_security_remember_me' checked/>     

    	<div class="form-group col-xs-12"> <span class="lineNotesLogin" style=" max-width:280px; margin:0 auto"><a href="<c:url value="/resetpassword"/>" class="linkWhite"><span>Si olvidaste o no tienes contraseña,</span> <br/><span class="textPurple textUnder"><strong>haz clic aquí</strong></span></a></span> </div>

      	<div class="form-group col-xs-12">
      		<input type="submit" value="Inicia sesi&oacute;n" class="btn btn-default btn-outlineGreen text-center textWhite" style="min-width:280px; max-width:280px; margin:15px auto;">
      	</div>
      
		<div class="clear dividerSmall"></div>
		<div class="form-group col-xs-12"> <div class="lineNotesLogin" style="max-width:280px; margin:0 auto"> <span class="textWhite"> ¿Aún no tienes cuenta? </span><span><a href="<c:url value="/registrar"/>" class="textPurple textUnder"><strong>Regístrate</strong></a></span></div> </div>
	    <div class="divider"></div>
	    <div class="text-center">
      
      	<img src="<c:url value="/resources/webapp/images/line.png"/>" class="lineWht" alt="Linea"/></div>
      	<div class="col-xs-12 col-sm-6 col-sm-offset-3 " class="pad10_0"> <span class="textWhite text-center text-small" >Si continúas, aceptas las</span>
      		<span> <a href="#" title="Condiciones del servicio" data-toggle="modal" data-target="#myModalTerminos" class="textPurple textUnder text-small"><strong>condiciones del servicio </strong></a></span>
      		<span class="textWhite">y las </span><span><a href="#" data-toggle="modal" data-target="#myModalAviso" class="textPurple textUnder text-small"><strong>pol&iacute;ticas de privacidad</strong></a></span>
      		<span class="textWhite"> de Infomovil.</span>
        </div>
    </form>
  </div>
  </div>
</div>
<!--/Theme showcase --> 

<!--Footer-->
<tiles:insertDefinition name="footer"></tiles:insertDefinition>
<!--/Footer--> 
<!-- /container -->
<!-- Bootstrap core JavaScript --> 
<!-- Placed at the end of the document so the pages load faster --> 
<tiles:insertDefinition name="jsCore"></tiles:insertDefinition> 
<tiles:insertDefinition name="jsScripts"></tiles:insertDefinition>

</body>
</html>
