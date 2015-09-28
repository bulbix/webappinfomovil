<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<tiles:insertDefinition name="head">
	<tiles:putAttribute name="titulo" value="Registrar"/>
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
        
	        <!--email-->
	        <div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
	        	<div class="control-group">
	            	<label class="control-label hidden-xs"></label>
	            	<div class="controls">
	                	<input type="email" class="form-control" placeholder="Correo" id="correo" name="correo" required="required"/>
	                  	<p class="help-block textBlack text-left"></p>
	                </div>
	          	</div>
	        </div>
	        <!--email--> 
        
	        <!--password-->
	        <div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
	        	<div class="control-group">
	            	<label class="control-label hidden-xs"></label>
		            <div class="controls">
		                  <input type="password" class="form-control" placeholder="Contraseña" id="contrasenia" name="contrasenia" required="required" 
		                  		data-validation-regex-regex="(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,15})$" 
		        				data-validation-regex-message="Contraseña debe ser de 8 a 15 caracteres (letras y números)"/>
		                  <p class="help-block textBlack text-left"></p>
		           </div>
	          </div>
	       </div>
	        <!--password-->
        
	         <!--confirm password-->
	       <div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
	       		<div class="control-group">
	            	<label class="control-label hidden-xs"></label>
	            	<div class="controls">
	                	<input type="password" class="form-control" placeholder="Confirmar contraseña" data-validation-matches-match="contrasenia" 
	                  		data-validation-matches-message="Las contraseñas no coinciden"/>
	                  	<p class="help-block text-left"></p>
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
	                  	<p class="help-block text-left"></p>
	                </div>
	          	</div>
	        </div>
	        <!--codigo--> 
               
	        <div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
	        	<div class="divider"></div>
	            	<input type="submit" value="&iexcl;Reg&iacute;strame!" class="btn btn-default btn-outlineGreen col-xs-12 text-center textWhite"/>
	        </div>
	        
	        <div class="divider"></div>
	        <div class="text-center"><img src="resources/webapp/images/line.png" class="lineWht" alt=""/></div>
	        <div class="col-xs-12 col-sm-12 lineNotesLogin"> <span class="textWhite text-center text-small">Si continúas, aceptas las</span><span> 
	        	<a href="#" title="Condiciones del servicio" data-toggle="modal" data-target="#myModalTerminos">condiciones del servicio</a></span>
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
<!-- Bootstrap core JavaScript--> 
<!-- Placed at the end of the document so the pages load faster -->
<tiles:insertDefinition name="jsCore"></tiles:insertDefinition> 
<tiles:insertDefinition name="jsScripts"></tiles:insertDefinition>

</body>
</html>
