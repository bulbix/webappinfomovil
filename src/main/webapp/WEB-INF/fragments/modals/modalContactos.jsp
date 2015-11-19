<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div ng-controller = "TipoContacto as datosTipoContacto">
	<div class="modal-header navEditorSFl">
			<button type="button" class="btn btn-purple pull-right btnsEditor"  id="" ng-click="datosTipoContacto.regresarAgregarContacto()" style="margin: 5px 0;"><img width="15" height="15" alt="Infomovil" 
	    		src="<c:url value="/resources/webapp/images/successWhite.png"/>" /><span class="hidden-xs"> Regresar</span></button>
			
			<button type="button" class="btn btn-purple pull-right"  id="" ng-click="datosTipoContacto.guardarContacto()" style="margin:5px 0;"><img width="15" height="15" alt="Infomovil" 
	    		src="<c:url value="/resources/webapp/images/successWhite.png"/>" /><span class="hidden-xs"> Guardar</span></button>
	    	
	    	
	
	    	
	    <div class="clear"></div>
	</div>

	<div class="modal-body">  
	<div ng-show="datosTipoContacto.menuContactos">
		<ul>
			<li ng-click="datosTipoContacto.telefonos('tel')">Tel�fono</li>
			<li ng-click="datosTipoContacto.telefonos('movil')">M�vil</li>
			<li ng-click="datosTipoContacto.telefonos('telSMS')">Tel�fono SMS</li>
			<li ng-click="datosTipoContacto.redesSociales('email')">E-mail</li>
			<li ng-click="datosTipoContacto.telefonos('fax')">Fax</li>
			<li ng-click="datosTipoContacto.redesSociales('facebook')">Facebook</li>
			<li ng-click="datosTipoContacto.redesSociales('twitter')">Twitter</li>
			<li ng-click="datosTipoContacto.redesSociales('google')">Google+</li>
			<li ng-click="datosTipoContacto.redesSociales('skype')">Skype</li>
			<li ng-click="datosTipoContacto.redesSociales('linkedin')">LinkedIn</li>
			<li ng-click="datosTipoContacto.redesSociales('web')">Website</li>
		</ul>
	</div>
	<div ng-show="datosTipoContacto.formTelefonos">
			<img src="" alt="" height="20" width="20">
			<span >{{nombre}}</span><br>
			<span >{{etiqueta}}</span><br>
			<span >{{pais}}</span><br>
			<input type="text" ng-model="datosTipoContacto.inputTelefonos" placeholder="{{placeholderTelefonos}}" name="inputTelefonos"/><br>
			<span >{{mensajeTelefonos}}</span><br>
			<span>Descripci�n</span><br>
			<textarea
				  name = "textareaDescripcion"
				  ng-model="datosTipoContacto.descripcionContacto"
				  ng-maxlength="250">
			</textarea>
			
	</div>
	<div ng-show="datosTipoContacto.formRedesSociales">
			<img src="" alt="" height="20" width="20">
			<span >{{nombre}}</span><br>
			<span >{{etiqueta}}</span><br>
			<input type="text" ng-model="datosTipoContacto.inputTelefonos" placeholder="{{placeholderRedSocial}}" name="inputRedSocial"/><br>
			<span>{{mensajeRedSocial}}</span><br>
			<span>Descripci�n</span><br>
			<textarea
				  name = "textareaDescripcion"
				  ng-model="datosTipoContacto.descripcionContacto"
				  ng-maxlength="250">
			</textarea>
	</div>
	
	
	
	
	</div>  
       
	<div class="clear"></div>
	

	<div class="modal-footer"></div>
</div>
