<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="modal-content btnsEditor">
	<div class="modal-header">
		<button type="button" class="close textBlack" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
		<p class="modal-title textBlack"><strong><span class="hidden-xs hidden-sm">Imprime</span> <span class="hidden-md hidden-lg">Descarga</span> tu Volante digital</strong></p>
		
<!-- 		<button type="button" class="btn btn-purple text-center col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" data-dismiss="modal"> -->
<!-- 			<strong>Regresar</strong> -->
<!-- 		</button> -->
	</div>
	<div class="modal-body" style="overflow-y:scroll; max-height:330px;">
		<div class="col-xs-12 reset">
			<iframe id="urlVistaPreviaPromoImprimir" src="${ urlPromocion }?vistaPrevia=1" style="width:100%; min-height:500px; border:none; overflow-y:scroll !important" frameborder="0"></iframe>	
		</div>
		<div class="clear divider"></div>
	</div>
	<div class="modal-footer textBlack">
					<button type="button" class="hidden-xs hidden-sm btn btn-outlineGreen pull-right textWhite navEditorLato"  id="btnImprimirPromoPantalla" 
						 style="margin: 5px 8px 0 0;" onclick="imprimirPromocionWeb()">
						<span><img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/fa-print.png"/>"/> 
						Imprimir</span>
					</button>
					  <button type="button" class="hidden-xs hidden-sm btn btn-outlineGreen pull-right textWhite navEditorLato"  id="btnImprimirPromoPantalla" 
						 style="margin: 5px 8px 0 0;" onClick="descargarPDF()">
						<span><img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/fa-print.png"/>"/> 
						Descargar PDF</span> 
					</button> 
					<button type="button" class="hidden-xs hidden-sm btn btn-outlineGreen pull-right textWhite navEditorLato"  id="btnImprimirPromoPantalla" 
						 style="margin: 5px 8px 0 0;" onClick="descargarJPG()">
						<span><img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/ico_pp_img.png"/>"/> 
						Descargar Imagen</span>
					</button>
					 <button type="button" class="hidden-md hidden-lg btn btn-outlineGreen pull-right textWhite navEditorLato"  id="btnGuardarPDFPromo" 
						 style="margin: 5px 8px 0 0;" onClick="descargarPDF()">
						<span><img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/fa-pdf.png"/>"/> </span>
						<span class="hidden-xs">Descargar</span> PDF
						
					</button> 
					<button type="button" class="hidden-md hidden-lg btn btn-outlineGreen pull-right textWhite navEditorLato"  id="btnGuardarJPGPromo" 
						 style="margin: 5px 8px 0 0;" onClick="descargarJPG()">
						<span><img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/ico_pp_img.png"/>"/> </span>
						<span class="hidden-xs">Descargar</span> Imagen
						
					</button>
	
	</div>
	
</div>
