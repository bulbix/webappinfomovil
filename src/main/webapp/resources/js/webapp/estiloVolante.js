window.initPlantillas = function () {
	console.log("initPlantilals");
}

var app = angular.module('InfomovilEstiloVolantes', []);

app.controller("EstiloVolanteController", function ($scope, $http, VolanteService, MensajesService) {
	
	var estiloVolanteCtrl = this;
	estiloVolanteCtrl.plantillas = new Array( "promo6",  "promo1", "promo5", "promo4",  "promo2", "promo3");
	estiloVolanteCtrl.nombrePlantillas = new Array(stringsIdioma['VOESTLA0006'], stringsIdioma['VOESTLA0007'], stringsIdioma['VOESTLA0008'], 
			stringsIdioma['VOESTLA0009'], stringsIdioma['VOESTLA0010'], stringsIdioma['VOESTLA0011']);

	estiloVolanteCtrl.textoPlantilla = "Aplicar estilo";
	estiloVolanteCtrl.claseSpan = "ev_std_chk text-center";
	estiloVolanteCtrl.claseImg = "img-responsiveTemp img-thumbnail";	
	estiloVolanteCtrl.template = "";
	
	VolanteService.getVolantes(function() {
		
		if (estiloVolanteCtrl.volante != undefined)
		{
			estiloVolanteCtrl.volante = VolanteService.volantes();	
			estiloVolanteCtrl.template = estiloVolanteCtrl.volante[0].template;
		}
	});

	estiloVolanteCtrl.getClasesPlantillas = function(item) {

		if (estiloVolanteCtrl.volante != undefined) 
		{
			if(item == estiloVolanteCtrl.volante[0].template) 
			{
				estiloVolanteCtrl.textoPlantilla = "Activo";
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
				idPromocion : estiloVolanteCtrl.volante[0].idOffer,
				empresa : estiloVolanteCtrl.volante[0].empresa != null ? estiloVolanteCtrl.volante[0].empresa : "",
				nombreVolante : estiloVolanteCtrl.volante[0].pagina != null ? estiloVolanteCtrl.volante[0].pagina : ""
		};

		VolanteService.actualizarVolante(volante, estiloVolanteCtrl.eventoPromocion, function() {
			window.location = contextPath + "/infomovil/misPromociones";
		});
	};
	
});