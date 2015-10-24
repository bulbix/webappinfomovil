<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<div class="prodBody">
	<div class="col-xs-12 text-center prodPadd10 navEditorSFl textBlack">
		<p class="textGreen"><tiles:getAsString name="datoUrl"/></p>
		<p class="textGreen">
			<img width="25" height="25" alt="Infomovil" src="<c:url value="/resources/webapp/images/"/><tiles:getAsString name="imgActivo"/>"/>
			<tiles:getAsString name="productoActivo"/>
		</p>
	</div>
	<div class="col-xs-12 text-center textBlack">
		<span>Vigencia del:<br/> <strong><tiles:getAsString name="fechaInicial"/></strong> <br/>a <br/><strong><tiles:getAsString name="fechaFinal"/></strong></span>
	</div>
	<div class="clearfix"></div>
	<div class="divider"></div>
	<div style=<tiles:getAsString name="visibleBtnRenueva"/>>
		<hr/>
		<div class="col-xs-12 text-center textBlack">
			<p class="reset">12 meses</p>
			<h3 class="prodPrice">
				<sup>$</sup><span><strong>199.00</strong><span
				class="prodNotes"> MXN</span></span>
			</h3>
		</div>					
		<div class="clearfix"></div>
		<div class="divider"></div>
		<div class="col-xs-12 text-center">
		<a href="#" data-toggle="modal" data-target="#myModalConfDatos"
		class="btn btn-default btn-outlineGreen text-center textWhite">Renueva ahora</a>
		</div>	
	</div>						
	<div class="clearfix"></div>
</div>