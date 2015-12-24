var app = angular.module('InfomovilEstiloVolantes', []);

app.controller("EstiloVolanteController", function ($scope, $http, VolanteService, MensajesService) {
	
	var estiloVolanteCtrl = this;
	VolanteService.getVolantes();
	estiloVolanteCtrl.volante = VolanteService.volantes();
	estiloVolanteCtrl.volante = null;
	estiloVolanteCtrl.plantillas = new Array("promo8", "promo6",  "promo1","promo5", "promo4", "promo7", "promo2", "promo3");
	estiloVolanteCtrl.noombrePlantillas = new Array("Navidad", "Cursos",  "Bares","Floral", "Tecnología 2", "Buen Fin", "Hipster", "Tecnología");
	
	estiloVolanteCtrl.actulizaPlantilla = function(item) {
	
		estiloVolanteCtrl.volante = VolanteService.volantes();
		console.log("item: " + item + ", idoffer: " + estiloVolanteCtrl.volante[0].idOffer);
		console.log("volante: " + JSON.stringify(estiloVolanteCtrl.volante));
		estiloVolanteCtrl.eventoPromocion = "promo-plantilla";
		var volante = {
				nombrePromo : estiloVolanteCtrl.volante[0].titleOffer,
				descPromo : estiloVolanteCtrl.volante[0].descOffer,
				datepickerPromo : estiloVolanteCtrl.volante[0].endDateOffer,
				base64Imagen : "",
				redimir : estiloVolanteCtrl.volante[0].redeemOffer,
				infoadiPromo : estiloVolanteCtrl.volante[0].termsOffer,
				plantillaPromo : item,
				idPromocion : estiloVolanteCtrl.volante[0].idOffer
		};

		console.log("nombrePromo :" + estiloVolanteCtrl.volante[0].titleOffer +
				" descPromo : " + estiloVolanteCtrl.volante[0].descOffer +
				" datepickerPromo : " + estiloVolanteCtrl.volante[0].endDateOffer + 
				" redimir : " + estiloVolanteCtrl.volante[0].redeemOffer +
				" infoadiPromo : " + estiloVolanteCtrl.volante[0].termsOffer +
				" plantillaPromo : " + item +
				" idPromocion : " + estiloVolanteCtrl.volante[0].idOffer);
		VolanteService.actualizarVolante(volante, estiloVolanteCtrl.eventoPromocion);

	};
	
});