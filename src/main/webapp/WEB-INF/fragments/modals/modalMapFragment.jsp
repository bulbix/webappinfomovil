<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<div id=<tiles:getAsString name="idModal"/> class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class=<tiles:getAsString name="tamanioModal"/>> 
    	<div class="modal-content">
    	
	<div ng-controller="MapCtrl as mapaCtrl" ng-init="mapaCtrl.init('<tiles:getAsString name="tipo"/>')">
		<div class="modal-header">
			<button type="button" class="close textBlack pull-left btnsEditor " data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> 
		  	<input id="pac-input" class="controls textBlack btnsEditor location" type="text" placeholder="Enter a location"/>
		  	<button type="button" class="btn btn-purple pull-right btnsEditor" id="guardarUbicacion" ng-click="mapaCtrl.guardar()"><img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/successWhite.png"/>" /> 
		  		<span class="hidden-xs"><spring:message code="VOEDLA0066"/></span>
		  	</button>
		  	<div class="pull-right spaceBtnsMap"></div>
		  	<button type="button" class="btn btn-purple pull-right btnsEditor" id="ubicame" ng-click="mapaCtrl.ubicame()">
		  		<img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/btn_ubicame.png"/>" /> 
		  		<span class="hidden-xs"><spring:message code="VOEDLA0067"/></span>
		  	</button>
		  	<div class="pull-right spaceBtnsMap"></div>
		   	<button type="button" class="btn btn-purple pull-right btnsEditor" id="borrarUbicacion" ng-click="mapaCtrl.borrar()">
		   		<img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/trash.png"/>"/>
		   	</button>
		</div>
		<div class="modal-body">
			
			<div style="background:url(<c:url value="/resources/webapp/images/ubicacion.png"/>) center center no-repeat; position:absolute; top: 43%; left:47.2%; width:50px; height:50px; z-index: 999" class="hidden-xs hidden-sm"></div>
			<div id="map-canvas"></div>
		</div>
		<div class="modal-footer"></div>
	</div>
			
   	 	</div>
  	</div>
</div>



