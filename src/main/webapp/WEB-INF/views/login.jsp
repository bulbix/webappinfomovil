<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<tiles:insertDefinition name="head">
	<tiles:putAttribute name="titulo" value="Iniciar sesión"/>
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
	            	<input type="email" class="form-control" style="text-transform:lowercase;" placeholder="Email" required="required" name="j_username" <c:if test="${not empty ctaCorreo}"> value = " ${ ctaCorreo } " </c:if>/>
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

    	<div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3"> <span class="lineNotesLogin"><a href="<c:url value="/resetpassword"/>" class="linkWhite">Si olvidaste o no tienes contraseña, haz click aquí</a></span> </div>

      	<div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
      		<input type="submit" value="Inicia sesi&oacute;n" class="btn btn-default btn-outlineGreen col-xs-12 text-center textWhite">
      	</div>
      
		<div class="clear dividerSmall"></div>
		<div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3"> <div class="lineNotesLogin"> <span class="textWhite"> ¿Aún no tienes cuenta? </span><span><a href="<c:url value="/registrar"/>">Regístrate</a></span></div> </div>
	    <div class="divider"></div>
	    <div class="text-center">
      
      	<img src="<c:url value="/resources/webapp/images/line.png"/>" class="lineWht" alt="Linea"/></div>
      	<div class="col-xs-12 col-sm-12" class="pad10_0"> <span class="textWhite text-center text-small" >Si continúas, aceptas las</span>
      		<span> <a href="#" title="Condiciones del servicio" data-toggle="modal" data-target="#myModalTerminos">condiciones del servicio </a></span>
      		<span class="textWhite">y las </span><span><a href="#" data-toggle="modal" data-target="#myModalAviso">pol&iacute;ticas de privacidad</a></span>
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
