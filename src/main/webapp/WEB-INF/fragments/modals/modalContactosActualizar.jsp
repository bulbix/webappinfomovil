<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div ng-controller = "ActualizarContactos as actualizarTipoContacto">
<!-- <div ng-controller = "ToolBarContactoController as toolbarContacto"> -->
	<div class="modal-header navEditorSFl">
			<button type="button" class="btn btn-purple pull-right"  id="" ng-click="actualizarTipoContacto.guardarDatosContacto()" style="margin:5px 0;"><img width="15" height="15" alt="Infomovil" 
	    		src="<c:url value="/resources/webapp/images/successWhite.png"/>" /><span class="hidden-xs"> Actualizar</span></button>
			<button type="button" class="btn btn-purple pull-right btnsEditor"  id="" ng-click="actualizarTipoContacto.closeMyModalActualizarContactos()"  style="margin: 5px 0;"><img width="15" height="15" alt="Infomovil" 
	    		src="<c:url value="/resources/webapp/images/successWhite.png" />" /><span class="hidden-xs"> Cancelar</span></button>
			<button type="button" class="close textBlack pull-left btnsEditor"  aria-label="Close" ng-click="actualizarTipoContacto.closeMyModalActualizarContactos()" id="myModalContactosActualizar"><span aria-hidden="true"><strong>&times;</strong></span></button>
	    	
	    <div class="clear"></div>
	</div>

	<div class="modal-body">  
		<form name="miFormularioActualizar" novalidate>
			<img src="" alt="" height="20" width="20" id="imagenIco">
			<input type="hidden" name="clave" id="claveContactoC"/>
			<input type="hidden" name="servicesNaptr" id="servicesNaptrC"/>
			<input type="hidden" name="subCategory" id="subCategoryC"/>
			<input type="hidden" name="visible" id="visibleC"/>
			<span id="nombreActualizarTel"></span><br>
			<span id="etiquetaActualizarTel"></span><br>
			<span id="paisActualizarTel"></span><br>
			<input type="text" id="inputTelefonosActualizar" placeholder=""/><br>
			<span id="mensajeTelefonosActualizar"></span><br>
			<span>Descripción</span><br>
			<textarea
				  name = "textareaDescripcion"
				  id="textAreaActualizarTel"
				  ng-maxlength="250">
			</textarea>
		</form>
	</div>  
       
	<div class="clear"></div>
	

	<div class="modal-footer"></div>
</div>