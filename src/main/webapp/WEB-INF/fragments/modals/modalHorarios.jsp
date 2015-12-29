<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="modal-content btnsEditor"
	ng-controller="ModalHorarios as combosModalHorarios">
	<div class="modal-header">

		<button type="button" class="btn btn-purple pull-right" id=""
			ng-click="combosModalHorarios.guardarHorario()"
			style="margin: 5px 0;">
			<img width="15" height="15" alt="Infomovil"
				src="<c:url value="/resources/webapp/images/successWhite.png"/>" /><span
				class="hidden-xs"> Guardar</span>
		</button>
		<div class="pull-right spaceBtnsMap"></div>
		<button type="button" class="btn btn-purple pull-right" id=""
			ng-click="combosModalHorarios.eliminarHorario()"
			style="margin: 5px 0;">
			<img width="15" height="15" alt="Infomovil"
				src="<c:url value="/resources/webapp/images/trash.png"/>" /><span
				class="hidden-xs"> Eliminar</span>
		</button>
		<!--<button type="button" class="btn btn-purple pull-right btnsEditor"  id="" ng-click="combosModalHorarios.closeMyModalHorarios()"  style="margin: 5px 0;"><img width="15" height="15" alt="Infomovil" 
	    		src="<c:url value="/resources/webapp/images/successWhite.png" />" /><span class="hidden-xs"> Cancelar</span></button>-->
		<button type="button" class="close textBlack pull-left btnsEditor"
			aria-label="Close"
			ng-click="combosModalHorarios.closeMyModalHorarios()">
			<span aria-hidden="true"><strong>&times;</strong></span>
		</button>


	</div>
	<div class="modal-body">

		<div class="col-xs-12 col-sm-8 col-sm-offset-2" >
			<div class="modal-title textBlack">
			<div class="dividerSmall"></div>
				<strong>Horarios</strong>
			</div>
<div class="dividerSmall"></div>

			<div class="col-xs-12 reset">
				<span class="col-xs-2 reset">Lun<span class="hidden-xs">es</span></span> <span class="col-xs-10"><select
					name="Lunes1" id="Lunes1" ng-change=""
					ng-model="combosModalHorarios.Lunes1"></select> - <select
					name="Lunes2" id="Lunes2" ng-change=""
					ng-model="combosModalHorarios.Lunes2"></select> </span>
			</div>
			<div class="clearfix"></div>
			<div class="dividerSmall"></div>
			<div class="col-xs-12 reset">
				<span class="col-xs-2 reset">Mar<span class="hidden-xs">tes</span></span> <span class="col-xs-10"><select
					name="Martes1" id="Martes1" ng-change=""
					ng-model="combosModalHorarios.Martes1"></select> - <select
					name="Martes2" id="Martes2" ng-change=""
					ng-model="combosModalHorarios.Martes2"></select> </span>
			</div>
			<div class="clearfix"></div>
			<div class="dividerSmall"></div>
			<div class="col-xs-12 reset">
				<span class="col-xs-2 reset">Mi�r<span class="hidden-xs">coles</span></span> <span class="col-xs-10">
					<select name="Miercoles1" id="Miercoles1" ng-change=""
					ng-model="combosModalHorarios.Miercoles1"></select> - <select
					name="Miercoles2" id="Miercoles2" ng-change=""
					ng-model="combosModalHorarios.Miercoles2"></select>
				</span>
			</div>
			<div class="clearfix"></div>
			<div class="dividerSmall"></div>
			<div class="col-xs-12 reset">
				<span class="col-xs-2 reset">Jue<span class="hidden-xs">ves</span></span> <span class="col-xs-10"><select
					name="Jueves1" id="Jueves1" ng-change=""
					ng-model="combosModalHorarios.Jueves1"></select> - <select
					name="Jueves2" id="Jueves2" ng-change=""
					ng-model="combosModalHorarios.Jueves2"></select> </span>
			</div>
			<div class="clearfix"></div>
			<div class="dividerSmall"></div>
			<div class="col-xs-12 reset">
				<span class="col-xs-2 reset">Vier<span class="hidden-xs">nes</span></span> <span class="col-xs-10"><select
					name="Viernes1" id="Viernes1" ng-change=""
					ng-model="combosModalHorarios.Viernes1"></select> - <select
					name="Viernes2" id="Viernes2" ng-change=""
					ng-model="combosModalHorarios.Viernes2"></select> </span>
			</div>
			<div class="clearfix"></div>
			<div class="dividerSmall"></div>
			<div class="col-xs-12 reset">
				<span class="col-xs-2 reset">S�b<span class="hidden-xs">ado</span></span> <span class="col-xs-10"><select
					name="Sabado1" id="Sabado1" ng-change=""
					ng-model="combosModalHorarios.Sabado1"></select> - <select
					name="Sabado2" id="Sabado2" ng-change=""
					ng-model="combosModalHorarios.Sabado2"></select> </span>
			</div>
			<div class="clearfix"></div>
			<div class="dividerSmall"></div>
			<div class="col-xs-12 reset">
				<span class="col-xs-2 reset">Dom<span class="hidden-xs">ingo</span></span> <span class="col-xs-10">
					<select name="Domingo1" id="Domingo1" ng-change=""
					ng-model="combosModalHorarios.Domingo1"></select> - <select
					name="Domingo2" id="Domingo2" ng-change=""
					ng-model="combosModalHorarios.Domingo2"></select>
				</span>
			</div>

		</div>
		<div class="clear divider"></div>
	</div>
	<div class="modal-footer textBlack"></div>
</div>