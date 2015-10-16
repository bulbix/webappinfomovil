<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<div class="prodBody">
	<div class="col-xs-12 text-center prodPadd10 navEditorSFl textBlack cuandoSiTienePP" style=<tiles:getAsString name="siTienePP"/>>
		<p class="textGreen"><tiles:getAsString name="datoUrl"/></p>
		<p class="textGreen">
			<img width="25" height="25" alt="Infomovil"
				src="<c:url value="/resources/webapp/images/"/><tiles:getAsString name="imgActivo"/>" />
			<tiles:getAsString name="productoActivo"/>
		</p>
	</div>
	<div class="col-xs-12 text-center textBlack cuandoSiTienePP" style=<tiles:getAsString name="siTienePP"/>>
		<span>Vigencia del:<br/> <strong><tiles:getAsString name="fechaInicial"/></strong> <br/>a <br/><strong><tiles:getAsString name="fechaFinal"/></strong></span>
	</div>
	<div class="clearfix"></div>
	<div class="divider"></div>
<!-- 	<div style=<tiles:getAsString name="visibleBtnRenueva"/>> -->
	<div>
	
	<div class="col-xs-12 text-center cuandoNoTienePP" style=<tiles:getAsString name="noTienePP"/>><p ><strong class="textGreen">¡Adquiere Plan Pro!</strong><strong class="textBlack"> Y obtén:</strong></p>
<ul class="text-left textBlack"><li>Más imágenes</li>
<li>
Video</li>
<li>
Moviliza tu sitio</li></ul></div>
		<hr />
		<div class="col-xs-12 text-center textBlack">
		<p class="reset">
			<select class="col-xs-12 textLato" id="tipoPlanPro" onChange="actualizaPrecio(this.selectedIndex)">
				<option>1 mes</option>
				<option>12 meses</option>
			</select>
		</p>
	<div class="clearfix"></div>
		<div class="divider"></div>
			<h3 class="prodPrice">
				<sup>$</sup>
				<span>
					<strong id="precioPP">40.00</strong>
					<span class="prodNotes"> MXN</span>
				</span>
			</h3>
			
			<p id="notaPP" class="prodNotes prodNotesPP textBlack cuandoSiTienePP" style=<tiles:getAsString name="siTienePP"/>>*Ya cuentas con un Plan Pro vigente, se añadirá a tu cuenta el tiempo adicional que compres.</p>
			
		</div>
		<div class="clearfix"></div>
		<div class="divider"></div>
		<div class="col-xs-12 text-center">
			<a href="#" data-toggle="modal" data-target="#myModalCompraPP"
				class="btn btn-default btn-outlineGreen text-center textWhite">Comprar</a>
		</div>
		<div class="clearfix"></div>
	</div> 
</div>
