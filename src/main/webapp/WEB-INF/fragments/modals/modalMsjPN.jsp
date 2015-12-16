<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="modal-header" >
	<button type="button" class="close textBlack pull-left btnsEditor " data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> 
<p class="modal-title textBlack pull-right"><strong>Mis mensajes</strong></p>
</div>
<div class="modal-body">
	<div class="dividerSmall"></div>

	<div ng-controller="PushNotificationCtrl as push">
		
		<ul style="list-style:none" class="col-xs-12">
			<li ng-repeat="message in push.messages" style="padding:10px; border:#cccccc 1px solid; border-radius:10px; margin:10px 0; background:#f7f7f7; "><img
					src="<c:url value="/resources/webapp/images/apple-touch-icon-57x57.png"/>"
					width="20" height="20" alt="Infomovil" /> {{ message.mensaje}} <button type="button" class="close textBlack pull-right btnsEditor"><span aria-hidden="true">&times;</span></button> </li>
		</ul>
	</div>
</div>
<div class="modal-footer"></div>