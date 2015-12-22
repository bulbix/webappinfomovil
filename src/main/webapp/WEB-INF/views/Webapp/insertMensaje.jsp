<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<title>Insertar mensajes</title>
</head>
<body>

	<div ng-app="InfomovilAppEditor" ng-controller="MensajeCtrl as msg">

		<label>Mensaje</label>
		<input type="text" ng-model="msg.mensaje"/>
	
		
		<button ng-click="msg.guardar()">Guardar</button>
	
	</div>
	
	<script src="<c:url value="/resources/webapp/js/angular.min.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/bower_components/firebase/firebase.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/bower_components/angularfire/dist/angularfire.min.js"/>"></script>
	<script src="<c:url value="/resources/js/webapp/pushNotification.js"/>"></script>

</body>
</html>