/**
 * 
 */

angular.module("InfomovilApp", [] )
.controller("ToolBarContactoController", function ($http){
	var toolbarContacto = this;
	
	toolbarContacto.mostrarHola = true;
	toolbarContacto.descripcion = "descrito";
	
	toolbarContacto.eliminarContacto = function(){
		
		$http({
			  method: 'GET',
			  url: contextPath + "/infomovil/guardarContacto",
			  params: { 
				  descripcionContacto: toolbarContacto.descripcion,
				  numeroEmailRedSocial: "!^.*$!mailto:" + "roni@mail.com!",
				  constanteContacto: "E2U+email:mailto",
				  redSocialWebSecure: ""}	  
			}).then(function successCallback(response) {
				toolbarContacto.mostrarHola = false;
				alert(response.data.codeError);
				
			  }, function errorCallback(response) {
				  console.log("El error es: " + response);
			  });
		
		
		
	}
	toolbarContacto.abrirActualizarContacto = function(){
		//alert("funcionando angular2");
		
	}
	

	
});
