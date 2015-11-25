<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div ng-controller = "TipoContacto as datosTipoContacto">
	<div class="modal-header navEditorSFl">
			<button type="button" class="btn btn-purple pull-right btnsEditor"  id="" ng-click="datosTipoContacto.regresarAgregarContacto()" ng-show="datosTipoContacto.mostrarBtnRegresar" style="margin: 5px 0;"><img width="15" height="15" alt="Infomovil" 
	    		src="<c:url value="/resources/webapp/images/successWhite.png"/>" /><span class="hidden-xs"> Regresar</span></button>
			
<!-- 			<button type="button" class="btn btn-purple pull-right"  id="" ng-click="datosTipoContacto.guardarContacto(contacto)" ng-show="datosTipoContacto.mostrarBtnGuardar" style="margin:5px 0;"><img width="15" height="15" alt="Infomovil"  -->
<%-- 	    		src="<c:url value="/resources/webapp/images/successWhite.png"/>" /><span class="hidden-xs"> Guardar</span></button> --%>
	    	
	    	<button type="button" class="close textBlack pull-left btnsEditor"  aria-label="Close" ng-click="datosTipoContacto.closeMyModalContactos()" id="myModalContactos"><span aria-hidden="true"><strong>&times;</strong></span></button>
	
	    	
	    <div class="clear"></div>
	</div>

	<div class="modal-body">  
		<div ng-show="datosTipoContacto.menuContactos">
			<ul>
				<li ng-click="datosTipoContacto.tipo('tel')">Teléfono</li>
				<li ng-click="datosTipoContacto.tipo('movil')">Móvil</li>
				<li ng-click="datosTipoContacto.tipo('telSMS')">Teléfono SMS</li>
				<li ng-click="datosTipoContacto.tipo('email')">E-mail</li>
				<li ng-click="datosTipoContacto.tipo('fax')">Fax</li>
				<li ng-click="datosTipoContacto.tipo('facebook')">Facebook</li>
				<li ng-click="datosTipoContacto.tipo('twitter')">Twitter</li>
				<li ng-click="datosTipoContacto.tipo('google')">Google+</li>
				<li ng-click="datosTipoContacto.tipo('skype')">Skype</li>
				<li ng-click="datosTipoContacto.tipo('linkedin')">LinkedIn</li>
				<li ng-click="datosTipoContacto.tipo('web')">Website</li>
			</ul>
		</div>
		<div ng-show="datosTipoContacto.formGuardaContacto">
			<form name="miFormulario" ng-submit="datosTipoContacto.guardarContacto(numeroEmailRedSocial, longLabelNaptr)" ng-controller="TipoContacto">
				<img src="" alt="" height="20" width="20">
				<div>{{nombre}}</div><br>
				<div>{{etiqueta}}</div><br>
				<div ng-show="datosTipoContacto.muestraPais">{{pais}}</div><br>
				<input type="text" ng-model="numeroEmailRedSocial" id="numeroEmailRedSocial" placeholder="{{placeholderContenido}}" 
					ngRequired="true" ng-pattern="{{expRegularValida}}"/><br>
				<div>{{mensajeTelefonos}}</div><br>
				<div>Descripción</div><br>
				<textarea ng-maxlength="250" ng-model="longLabelNaptr" id="longLabelNaptr"></textarea>
				<input type="submit" class="btn btn-purple pull-right" ng-show="datosTipoContacto.mostrarBtnGuardar" value="Guardar" style="margin:5px 0;"/>
			</form>
		</div>
	</div>  
<!-- 			@RequestParam String constanteContacto, @RequestParam String redSocialWebSecure, String expRegular -->
	<div class="clear"></div>
	

	<div class="modal-footer"></div>
</div>
