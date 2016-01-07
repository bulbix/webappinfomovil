var app = angular.module('InfomovilEstiloVolantes', []);

app.controller("EstiloVolanteController", function ($scope, $http, VolanteService, MensajesService) {
	
	var estiloVolanteCtrl = this;
	estiloVolanteCtrl.plantillas = new Array( "promo6",  "promo1", "promo5", "promo4",  "promo2", "promo3");/*"promo8","promo7",*/
	estiloVolanteCtrl.nombrePlantillas = new Array( "Cursos",  "Bares","Floral", "Tecnología 2",  "Hipster", "Tecnología");/*"Navidad","Buen Fin",*/
	estiloVolanteCtrl.textoPlantilla = "Aplicar estilo";
	estiloVolanteCtrl.claseSpan = "ev_std_chk text-center";
	estiloVolanteCtrl.claseImg = "img-responsiveTemp img-thumbnail";	
	estiloVolanteCtrl.template = "";
	
	VolanteService.getVolantes(function() {
		
		if (estiloVolanteCtrl.volante != undefined)
		{
			estiloVolanteCtrl.volante = VolanteService.volantes();	
			estiloVolanteCtrl.template = estiloVolanteCtrl.volante[0].template;
			console.log("volante: " + JSON.stringify(estiloVolanteCtrl.volante));
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
	
	/*estiloVolanteCtrl.claseSpan = function(item) {
		
		console.log("template: " + estiloVolanteCtrl.template);
		if(item == estiloVolanteCtrl.template) 
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
		
		return estiloVolanteCtrl.claseSpan;
	};*/
	
	estiloVolanteCtrl.actulizaPlantilla = function(item) {
	
//		if (estiloVolanteCtrl.volante == undefined) 
//			return;
		
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

		console.log("nombrePromo :" + estiloVolanteCtrl.volante[0].titleOffer +
				" descPromo : " + estiloVolanteCtrl.volante[0].descOffer +
				" datepickerPromo : " + estiloVolanteCtrl.volante[0].endDateOffer + 
				" redimir : " + estiloVolanteCtrl.volante[0].redeemOffer +
				" infoadiPromo : " + estiloVolanteCtrl.volante[0].termsOffer +
				" plantillaPromo : " + item +
				" idPromocion : " + estiloVolanteCtrl.volante[0].idOffer);
		
		VolanteService.actualizarVolante(volante, estiloVolanteCtrl.eventoPromocion, function() {
			window.location = contextPath + "/infomovil/misPromociones";
		});
		
		/*estiloVolanteCtrl.textoPlantilla = "Seleccionado";
		estiloVolanteCtrl.claseSpan = "ev_std_chkSel text-center";
		estiloVolanteCtrl.claseImg = "img-responsiveTemp img-thumbnail ev_img_chkSel";	

		estiloVolanteCtrl.textoPlantilla = "Aplicar estilo";
		estiloVolanteCtrl.claseSpan = "ev_std_chk text-center";
		estiloVolanteCtrl.claseImg = "img-responsiveTemp img-thumbnail";	*/
	//	$("#" + item + "Span").removeClass("ev_std_chk").addClass("ev_std_chkSel");
	//	$("#" + item + "Img").addClass("ev_img_chkSel");
		
		//$("#" + estiloVolanteCtrl.volante[0].template + "Img").removeClass("ev_std_chkSel");
		//$("#" + estiloVolanteCtrl.volante[0].template + "Span").removeClass("ev_std_chkSel");
		
		
		//span no ev_std_chk text-center
		//span si ev_std_chkSel text-center
		//$("#" + estiloVolanteCtrl.volante[0].template + "Span").removeClass("ev_std_chkSel");
		//$("#" + estiloVolanteCtrl.volante[0].template + "Span").addClass("ev_img_chk");	
		//$("#" + estiloVolanteCtrl.volante[0].template + "Img").addClass("ev_std_chk");
	};
	
});