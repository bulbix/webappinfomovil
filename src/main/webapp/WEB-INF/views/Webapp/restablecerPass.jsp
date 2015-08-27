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
				<h5><img src="<c:url value="/resources/webapp/images/fa-informacion.png"/>" width="40" height="40" alt="${mensaje}" /> ${mensaje} </h5>
	        </div>
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
<!-- Bootstrap core JavaScript --> 
<!-- Placed at the end of the document so the pages load faster --> 
<tiles:insertDefinition name="jsCore"></tiles:insertDefinition> 
<tiles:insertDefinition name="jsScripts"></tiles:insertDefinition>
</body>
</html>
