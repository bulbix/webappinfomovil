<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<div class="prodBody">
	<div class="col-xs-12 text-center prodPadd10 navEditorSFl textBlack cuandoSiTienePP" style=<tiles:getAsString name="siTienePP"/>>
		<p class="textGreen"><%--<tiles:getAsString name="datoUrl"/>--%></p>
		<p class="textGreen">
			<img width="25" height="25" alt="Infomovil"
				src="<c:url value="/resources/webapp/images/"/><tiles:getAsString name="imgActivo"/>" />
			<tiles:getAsString name="productoActivo"/>
		</p>
	</div>
	<div class="col-xs-12 text-center textBlack cuandoSiTienePP" style=<tiles:getAsString name="siTienePP"/>>
 		<span>Vigencia: <%--<strong><tiles:getAsString name="fechaInicial"/></strong>--%> <br/><strong><tiles:getAsString name="fechaFinal"/></strong></span> <br/><br/>
 			
	</div>
<!-- 	<div class="clearfix"></div> -->

	
		
		<div style=<tiles:getAsString name="siTienePP"/>>

			<div class="col-xs-12 textBlack text-center ">Ahora cuentas con:</div>
			
			<div class="col-xs-12 textBlack text-left ">
			<ul class="col-xs-6 col-xs-offset-3 text-left textBlack"><li>Más Fotos</li>
			<li>Video</li>
			<li>Sin publicidad</li>
			</ul></div>

			<button type="button" onClick="ocultaNotaValidaPP()" data-toggle="modal" class="btn btn-purple text-center col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" data-dismiss="modal">
				<strong>Moviliza tu sitio</strong>
			</button>
		 
		<div class="clearfix"></div>
	
		<hr style="background:#000"/>
		<span class="textBlack">Ó puedes añadir más tiempo a tu Plan Pro</span>
		</div>
	<div>
	<div class="col-xs-12 text-center cuandoNoTienePP" style=<tiles:getAsString name="noTienePP"/>><p ><strong class="textGreen">¡Adquiere Plan Pro!</strong><br/><strong class="textBlack"> Y obtén:</strong></p>
<ul class="text-left textBlack"><li>Más Fotos</li>
<li>
Video</li>
<li>
Sin publicidad</li>
<li>
Moviliza tu sitio</li></ul></div>
		<hr />
		<div class="col-xs-12 text-center textBlack">
		<p class="reset">
			<select class="col-xs-12 textLato textBlack"  id="tipoPlanPro" onChange="actualizaPrecio(this.selectedIndex)">
				<option class="textBlack">1 mes</option>
				<option  class="textBlack">12 meses</option>
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
