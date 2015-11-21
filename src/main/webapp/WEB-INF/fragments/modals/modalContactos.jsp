<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div ng-controller = "TipoContacto as datosTipoContacto">
	<div class="modal-header navEditorSFl">
			<button type="button" class="btn btn-purple pull-right btnsEditor"  id="" ng-click="datosTipoContacto.regresarAgregarContacto()" ng-show="datosTipoContacto.mostrarBtnRegresar" style="margin: 5px 0;"><img width="15" height="15" alt="Infomovil" 
	    		src="<c:url value="/resources/webapp/images/successWhite.png"/>" /><span class="hidden-xs"> Regresar</span></button>
			
			<button type="button" class="btn btn-purple pull-right"  id="" ng-click="datosTipoContacto.guardarContacto()" ng-show="datosTipoContacto.mostrarBtnGuardar" style="margin:5px 0;"><img width="15" height="15" alt="Infomovil" 
	    		src="<c:url value="/resources/webapp/images/successWhite.png"/>" /><span class="hidden-xs"> Guardar</span></button>
	    	
	    	<button type="button" class="close textBlack pull-left btnsEditor"  aria-label="Close" ng-click="datosTipoContacto.closeMyModalContactos()" id="myModalContactos"><span aria-hidden="true"><strong>&times;</strong></span></button>
	
	    	
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
		<div ng-show="datosTipoContacto.formGuardaContacto">
				<img src="" alt="" height="20" width="20">
				<div>{{nombre}}</div><br>
				<div>{{etiqueta}}</div><br>
				<div name = "textareaDescripcion" ng-show="datosTipoContacto.muestraPais">{{pais}}</div><br>
				<input type="text" name = "regExp" placeholder="{{placeholderTelefonos}}" name="inputTelefonos"/><br>
				<div>{{mensajeTelefonos}}</div><br>
				<div>Descripci�n</div><br>
				<textarea name = "datosTipoContacto.longLabelNaptr" ng-maxlength="250"></textarea>
				<div ng-hide="true" name="servicesNaptr" ng-model=""></div><br>
				<div ng-hide="true" name="subCategory" ng-model=""></div><br>
		</div>
	</div>  
       
	<div class="clear"></div>
	

	<div class="modal-footer"></div>
</div>
