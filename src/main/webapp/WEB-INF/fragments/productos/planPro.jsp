<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<div class="prodBody">
	<div class="col-xs-12 text-center prodPadd10" >
		<p class="textGray"><tiles:getAsString name="datoUrl"/></p>
		<p class="textGray">
			<img width="25" height="25" alt="Infomovil"
				src="<c:url value="/resources/webapp/images/"/><tiles:getAsString name="imgActivo"/>" />
			<tiles:getAsString name="productoActivo"/>
		</p>
	</div>
	<div class="col-xs-12 text-center">
		<span>Vigencia del:<br/> <strong><tiles:getAsString name="fechaInicial"/></strong> <br/>a <br/><strong><tiles:getAsString name="fechaFinal"/></strong></span>
	</div>
	<div class="clearfix"></div>
	<div class="divider"></div>
	
	<div style=<tiles:getAsString name="visibleBtnRenueva"/>>
		<hr />
		<div class="col-xs-12 text-center">
		<p class="reset"><select class="col-xs-12"><option>1 mes</option><option>12 meses</option></select></p>
	<div class="clearfix"></div>
		<div class="divider"></div>
			<h3 class="prodPrice">
				<sup>$</sup><span><strong>50.00</strong><span
					class="prodNotes"> mxn</span></span>
			</h3>
		</div>
		<div class="clearfix"></div>
		<div class="divider"></div>
		<div class="col-xs-12 text-center">
			<a href="#" data-toggle="modal" data-target="#myModalConfDatos"
				class="btn btn-default btn-outlineGreen text-center textWhite">Renueva
				ahora</a>
		</div>
		<div class="clearfix"></div>
	</div> 
</div>