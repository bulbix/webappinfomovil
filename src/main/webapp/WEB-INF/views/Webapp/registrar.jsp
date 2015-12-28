<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<tiles:insertDefinition name="head">
	<tiles:putAttribute name="titulo" value="Registrar"/>
</tiles:insertDefinition>

<body role="document" data-spy="scroll" data-target=".navbar" data-offset="75" id="page-top">

<!-- Fixed navbar -->
<tiles:insertDefinition name="navReg"></tiles:insertDefinition>
<!-- / Fixed navbar --> 

<!--Theme showcase -->
<div class="theme-showcaseReg" role="main" id="intro"> 
      
      <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class=" text-center">
    <div class="divider hidden-xs hidden-sm"></div>
    <h1 class="textBlack hidden">Registra tu cuenta</h1>
    <h5 class="textPurple">Registra tu cuenta</h5>
    <div class="container">
    
		<form id="formRegistro" action="registrar" method="post">
        <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
	        <!--email-->
	        <div class="form-group " >
	        	<div class="control-group">
	            	<label class="control-label hidden-xs"></label>
	            	<div class="controls">
	                	<input type="email" class="form-control" placeholder="Correo" id="correo" name="correo" required="required" style="max-width:280px; margin:0 auto"/>
	                  	<p class="help-block textBlack text-left" style="max-width:280px; margin:0 auto;"></p>
	                </div>
	          	</div>
	        </div>
	        <!--email--> 
        <p class="help-block text-left hidden-sm hidden-md hidden-lg" style="max-width:280px; margin:10px auto;"></p>
	        <!--password-->
	        <div class="form-group " >
	        	<div class="control-group">
	            	<label class="control-label hidden-xs"></label>
		            <div class="controls">
		                  <input type="password" class="form-control" style="max-width:280px; margin:0 auto" placeholder="Contraseña" id="contrasenia" name="contrasenia" required="required" 
		                  		data-validation-regex-regex="(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,15})$" 
		        				data-validation-regex-message="Contraseña debe ser de 8 a 15 caracteres (letras y números)"/>
		                  <p class="help-block textBlack text-left" style="max-width:280px; margin:0 auto;"></p>
		           </div>
	          </div>
	       </div>
	        <!--password-->
        <p class="help-block text-left hidden-sm hidden-md hidden-lg" style="max-width:280px; margin:10px auto;"></p>
	         <!--confirm password-->
	       <div class="form-group">
	       		<div class="control-group">
	            	<label class="control-label hidden-xs"></label>
	            	<div class="controls">
	                	<input type="password" class="form-control" style="max-width:280px; margin:0 auto" placeholder="Confirmar contraseña" data-validation-matches-match="contrasenia" 
	                  		data-validation-matches-message="Las contraseñas no coinciden"/>
	                  	<p class="help-block text-left" style="max-width:280px; margin:0 auto;"></p>
	                </div>
	          	</div>
	       </div>
	        <!--confirm password-->
	        <p class="help-block text-left hidden-sm hidden-md hidden-lg" style="max-width:280px; margin:10px auto;"></p>
	         <!--codigo-->
	        <div class="form-group">
	        	<div class="control-group">
	            	<label class="control-label hidden-xs"></label>
	            	<div class="controls">
	                	<input type="text" class="form-control" style="max-width:280px; margin:0 auto" placeholder="Código de promoción" id="codigo" name="codigo"/>
	                  	<p class="help-block text-left" style="max-width:280px; margin:0 auto;"></p>
	                </div>
	          	</div>
	        </div>
	        <!--codigo--> 
               <p class="help-block text-left hidden-sm hidden-md hidden-lg" style="max-width:280px; margin:10px auto;"></p>
               
             
	        <div class="form-group">
	        	<div class="divider"></div>
	            	<input type="submit" value="&iexcl;Reg&iacute;strame!" class="btn btn-default btn-outlineGreen  text-center textWhite" style="max-width:280px; width:100%; margin:0 auto"/>
	        </div>
	        </div>
	        <div class="clear"></div>
	        
	        <div class="divider"></div>
	        <div class="text-center"><img src="resources/webapp/images/line.png" class="lineWht" alt=""/></div>
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
<!-- Bootstrap core JavaScript--> 
<!-- Placed at the end of the document so the pages load faster -->
<tiles:insertDefinition name="jsCore"></tiles:insertDefinition> 
<tiles:insertDefinition name="jsScripts"></tiles:insertDefinition>

</body>
</html>
