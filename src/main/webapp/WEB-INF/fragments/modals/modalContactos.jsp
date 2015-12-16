<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div ng-controller = "TipoContacto as datosTipoContacto">
	<div class="modal-header navEditorSFl">  
			
		<button type="submit" class="btn btn-purple pull-right btnsEditor" id="mostrarBtnGuardar" ng-click="datosTipoContacto.guardarContacto()" 
			style="margin: 5px 0 0 5px;"><img width="15" height="15" alt="Infomovil" 
    		src="<c:url value="/resources/webapp/images/successWhite.png"/>" /><span class="hidden-xs"> Guardar</span></button>
    	
    	<button type="button" class="btn btn-purple pull-right btnsEditor"  id="mostrarBtnRegresar" ng-click="datosTipoContacto.regresarAgregarContacto()"  style="margin: 5px 0;"><img width="20" height="20" alt="Infomovil" 
	    	src="<c:url value="/resources/webapp/images/ico_back.png"/>" /><span class="hidden-xs"> Regresar</span></button>

	   	<button type="button" class="close textBlack pull-left btnsEditor"  aria-label="Close" ng-click="datosTipoContacto.closeMyModalContactos()" id="myModalContactos"><span aria-hidden="true"><strong>&times;</strong></span></button>
	
	    <div class="clear"></div>
	</div>

	<div class="modal-body">  
		<div id="menuContactos">
		<p class="col-xs-12 modal-title textBlack"><strong>Tipo de contacto</strong></p>
			<ul style="list-style:none; margin:10px 0 0 0;" class="col-xs-12">
				<li ng-click="datosTipoContacto.tipo('tel')" style="margin:10px 0; border-bottom:1px solid #d9d9d9; padding:5px"><img width="30" height="30"
									alt="Infomovil"
									src="<c:url value="/resources/webapp/images/fa-tel-bk.png"/>" />  Teléfono</li>
				<li ng-click="datosTipoContacto.tipo('movil')" style="margin:10px 0; border-bottom:1px solid #d9d9d9; padding:5px"> <img width="30" height="30"
									alt="Infomovil"
									src="<c:url value="/resources/webapp/images/fa-movil-bk.png"/>" /> Móvil</li>
				<li ng-click="datosTipoContacto.tipo('telsms')" style="margin:10px 0; border-bottom:1px solid #d9d9d9; padding:5px"> <img width="30" height="30"
									alt="Infomovil"
									src="<c:url value="/resources/webapp/images/fa-sms-bk.png"/>" /> TeléfoSMS</li>
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
									src="<c:url value="/resources/webapp/images/fa-secweb-bk.png"/>" /> Secure website</li>
			</ul>
		</div>
		<div id="formGuardaContacto">

			<div class="dividerSmall"></div>
			<div class="col-xs-12"><img src="<c:url value="/resources/webapp/images/{{imagenIco}}"/>" alt="{{nombre}}" height="30" width="30" >
			<span><strong>{{nombre}}</strong></span><br/>
			<span class="textGreen">{{mensajeTelefonos}}</span>
			</div>
			<div class="clearfix"></div>
			<div class="divider"></div>
			<div class="col-xs-12">
			
				<div class="form-group">
		   			<label class="textGreen">{{etiqueta}}</label>
		    		<div ng-show="datosTipoContacto.muestraPais">Clave País {{pais}}</div>
		    		</div>
		    		<div class="clear"></div>
				<div class="divider"></div>
		    		
		    		<div class="form-group">
		    		<input type="text" ng-model="contacto.numeroEmailRedSocial" name="contacto.numeroEmailRedSocial" class="form-control lowCase" 
		    			placeholder="{{placeholderContenido}}" id="numeroEmailRedSocial" required="required"/>
					<span style="display:none;" id="msgValidaRegExp" class="textRed"><img width="20" height="20"
						alt="Infomovil" src="<c:url value="/resources/webapp/images/fa-warning-red.png"/>" /> {{msjValidacion}}</span>
	  			</div>
	  			
	  			<div class="clear"></div>
				<div class="divider"></div>
				<div class="form-group">
	    			<label>Descripción</label>
	    			<textarea ng-maxlength="250" ng-model="contacto.longLabelNaptr" class="form-control" id="descContacto"></textarea> 
	  			</div>
			</div>	
		</div>
	</div>  
	
	<div class="clear"></div>
	<div class="modal-footer"></div>
</div>

