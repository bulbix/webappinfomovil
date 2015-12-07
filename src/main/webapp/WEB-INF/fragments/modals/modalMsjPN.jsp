<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="modal-header">
	<button type="button" class="close textBlack pull-left btnsEditor " data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> 
  	<input id="pac-input" class="controls textBlack btnsEditor location" type="text" placeholder="Enter a location"/>
  	<button type="button" class="btn btn-purple pull-right btnsEditor" id="guardarUbicacion"><img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/successWhite.png"/>" /> 
  		<span class="hidden-xs">Guardar</span>
  	</button>
  	<div class="pull-right spaceBtnsMap"></div>
  	<button type="button" class="btn btn-purple pull-right btnsEditor" id="ubicame">
  		<img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/btn_ubicame.png"/>" /> 
  		<span class="hidden-xs">¡Ubícame!</span>
  	</button>
  	<div class="pull-right spaceBtnsMap"></div>
   	<button type="button" class="btn btn-purple pull-right btnsEditor" id="borrarUbicacion">
   		<img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/trash.png"/>"/>
   	</button>
</div>
<div class="modal-body">
	

	<div ng-controller="PushNotificationCtrl as push">
		<h1>Ùltimos mensajes</h1>
		<ul>
			<li ng-repeat="message in push.messages">{{ message.mensaje}}</li>
		</ul>
	</div>
</div>
<div class="modal-footer"></div>