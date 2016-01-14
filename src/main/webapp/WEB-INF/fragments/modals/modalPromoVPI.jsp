<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<div class="modal-content btnsEditor">
	<div class="modal-header">
		<button type="button" class="close textBlack" data-dismiss="modal" aria-label="Close" onclick="cerrarModalImprimir()">
			<span aria-hidden="true">&times;</span>
		</button>
		<p class="modal-title textBlack">
			<strong>
				<span class="hidden-xs hidden-sm"><spring:message code="VOEDLA0014"/></span>
				<span class="hidden-md hidden-lg"><spring:message code="VOEDLA0062"/></span> <spring:message code="VOEDLA0063"/>
			</strong>
		</p>

	</div>
	<div class="modal-body" style="overflow-y:scroll; max-height:330px;">
		<div class="col-xs-12 reset">
			<iframe id="urlVistaPreviaPromoImprimir" style="width:100%; min-height:500px; border:none; overflow-y:scroll !important" frameborder="0"></iframe>	
		</div>
		<div class="clear divider"></div>
	</div>
	<div class="modal-footer textBlack">
					<button type="button" class="hidden-xs hidden-sm btn btn-outlineGreen pull-right textWhite navEditorLato"  id="btnImprimirPromoPantalla" 
						 style="margin: 5px 8px 0 0;" onclick="imprimirPromocionWeb()">
						<span><img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/fa-print.png"/>"/> 
						<spring:message code="VOEDLA0014"/></span>
					</button>
					  <button type="button" class="hidden-xs hidden-sm btn btn-outlineGreen pull-right textWhite navEditorLato" 
						 style="margin: 5px 8px 0 0;"  onclick="descargarArchivo('pdf')">
						<span><img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/fa-pdf.png"/>"/> 
						<spring:message code="VOEDLA0062"/> PDF</span> 
					</button> 
					<button type="button" class="hidden-xs hidden-sm btn btn-outlineGreen pull-right textWhite navEditorLato" 
						 style="margin: 5px 8px 0 0;" onclick="descargarArchivo('jpg')">
						<span><img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/ico_pp_img.png"/>"/> 
						<spring:message code="VOEDLA0062"/> <spring:message code="VOEDLA0064"/></span>
					</button>
					 <button type="button" class="hidden-md hidden-lg btn btn-outlineGreen pull-right textWhite navEditorLato"
						 style="margin: 5px 8px 0 0;" onclick="descargarArchivo('pdf')">
						<span><img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/fa-pdf.png"/>"/> </span>
						<span class="hidden-xs"><spring:message code="VOEDLA0062"/></span> PDF
						
					</button> 
					<button type="button" class="hidden-md hidden-lg btn btn-outlineGreen pull-right textWhite navEditorLato"
						 style="margin: 5px 8px 0 0;"  onclick="descargarArchivo('jpg')">
						<span><img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/ico_pp_img.png"/>"/> </span>
						<span class="hidden-xs"><spring:message code="VOEDLA0062"/></span> <spring:message code="VOEDLA0064"/>
						
					</button>
	
	</div>
	
</div>
