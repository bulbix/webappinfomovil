<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="modal-content btnsEditor" ng-controller = "ModalHorarios as combosModalHorarios">
	<div class="modal-header">
		<button type="button" class="close textBlack" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
		<button type="button" class="btn btn-purple pull-right"  id="" ng-click="combosModalHorarios.guardarHorario()" style="margin:5px 0;"><img width="15" height="15" alt="Infomovil" 
	    		src="<c:url value="/resources/webapp/images/successWhite.png"/>" /><span class="hidden-xs">Guardar</span></button>
			<button type="button" class="btn btn-purple pull-right btnsEditor"  id="" ng-click="combosModalHorarios.closeMyModalHorarios()"  style="margin: 5px 0;"><img width="15" height="15" alt="Infomovil" 
	    		src="<c:url value="/resources/webapp/images/successWhite.png" />" /><span class="hidden-xs"> Cancelar</span></button>
			<button type="button" class="close textBlack pull-left btnsEditor"  aria-label="Close" ng-click="combosModalHorarios.closeMyModalHorarios()" ><span aria-hidden="true"><strong>&times;</strong></span></button>
		<p class="modal-title textBlack"><strong>Horarios</strong></p>
		
	</div>
	<div class="modal-body" ng-repeat="itemHra in combosModalHorarios.horario">
		  <div class="col-xs-12">
				Lunes: De  	<select name="Lunes1" id="Lunes1" ng-change="" ng-model="combosModalHorarios.Lunes1"  >99:99</select> a <select name="Lunes2" id="Lunes2" ng-change="" ng-model="combosModalHorarios.Lunes2">{{itemHra.idKeyword}}</select><br>
				
				Martes: De	<select name="Martes1" id="Martes1" ng-change="" ng-model="combosModalHorarios.Martes1"></select> a <select name="Martes2" id="Martes2" ng-change="" ng-model="combosModalHorarios.Martes2"></select><br>
		     				
				Miercoles: De <select name="Miercoles1" id="Miercoles1" ng-change="" ng-model="combosModalHorarios.Miercoles1"></select> a <select name="Miercoles2" id="Miercoles2" ng-change="" ng-model="combosModalHorarios.Miercoles2"></select><br>
		     				
				Jueves: De	<select name="Jueves1" id="Jueves1" ng-change="" ng-model="combosModalHorarios.Jueves1"></select> a <select name="Jueves2" id="Jueves2" ng-change="" ng-model="combosModalHorarios.Jueves2"></select><br>
		     				
				Viernes: De	<select name="Viernes1" id="Viernes1" ng-change="" ng-model="combosModalHorarios.Viernes1"></select> a <select name="Viernes2" id="Viernes2" ng-change="" ng-model="combosModalHorarios.Viernes2"></select><br>
		    				
				Sábado: De	<select name="Sabado1" id="Sabado1" ng-change="" ng-model="combosModalHorarios.Sabado1"></select> a <select name="Sabado2" id="Sabado2" ng-change="" ng-model="combosModalHorarios.Sabado2"></select><br>
		     				
				Domingo: De	<select name="Domingo1" id="Domingo1" ng-change="" ng-model="combosModalHorarios.Domingo1"></select> a <select name="Domingo2" id="Domingo2" ng-change="" ng-model="combosModalHorarios.Domingo2"></select><br>
	      </div>
		  <div class="clear divider"></div>
	</div>
	<div class="modal-footer textBlack"></div>
</div>