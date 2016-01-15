<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
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
    <h1 class="textBlack hidden"><spring:message code="REGISTROLA0001"/></h1>
    <h5 class="textPurple animated fadeIn"><spring:message code="REGISTROLA0001"/></h5>
    <div class="container">
    
		<form id="formRegistro" action="registrar" method="post">
        <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 animated fadeIn">
	        <!--email-->
	        <div class="form-group " >
	        	<div class="control-group">
	            	<label class="control-label hidden-xs"></label>
	            	<div class="controls">
	                	<input type="email" class="form-control" placeholder="<spring:message code="REGISTROLA0005"/>" id="correo" name="correo" required="required" style="max-width:280px; margin:0 auto"/>
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
		                  <input type="password" class="form-control" style="max-width:280px; margin:0 auto" placeholder="<spring:message code="REGISTROLA0006"/>" id="contrasenia" name="contrasenia" required="required" 
		                  		data-validation-regex-regex="(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,15})$" 
		        				data-validation-regex-message="<spring:message code="REGISTROLA0003"/>"/>
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
	                	<input type="password" class="form-control" style="max-width:280px; margin:0 auto" placeholder="<spring:message code="REGISTROLA0007"/>" data-validation-matches-match="contrasenia" 
	                  		data-validation-matches-message="<spring:message code="REGISTROLA0004"/>"/>
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
	                	<input type="text" class="form-control" style="max-width:280px; margin:0 auto" placeholder="<spring:message code="REGISTROLA0009"/>" id="codigo" name="codigo"/>
	                  	<p class="help-block text-left" style="max-width:280px; margin:0 auto;"></p>
	                </div>
	          	</div>
	        </div>
	        <!--codigo--> 
               <p class="help-block text-left hidden-sm hidden-md hidden-lg" style="max-width:280px; margin:10px auto;"></p>
               
             
	        <div class="form-group">
	        	<div class="divider"></div>
	            	<input type="submit" value="<spring:message code="REGISTROLA0010"/>" class="btn btn-default btn-outlineGreen  text-center textWhite" style="max-width:280px; width:100%; margin:0 auto"/>
	        </div>
	        </div>
	        <div class="clear"></div>
	        
	        <div class="divider"></div>
	        <div class="text-center"><img src="resources/webapp/images/line.png" class="lineWht" alt=""/></div>
	      <div class="col-xs-12 col-sm-6 col-sm-offset-3 animated fadeIn" class="pad10_0"> <span class="textWhite text-center text-small" ><spring:message code="REGISTROLA0011"/></span>
      		<span> <a href="#" title="Condiciones del servicio" data-toggle="modal" data-target="#myModalTerminos" class="textPurple textUnder text-small"><strong><spring:message code="REGISTROLA0012"/></strong></a></span>
      		<span class="textWhite"><spring:message code="REGISTROLA0013"/></span><span><a href="#" data-toggle="modal" data-target="#myModalAviso" class="textPurple textUnder text-small"><strong><spring:message code="REGISTROLA0014"/></strong></a></span>
      		<span class="textWhite"><spring:message code="REGISTROLA0015"/></span>
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
