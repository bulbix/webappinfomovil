<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<!-- Producto -->
<div class=<tiles:getAsString name="claseProductos"/>>
	<!-- CABECERA -->
	<div class="prodHeader">
		<h5 class="prodTitle"><tiles:getAsString name="productoTitulo"/></h5>
	</div>
	<!-- /CABECERA -->
	<!-- CUERPO -->
	<c:set var="fragmentProduct" value="${productoNombre}"/>
	<tiles:insertDefinition name="${productoNombre}">
		<tiles:putAttribute name="productoActivo" value="${productoActivo}" />
		<tiles:putAttribute name="datoUrl" value="${datoUrl}" />
		<tiles:putAttribute name="fechaInicial" value="${fechaInicial}" />
		<tiles:putAttribute name="fechaFinal" value="${fechaFin}" />
		<tiles:putAttribute name="imgActivo" value="${imgActivo}" />
		<tiles:putAttribute name="visibleBtnRenueva" value="${displayButton}" />
	</tiles:insertDefinition>
	<!--/ CUERPO -->
	<!-- PIE -->
	<div class="prodFooter"></div>
	<!-- /PIE -->
</div>
<!--/ Producto -->

<%-- <h1><tiles:getAsString name="claseProductos"/></h1> --%>
