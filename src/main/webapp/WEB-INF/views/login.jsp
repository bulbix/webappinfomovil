<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>


<tiles:insertDefinition name="head">
	<tiles:putAttribute name="titulo" value="Login"/>
</tiles:insertDefinition>

<body role="document" data-spy="scroll" data-target=".navbar" data-offset="75" id="page-top">

<!-- Fixed navbar -->
<tiles:insertDefinition name="navLogin"></tiles:insertDefinition>
<!-- / Fixed navbar --> 

<!--Theme showcase -->
<div class="theme-showcaseInicio" role="main" id="intro"> 

	<c:if test="${not empty errorCta}">
		<div class="errorblock col-xs-12 text-center textBlack">
			<p><img src="<c:url value="/resources/webapp/images/fa-informacion.png"/>" width="20" height="20" alt="${errorCta}" /> ${errorCta} </p>
        </div>
	</c:if>
		     
      <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class=" text-center">
    <div class="divider hidden-xs hidden-sm"></div>
    <h1 class="textPurple hidden"><spring:message code="LOGINLA0003"/></h1>
    
    <h5 class="textPurple animated fadeIn"><spring:message code="LOGINLA0003"/></h5>
    <div class="dividerSmall"></div>
    <div class="animated fadeIn">
    
    <c:if test="${not empty error}">
		<div class="errorblock col-xs-12 text-center textBlack">
			<img src="<c:url value="/resources/webapp/images/fa-warning-bk.png"/>" width="20" height="20" alt="Alerta" /><spring:message code="${sessionScope['SPRING_SECURITY_LAST_EXCEPTION'].message}"/></div>
			<div class="clear"></div><div class="dividerSmall"></div>
	</c:if>
			
    <form name='f' action="j_spring_security_check" method='POST'>
      
      <!--email-->
    	<div class="form-group col-xs-12">
        	<div class="control-group">
          <!--<label class="control-label"></label>-->
	        	<div class="controls">
	            	<input type="email" class="form-control" style="text-transform:lowercase; max-width:280px; margin:0 auto" placeholder="<spring:message code="LOGINLA0008"/>" required="required" name="j_username" <c:if test="${not empty ctaCorreo}"> value = " ${ ctaCorreo } " </c:if>/>
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
	            	<input type="password" class="form-control" style="max-width:280px; margin:0 auto" placeholder="<spring:message code="LOGINLA0009"/>" required="required" name='j_password'/>
	                <p class="help-block text-left" style="max-width:280px; margin:10px auto;"></p>
	            </div>
        	</div>
         </div>
      <!--password-->
      
      
        
      	<input type='checkbox' style="display:none" name='_spring_security_remember_me' checked/>     

    	
      	<div class="form-group col-xs-12">
      		<input type="submit" value="Inicia sesi&oacute;n" class="btn btn-default btn-outlineGreen text-center textWhite" style="min-width:280px; max-width:280px; margin:15px auto;">
      	</div>
      
	

	    <div class="text-center">
      
      	<img src="<c:url value="/resources/webapp/images/line.png"/>" class="lineWht" alt="Linea"/></div>
      	<div class="form-group col-xs-12 animated fadeIn"> <span class="lineNotesLogin" style=" max-width:280px; margin:0 auto"><a href="<c:url value="/resetpassword"/>" class="linkWhite"><span><spring:message code="LOGINLA0004"/></span> <br/><span class="textPurple textUnder"><strong><spring:message code="LOGINLA0005"/></strong></span></a></span> </div>
      	
      	
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

<script type="text/javascript">
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
var getParam = getUrlParameter('lang');
var ext = location.search.split('lang=')[1];
var ln = window.navigator.language||navigator.browserLanguage;
var getLeng = ln.toLowerCase();
var url =  window.location.href;

console.log('Debe ser: ' + url +"?lang=en");
if(getLeng == 'en-us' && getParam != 'en')
	window.location.href = url +"?lang=en";
else if(getLeng == 'es-mx' && getParam != 'es')
	window.location.href = url +"?lang=es";
console.log("El valor del idioma es: " + getLeng + " y el lang="+ getParam);
</script>

</body>
</html>
