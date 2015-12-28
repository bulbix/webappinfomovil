var app = angular.module('InfomovilEstiloVolantes', []);

app.controller("EstiloVolanteController", function ($scope, $http, VolanteService, MensajesService) {
	
	var estiloVolanteCtrl = this;
	estiloVolanteCtrl.plantillas = new Array("promo8", "promo6",  "promo1", "promo5", "promo4", "promo7", "promo2", "promo3");
	estiloVolanteCtrl.nombrePlantillas = new Array("Navidad", "Cursos",  "Bares","Floral", "Tecnología 2", "Buen Fin", "Hipster", "Tecnología");
	
	VolanteService.getVolantes(function() {
		estiloVolanteCtrl.volante = VolanteService.volantes();	
	});

	estiloVolanteCtrl.getClasesPlantillas = function(item) {
		console.log("getClasesPlantillas");
		if (estiloVolanteCtrl.volante != undefined) 
		{
			if(item == estiloVolanteCtrl.volante[0].template) 
			{
				estiloVolanteCtrl.textoPlantilla = "Seleccionado";
				estiloVolanteCtrl.claseSpan = "ev_std_chkSel text-center";
				estiloVolanteCtrl.claseImg = "img-responsiveTemp img-thumbnail ev_img_chkSel";	
			}
			else
			{
				estiloVolanteCtrl.textoPlantilla = "Aplicar estilo";
				estiloVolanteCtrl.claseSpan = "ev_std_chk text-center";
				estiloVolanteCtrl.claseImg = "img-responsiveTemp img-thumbnail";				
			}
		}
	};
	
	estiloVolanteCtrl.actulizaPlantilla = function(item) {
	
		estiloVolanteCtrl.volante = VolanteService.volantes();
		
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