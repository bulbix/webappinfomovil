<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<!-- Producto -->
<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 dBlock">
	<!-- CABECERA -->
	<div class="prodHeader">
		<h5 class="prodTitle"><tiles:getAsString name="productoTitulo"/></h5>
	</div>
	<!-- /CABECERA -->
	<!-- CUERPO -->
	<c:set var="fragmentProduct" value="${productoNombre}"/>
<%-- 	<c:set var="urlSitio" value="${urlSitio}" scope="request" /> --%>
	<tiles:insertDefinition name="${productoNombre}">
		<tiles:putAttribute name="productoActivo" value="${productoActivo}" />
		<tiles:putAttribute name="datoUrl" value="${datoUrl}" />
		<tiles:putAttribute name="fechaInicial" value="${fechaInicial}" />
		<tiles:putAttribute name="fechaFinal" value="${fechaFinal}" />
		<tiles:putAttribute name="imgActivo" value="${imgActivo}" />
	</tiles:insertDefinition>
	<!--/ CUERPO -->
	<!-- PIE -->
	<div class="prodFooter"></div>
	<!-- /PIE -->
</div>
<!--/ Producto -->
