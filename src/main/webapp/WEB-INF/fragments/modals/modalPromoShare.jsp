<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="modal-content btnsEditor">
	<div class="modal-header">
		<button type="button" class="close textBlack" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
		<p class="modal-title textBlack"><strong>Compartir</strong></p>
		
<!-- 		<button type="button" class="btn btn-purple text-center col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" data-dismiss="modal"> -->
<!-- 			<strong>Regresar</strong> -->
<!-- 		</button> -->
	</div>
	<div class="modal-body bgWhite ">
		<div class="col-xs-12">
		<div class="divider"></div>
		<div class="textBlack">Comparte tu promoción</div>
		
		
		<div class="divider"></div>
			<div class="textGreen text-center">http://promo.mobileinfo.io/templates/promo1/index.xml</div>
			<div class="divider"></div>
			<div class="col-xs-12">
			<div class="col-xs-1">&nbsp;</div>
			<div class="col-xs-2"><img width="50" height="50" alt="Infomovil" src="<c:url value="/resources/webapp/images/face_icn.png"/>"/> </div>
			
			<div class="col-xs-2"><img width="50" height="50" alt="Infomovil" src="<c:url value="/resources/webapp/images/twit_icn.png"/>"/> </div>
			
			<div class="col-xs-2"><img width="50" height="50" alt="Infomovil" src="<c:url value="/resources/webapp/images/gplus_icn.png"/>"/> </div>
			
			<div class="col-xs-2"><img width="50" height="50" alt="Infomovil" src="<c:url value="/resources/webapp/images/wapp_icn.png"/>"/> </div>
			<div class="col-xs-2"><img width="50" height="50" alt="Infomovil" src="<c:url value="/resources/webapp/images/mail_icn.png"/>"/> </div>
			<div class="col-xs-1">&nbsp;</div>
			</div>
		</div>
		<div class="clear divider"></div>
	</div>
	<div class="modal-footer textBlack"></div>
</div>
<script>
var url = $("#urlInput").val(); //Facebook var lFace = "http://www.facebook.com/sharer/sharer.php?u=" + url + "&t=Sitio%20creado%20con%20www.infomovil.com"; $('#Facebook').attr('href', lFace); //Google plus var lGoogle = "https://plus.google.com/share?url=http://" + url; $('#Google').attr('href', lGoogle); //Email var lEmail = "mailto:?subject=http://"+ url + "%20Checa%20este%20sitio!&body=Checa%20este%20sitio%20web:%20http://"+ url + "%0A%0ACreado%20con%20www.infomovil.com"; $('#Email').attr('href', lEmail); //Twitter var lTwitt = "http://www.twitter.com/intent/tweet?text=http://"+ url +"%20%0A%0ACheca%20este%20sitio%20web:"+ url; $('#Twitter').attr('href', lTwitt); //WhatsApp if(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)){ var lWhatsapp = "whatsapp://send?text=Checa%20este%20sitio%20web:" + url; }else{ var lWhatsapp = "javascript:alert('Esta acción no se puede completar en este dispositivo')"; } $('#WhatsApp').attr('href', lWhatsapp);
</script>