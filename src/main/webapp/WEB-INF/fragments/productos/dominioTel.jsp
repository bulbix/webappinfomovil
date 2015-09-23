<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<div class="prodBody">
	<div class="col-xs-12 text-center prodPadd10">
		<p class="textGreen"><tiles:getAsString name="datoUrl"/></p>
		<p class="textGreen">
			<img width="25" height="25" alt="Infomovil" src="<c:url value="/resources/webapp/images/"/><tiles:getAsString name="imgActivo"/>"/>
			<tiles:getAsString name="productoActivo"/>
		</p>
	</div>
	<div class="col-xs-12 text-center">
		<span>Vigencia del:<br/> <strong><tiles:getAsString name="fechaInicial"/></strong> <br/>a <br/><strong><tiles:getAsString name="fechaFinal"/></strong></span>
	</div>
	<div class="clearfix"></div>
	<div class="divider"></div>
	<div class="clearfix"></div>
</div>