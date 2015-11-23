<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div ng-controller = "ActualizarContactos as actualizarTipoContacto">
	<div class="modal-header navEditorSFl">
			<button type="button" class="btn btn-purple pull-right btnsEditor"  id="" ng-click="actualizarTipoContacto.regresarAgregarContacto()" ng-show="datosTipoContacto.mostrarBtnRegresar" style="margin: 5px 0;"><img width="15" height="15" alt="Infomovil" 
	    		src="<c:url value="/resources/webapp/images/successWhite.png"/>" /><span class="hidden-xs"> Cancelar</span></button>
			
			<button type="button" class="btn btn-purple pull-right"  id="" ng-click="actualizarTipoContacto.guardarContacto()" ng-show="datosTipoContacto.mostrarBtnGuardar" style="margin:5px 0;"><img width="15" height="15" alt="Infomovil" 
	    		src="<c:url value="/resources/webapp/images/successWhite.png"/>" /><span class="hidden-xs"> Actualizar</span></button>
	    	
	    	<button type="button" class="close textBlack pull-left btnsEditor"  aria-label="Close" ng-click="actualizarTipoContacto.closeMyModalActualizarContactos()" id="myModalContactosActualizar"><span aria-hidden="true"><strong>&times;</strong></span></button>
	
	    	
	    <div class="clear"></div>
	</div>

	<div class="modal-body">  
	
		<div>
				<img src="" alt="" height="20" width="20">
				<span id="nombreActualizarTel"></span><br>
				<span id="etiquetaActualizarTel"></span><br>
				<span id="paisActualizarTel"></span><br>
				<input type="text" id="inputTelefonosActualizar"/><br>
				<span id="mensajeTelefonosActualizar"></span><br>
				<span>Descripción</span><br>
				<textarea
					  name = "textareaDescripcion"
					  id="textAreaActualizarTel"
					  ng-maxlength="250">
				</textarea>
				
		</div>
		
	
	
	</div>  
       
	<div class="clear"></div>
	

	<div class="modal-footer"></div>
</div>