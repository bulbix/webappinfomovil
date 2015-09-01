<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<div id="myModalRecAyuda" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg">   
	    <div class="modal-content">
		<div class="modal-content btnsEditor ">
		<div class="modal-header">
			<h5 class="textBlack pull-left reset">Tips</h5>
				<button type="button" class="close textBlack" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<p class="modal-title"></p>
		</div>
		<div class="modal-body bgWhite">
		<div class="textBlack col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 text-left">
			<span class="textBlack">&nbsp;</span>
			
			<ul style="margin: 0 0 0 -30px;">
				<li class="textBlack">Se recomienda usar nombres cortos y fáciles de recordar</li>
				<li class="textBlack">Evita espacios y acentos </li>
				<li class="textBlack">Mira algunos ejemplos:</li>
			</ul>
			
			<div style=<tiles:getAsString name="visibleRecurso"/>>
				<ul style="list-style:none; margin: 0 0 0 -30px;" class="textPurple">
				<li><span class="hidden-xs">www.</span>infomovil.com/taquizasamantha</li>
				<li><span class="hidden-xs">www.</span>infomovil.com/esteticalejandra</li>
				<li><span class="hidden-xs">www.</span>infomovil.com/abogadomonroy</li>
				</ul>
			</div>
		
			<div style=<tiles:getAsString name="visibleTel"/>>
				<ul style="list-style:none; margin: 0 0 0 -30px;" class="textPurple">
				<li>www.taqueriaelpibe.tel</li>
				<li>www.esteticalubelle.tel</li>
				<li>www.abogadostabasco.tel</li>
				</ul>
			</div>
	
		</div>
		<div class="clear"></div>
		<div class="clear divider"></div>
		</div>
		
		<div class="modal-footer">
			<button type="button" class="btn btn-purple text-center col-xs-12 col-sm-12 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4" data-dismiss="modal">
				<strong>Cerrar</strong>
			</button>
		</div>
	</div>
   	</div>
  	</div>
</div>
