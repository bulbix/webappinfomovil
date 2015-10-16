<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
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
	<div class="modal-body ">
		<div class="col-xs-12">
		<div class="divider"></div>
		<div class="textBlack">Comparte tu promoción</div>
		
		
		<div class="divider"></div>
			<div class="textGreen text-center">${sessionScope.urlPromo}</div>
			<div class="divider"></div>
			<div class="col-xs-12">
			<div class="col-xs-1 hidden-xs">&nbsp;</div>
			<div class="col-xs-2"><a href="" id="Facebook" target="_blank"><img style="max-width:50px; min-width:40px; width:100%;" alt="Infomovil" src="<c:url value="/resources/webapp/images/face_icn.png"/>" /></a> </div>			
			<div class="col-xs-2"><a href="" id="Google" target="_blank"><img style="max-width:50px; min-width:40px; width:100%;" alt="Infomovil" src="<c:url value="/resources/webapp/images/gplus_icn.png"/>" /> </a></div>			
			<div class="col-xs-2"><a href="" id="Email"><img style="max-width:50px; min-width:40px; width:100%;" alt="Infomovil" src="<c:url value="/resources/webapp/images/mail_icn.png"/>" /> </a></div>			
			<div class="col-xs-2"><a href="" id="Twitter" target="_blank"><img style="max-width:50px; min-width:40px; width:100%;" alt="Infomovil" src="<c:url value="/resources/webapp/images/twit_icn.png"/>" /></a></div>
			<div class="col-xs-2"><a href="" id="WhatsApp" target="_blank"><img style="max-width:50px; min-width:40px; width:100%;" alt="Infomovil" src="<c:url value="/resources/webapp/images/wapp_icn.png" />" /> </a></div>
			<div class="col-xs-1 hidden-xs">&nbsp;</div>
			</div>
		</div>
		<div class="clear divider"></div>
	</div>
	<div class="modal-footer textBlack"></div>
</div>
