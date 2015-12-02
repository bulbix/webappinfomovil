<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div ng-controller = "TipoContacto as datosTipoContacto">
	<div class="modal-header navEditorSFl">
			<button type="button" class="btn btn-purple pull-right btnsEditor"  id="" ng-click="datosTipoContacto.regresarAgregarContacto()" ng-show="datosTipoContacto.mostrarBtnRegresar" style="margin: 5px 0;"><img width="15" height="15" alt="Infomovil" 
	    		src="<c:url value="/resources/webapp/images/successWhite.png"/>" /><span class="hidden-xs"> Regresar</span></button>
			
<!-- 			<button type="button" class="btn btn-purple pull-right"  id="" ng-click="datosTipoContacto.guardarContacto(contacto)" ng-show="datosTipoContacto.mostrarBtnGuardar" style="margin:5px 0;"><img width="15" height="15" alt="Infomovil"  -->
<%-- 	    		src="<c:url value="/resources/webapp/images/successWhite.png"/>" /><span class="hidden-xs"> Guardar</span></button> --%>
	    	
	    	<button type="button" class="close textBlack pull-left btnsEditor"  aria-label="Close" ng-click="datosTipoContacto.closeMyModalContactos()" id="myModalContactos"><span aria-hidden="true"><strong>&times;</strong></span></button>
	<p class="modal-title textBlack pull-right"><strong>Tipo de contacto</strong></p>
	    <div class="clear"></div>
	</div>

	<div class="modal-body">  
		<div ng-show="datosTipoContacto.menuContactos">
			<ul style="list-style:none; margin:10px 0 0 0;" class="col-xs-12">
				<li ng-click="datosTipoContacto.tipo('tel')" style="margin:10px 0; border-bottom:1px solid #d9d9d9; padding:5px"><img width="30" height="30"
									alt="Infomovil"
									src="<c:url value="/resources/webapp/images/fa-tel-bk.png"/>" />  Teléfono</li>
				<li ng-click="datosTipoContacto.tipo('movil')" style="margin:10px 0; border-bottom:1px solid #d9d9d9; padding:5px"> <img width="30" height="30"
									alt="Infomovil"
									src="<c:url value="/resources/webapp/images/fa-movil-bk.png"/>" /> Móvil</li>
				<li ng-click="datosTipoContacto.tipo('telSMS')" style="margin:10px 0; border-bottom:1px solid #d9d9d9; padding:5px"> <img width="30" height="30"
									alt="Infomovil"
									src="<c:url value="/resources/webapp/images/fa-sms-bk.png"/>" /> SMS</li>
				<li ng-click="datosTipoContacto.tipo('email')" style="margin:10px 0; border-bottom:1px solid #d9d9d9; padding:5px"> <img width="30" height="30"
									alt="Infomovil"
									src="<c:url value="/resources/webapp/images/fa-email-bk.png"/>" /> E-mail</li>
				<li ng-click="datosTipoContacto.tipo('fax')" style="margin:10px 0; border-bottom:1px solid #d9d9d9; padding:5px"> <img width="30" height="30"
									alt="Infomovil"
									src="<c:url value="/resources/webapp/images/fa-fax-bk.png"/>" /> Fax</li>
				<li ng-click="datosTipoContacto.tipo('facebook')" style="margin:10px 0; border-bottom:1px solid #d9d9d9; padding:5px"> <img width="30" height="30"
									alt="Infomovil"
									src="<c:url value="/resources/webapp/images/fa-fb-bk.png"/>" /> Facebook</li>
				<li ng-click="datosTipoContacto.tipo('twitter')" style="margin:10px 0; border-bottom:1px solid #d9d9d9; padding:5px"> <img width="30" height="30"
									alt="Infomovil"
									src="<c:url value="/resources/webapp/images/fa-twitter-bk.png"/>" /> Twitter</li>
				<li ng-click="datosTipoContacto.tipo('google')" style="margin:10px 0; border-bottom:1px solid #d9d9d9; padding:5px"><img width="30" height="30"
									alt="Infomovil"
									src="<c:url value="/resources/webapp/images/fa-gplus-bk.png"/>" /> Google+</li>
				<li ng-click="datosTipoContacto.tipo('skype')" style="margin:10px 0; border-bottom:1px solid #d9d9d9; padding:5px"><img width="30" height="30"
									alt="Infomovil"
									src="<c:url value="/resources/webapp/images/fa-skype-bk.png"/>" /> Skype</li>
				<li ng-click="datosTipoContacto.tipo('linkedin')" style="margin:10px 0; border-bottom:1px solid #d9d9d9; padding:5px"><img width="30" height="30"
									alt="Infomovil"
									src="<c:url value="/resources/webapp/images/fa-linkedin-bk.png"/>" /> LinkedIn</li>
				<li ng-click="datosTipoContacto.tipo('securewebsite')" style="margin:10px 0; border-bottom:1px solid #d9d9d9; padding:5px"><img width="30" height="30"
									alt="Infomovil"
									src="<c:url value="/resources/webapp/images/fa-www-bk.png"/>" />Secure website</li>
				<li ng-click="datosTipoContacto.tipo('securewebsite')" style="margin:10px 0; border-bottom:1px solid #d9d9d9; padding:5px"><img width="30" height="30"
									alt="Infomovil"
									src="<c:url value="/resources/webapp/images/fa-www-bk.png"/>" />Website</li>
				<li ng-click="datosTipoContacto.tipo('securewebsite')" style="margin:10px 0; border-bottom:1px solid #d9d9d9; padding:5px"><img width="30" height="30"
									alt="Infomovil"
									src="<c:url value="/resources/webapp/images/fa-apple-bk.png"/>" /> App iOS</li>
				<li ng-click="datosTipoContacto.tipo('securewebsite')" style="margin:10px 0; border-bottom:1px solid #d9d9d9; padding:5px"><img width="30" height="30"
									alt="Infomovil"
									src="<c:url value="/resources/webapp/images/fa-and-bk.png"/>" /> App Android</li>
				<li ng-click="datosTipoContacto.tipo('securewebsite')" style="margin:10px 0; border-bottom:1px solid #d9d9d9; padding:5px"><img width="30" height="30"
									alt="Infomovil"
									src="<c:url value="/resources/webapp/images/fa-blackberry-bk.png"/>" /> App BlackBerry</li>
				<li ng-click="datosTipoContacto.tipo('securewebsite')" style="margin:10px 0; border-bottom:1px solid #d9d9d9; padding:5px"><img width="30" height="30"
									alt="Infomovil"
									src="<c:url value="/resources/webapp/images/fa-winphone-bk.png"/>" /> App WindowsPhone</li>
			</ul>
		</div>
		<div ng-show="datosTipoContacto.formGuardaContacto">
			<form name="miFormulario" ng-submit="datosTipoContacto.guardarContacto(contacto, miFormulario)" ng-controller="TipoContacto" novalidate>
				<div class="col-xs-12"><img src="{{imagenIco}}" alt="" height="30" width="30" id="imagenIco">
				<span>{{nombre}}</span></div>
				<div>{{etiqueta}}</div><br>
				<div ng-show="datosTipoContacto.muestraPais">{{pais}}</div><br>
				<input type="text" ng-model="contacto.numeroEmailRedSocial" name="numeroEmailRedSocial" id="numeroEmailRedSocial" placeholder="{{placeholderContenido}}" 
					ngRequired="true" ng-pattern="{{expRegularValida}}" ng-maxlength="{{maxlength}}"/>
				<span ng-show="miFormulario.numeroEmailRedSocial.$error.pattern">{{msjValidacion}}</span>
				<br>
				<div>{{mensajeTelefonos}}</div><br>
				<div>Descripción</div><br>
				<textarea ng-maxlength="250" ng-model="contacto.longLabelNaptr" id="longLabelNaptr"></textarea>
				<input type="submit" class="btn btn-purple pull-right" ng-show="datosTipoContacto.mostrarBtnGuardar" value="Guardar" style="margin:5px 0;"/>
			</form>
		</div>
	</div>  
	
	<div class="clear"></div>

	<div class="modal-footer"></div>
</div>
