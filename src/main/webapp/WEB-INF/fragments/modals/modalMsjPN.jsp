<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="modal-header" >
<p class="modal-title textBlack pull-left"><strong>Mis mensajes</strong></p>
	<button type="button" class="close textBlack pull-right btnsEditor " data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> 

</div>
<div class="modal-body">
	<div class="dividerSmall"></div>

	<div ng-controller="PushNotificationCtrl as push">
		
		<ul style="list-style:none" class="col-xs-12">
			<li ng-repeat="message in push.messages | orderBy:'timestamp':true" style="padding:10px; border:#cccccc 1px solid; border-radius:10px; margin:10px 0; background:#f7f7f7; ">
			
			
			<div class="col-xs-12 col-sm-1"><img src="<c:url value="/resources/webapp/images/apple-touch-icon-57x57.png"/>" width="20" height="20" alt="Infomovil" /> </div>
			<div class="col-xs-12 col-sm-8 text-left">{{ message.mensaje}}</div> 
			<div class="col-xs-12 col-sm-3 text-right notesTime">{{ message.timestamp  | date:'dd/MM/yyyy HH:mm '}} </div>
			
			<div class="clearfix"></div>
			</li>
		</ul>
	</div>
</div>
<div class="modal-footer"></div>