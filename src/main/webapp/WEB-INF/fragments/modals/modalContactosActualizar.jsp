<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div ng-controller="ActualizarContactos as actualizarTipoContacto">
	<div class="modal-header navEditorSFl">
	
		<button type="button" class="btn btn-purple pull-right" style="margin: 5px 0;"
			ng-click="actualizarTipoContacto.guardarDatosContacto()">
			<img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/ico_actualizar.png"/>"/> 
			<span class="hidden-xs">Actualizar</span>
		</button>

		<button type="button" class="btn btn-purple pull-right" style="margin: 5px 0;"
			ng-click="actualizarTipoContacto.eliminarContacto()">
			<img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/trash.png"/>"/> 
			<span class="hidden-xs">Eliminar</span>
		</button>							
		
		<button type="button" class="close textBlack pull-left btnsEditor"
			aria-label="Close"
			ng-click="actualizarTipoContacto.closeMyModalActualizarContactos()"
			id="myModalContactosActualizar">
			<span aria-hidden="true"><strong>&times;</strong></span>
		</button>

		<div class="clear"></div>
	</div>

	<div class="modal-body">
		<form name="miFormularioActualizar" novalidate>
			<input type="hidden" id="imgIcono">
			<div class="dividerSmall"></div>
			<div class="col-xs-12">
				<img src="<c:url value="/resources/webapp/images/"/>" id="rutaIcono"
					alt="{{nombre}}" height="30" width="30"> <span><strong>{{nombre}}</strong></span><br />
				<span class="text-small textGreen">{{mensajeTelefonos}}</span>
			</div>
			<div class="clearfix"></div>
			<div class="dividerSmall"></div>
			<div class="col-xs-12">

				<input type="hidden" name="clave" id="claveContactoC"/> 
				<input type="hidden" name="servicesNaptr" id="servicesNaptrC"/> 
				<input type="hidden" name="subCategory" id="subCategoryC"/> 
				<input type="hidden" name="protocolo" id="protocolo"/>
				<input type="hidden" name="tipoContactoActualizar" id="tipoContactoActualizar"/>

				<div class="form-group">
					<label></label> <span id="nombreActualizarTel"></span>
				</div>

				<div class="form-group">
					<label></label> <span id="etiquetaActualizarTel"></span>
				</div>

				<div class="form-group">
					<label></label> <span id="paisActualizarTel"></span>
				</div>

				<div class="form-group">
					<label></label> <input type="text" id="inputTelefonosActualizar"
						placeholder="" />
				</div>
				
				<span id="msgValidaRegExpAct" style="display:none;" class="textRed"><img width="20" height="20"
						alt="Infomovil" src="<c:url value="/resources/webapp/images/fa-warning-red.png"/>" /></span>
				
				<div class="form-group">
					<label></label> <span id="mensajeTelefonosActualizar"></span>
				</div>
				
				<div class="col-xs-3 col-sm-2 text-left">Visible
					<div class="onoffswitch" style="display: block-inline">
						<input type="checkbox" name="onoffswitch"
							class="onoffswitch-checkbox" id="checkVisible">
						<label class="onoffswitch-label" id="checkVisibleLbl" for="checkVisible"></label>
					</div>
				</div>
				
				<br/><br/><br/>
				<div class="form-group">
					<label>Descripción</label>
					<div>
						<textarea name="textareaDescripcion" id="textAreaActualizarTel"
							ng-maxlength="250" class="form-control" >
						</textarea>
					</div>
				</div>
			</div>
		</form>
	</div>

	<div class="clear"></div>
	<div class="modal-footer"></div>
</div>