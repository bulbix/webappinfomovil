<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<tiles:insertDefinition name="head">
	<tiles:putAttribute name="titulo" value="Restablecer contraseņa"/>
</tiles:insertDefinition>


<body role="document" data-spy="scroll" data-target=".navbar" data-offset="75" id="page-top">

<!-- Fixed navbar -->
<tiles:insertDefinition name="navGen"></tiles:insertDefinition>
<!-- / Fixed navbar --> 

<!--Theme showcase -->
<div class="theme-showcaseInicio" role="main" id="intro"> 
      
      <!-- Main jumbotron for a primary marketing message or call to action -->
	<div class=" text-center">
    <div class="divider hidden-xs hidden-sm"></div>
    <h1 class="textBlack text-center hidden">Restablece tu contraseņa</h1>
    <h5 class="textPurple text-center animated fadeIn">Restablece tu contraseņa</h5>
    <div class="container">
    
		<c:if test="${not empty mensaje}">
			<div class="errorblock col-xs-12 text-center textBlack">
				<p><img src="<c:url value="/resources/webapp/images/fa-informacion.png"/>" width="20" height="20" alt="${mensaje}" /> ${mensaje} </p>
	        </div>
		</c:if>
	    
	    <form name='f' action="<c:url value="/executeResetPassword"/>" method='POST' >
	        
	        <!--email-->
	    	<div class="form-group col-xs-12 animated fadeIn">
	        	<div class="control-group">
	            <label class="control-label" style="max-width:280px; margin:0 auto;">Ingresa tu e-mail y te enviaremos una liga para restablecer tu contraseņa</label>
	            <div class="dividerSmall"></div>
	            <div class="controls">
	            	<input type="email" class="form-control lowCase" placeholder="Email" required="required" name="email" style="max-width:280px; margin:0 auto;"/>
	                	<p class="help-block"></p>
	            </div>
	            <div class="dividerSmall"></div>
	          </div>
	        </div>
	        <!--email-->
	        
	        <div class="form-group col-xs-12 animated fadeIn">
	        	<input type="submit" value="Enviar por correo" class="btn btn-default btn-outlineGreen text-center textWhite" style="min-width:280px; max-width:280px; margin:0 auto;">
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
