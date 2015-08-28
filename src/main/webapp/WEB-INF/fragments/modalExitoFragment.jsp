<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="modal-content btnsEditor">
	<div class="modal-header">
		<button type="button" class="close textBlack" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
		<p class="modal-title"></p>
	</div>
	<div class="modal-body bgWhite">
		<h2 class="textPurple col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">&iexcl;Felicidades, ya tomaste el primer paso!</h2>
		
		<p  class="textBlack col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 text-left"></p>
		<div class="clear"></div>
		<p class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 text-left textBlack" >Ahora, haz tu página más llamativa:</p>
					
	<table width="70%" border="0" class="text-left col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 textPurple" >
		<tbody> 
				<tr> 
		    	<td class="text-right"><img width="25" height="25" alt="Infomovil" src="<c:url value="/resources/webapp/images/icn_marc_maps-pp.png"/>"></td> 
		       	<td>&nbsp;</td> 
		       	<td><strong> Coloca tu ubicación <span class="">con Google Maps</span></strong>	</td> 
		     </tr> 
		 	<tr id="imgPlanPro" style="display:none;"> 
		    	<td class="text-right"><img width="25" height="25" alt="Infomovil" src="<c:url value="/resources/webapp/images/ico_ppp_youtube-pp.png"/>"> </td> 
		      	<td> &nbsp;</td>
		    	<td><strong>Agrega video <span class="">de YouTube</span></strong></td>
		    </tr> 
		    <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr> 
 				</tbody> 
		</table> 
				<!-- /Añade más contenido -->
	<div class="clear divider"></div>
</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-purple text-center col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" data-dismiss="modal">
			<strong>Continuar editando</strong>
		</button>
	</div>
</div>