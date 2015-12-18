var app = angular.module("InfomovilAppEditor", ["firebase"]);
var ref = new Firebase("https://blistering-inferno-5854.firebaseio.com/");

app.controller("PushNotificationCtrl", function($scope, $firebaseArray) {

	var push = this;
	
	var query = ref.limitToLast(5);
	
	ref.limitToLast(1).on('child_added', function(snapshot) {
		console.log(snapshot.val().mensaje);
	});
	
	
	push.messages = $firebaseArray(query);

})
.controller("MensajeCtrl", function($scope, $firebaseArray) {
	var msg = this;
	msg.mensaje = 'Escribe tu mensaje';
	msg.guardar = function(){
		ref.push().set({
			timestamp:Firebase.ServerValue.TIMESTAMP,
			mensaje:msg.mensaje
		})
	}
	
});