var bloqueo1Vez = 0;
var planPro = "";
var visible = "";
var IMAGENESMAX = $("#galeriaImagenesMax").val();
var IMAGENESDELUSUARIO = 0;
var infoAlbumes = [];
var photosDelAlbum = [];
var binaryString;
var siHayImagen = 0;
$(document).ready(function() {
	$("#terceroFB").hide();
	$("#regresarDeFotos").hide();
	$("#btnGuardarImagenFB").hide();
	$(".albumDinamico").remove();
	$("#segundoFB").hide();
	$("#msjEligeFotoAlbum").hide();
	$("#idRegresarAlbum").hide();
	$("#galeriaVacia").hide();
	$("#imgSeleccionadaDeGaleria").hide();
	$("#regresarSelecImg").hide();
	$("#facebookDiv").hide();
	$("#primeroFB").hide();
	$("#msjEligeAlbumFoto").hide();
	$("#regresarDeFace").hide();
	var $btnAlbumsDeFacebook = $("#btnAlbumsDeFacebook").show();
	$("#btnSeleccionaImagen").show();
	$("#btnSeleccionaImagen2").show();
	$("#btnGuardarImagen").hide();
	$btnAlbumsDeFacebook.click(function(e) {
		
		FB.getLoginStatus(function(response) {
			logueoFacebook(response);
		});
	});

	$("#idRegresarAlbum").click(function(){
		$(".photoDinamico").remove();
		$("#terceroFB").hide();
		$("#regresarDeFotos").hide();
		$("#btnGuardarImagenFB").hide();
		$("#segundoFB").hide();
		$("#msjEligeFotoAlbum").hide();
		$("#idRegresarAlbum").hide();
		$("#primeroFB").show();
		$("#msjEligeAlbumFoto").show();
		$("#regresarDeFace").show();
		$("#galeriaVacia").hide();
	});


	$("#idCloseImgFace").click(function(){
		$("#imgVistaPrevia").attr('src','');
	});

	$("#llamarGaleriaImagenes").click(function(){
		$("#galeriaImagenes").show();
		$("#buscarImagenes").hide();
		$("#facebookDiv").hide();
		$("#actualizarImagenes").hide();
		$('#myModalImagenes').modal();
		$("#btnSeleccionaImagen").show();
		$("#btnSeleccionaImagen2").show();
		$("#btnAlbumsDeFacebook").show();
	});
	$("#closemyModalImagenes").click(function(){
		$("#myModalImagenes").modal('toggle');
		$("#galeriaImagenes").hide();
	});
	$("#regresarSelecImg").click(function(){
		$("#galeriaImagenes").show();
		$("#imgSeleccionadaDeGaleria").hide();
		$("#regresarSelecImg").hide();
		$("#btnGuardarImagen").hide();
		$("#btnAlbumsDeFacebook").show();
		$("#btnSeleccionaImagen").val("");
		$("#actualizarTextoFoto").val("");
	});
	$("#regresarDeFace").click(function(){
		$("#facebookDiv").hide();
		$(".albumDinamico").remove();
		$(".photoDinamico").remove();
		$("#galeriaImagenes").show();
		$("#btnAlbumsDeFacebook").show();
		$("#btnSeleccionaImagen").show();
		$("#btnSeleccionaImagen2").show();
		$("#regresarDeFace").hide();
		$("#msjEligeAlbumFoto").hide();
		if(siHayImagen == 1){$("#galeriaVacia").hide();}else{$("#galeriaVacia").show();}
	});
	$("#regresarDeFotos").click(function(){
		$("#terceroFB").hide();
		$("#regresarDeFotos").hide();
		$("#btnGuardarImagenFB").hide();
		$("#segundoFB").show();
		$("#msjEligeFotoAlbum").show();
		$("#idRegresarAlbum").show();
		
	});
//////////////FIND EL CODIGO DE IMAGENES ////////////

});

function testapiFacebook() { 
var k = 0;
dfd = new $.Deferred();
FB.api('/me/albums?fields=count,name,id,picture', function(response) {
	$(response.data).map(function(){
		if (this.count > 0) {
			infoAlbumes[k] = {
                aid : this.id,
                title : this.name,
                count : this.count,
                picture : this.picture.data.url
            };
			k ++;
		}
		
	});
	
	for (var p in infoAlbumes) {
		generaFotos(infoAlbumes[p],p);
	}
	 dfd.resolve();
});
dfd.done(function(){ logueoFacebook2(); });

}// Fin del test API //

function generaFotos(idAlbum,p) {
	FB.api('/'+idAlbum.aid+'/photos?fields=images', function(photos){
		var resultTemp = [];
		for (var j=0; j<photos.data.length; j++){
			resultTemp[j] = {
				origen : photos.data[j].images[0].source
			};
		}
		photosDelAlbum[p] = resultTemp;
	});
}

window.fbAsyncInit = function() {
	console.log('ENTRO EN fbAsyncInit');
	FB.init({
		appId      : '346859792130678',
		cookie     : true,  // enable cookies to allow the server to access
		xfbml      : true,  // parse social plugins on this page
		version    : 'v2.0' // use version 2.2
	});
	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});
};

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "https://connect.facebook.net/en_US/all.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response) {
	if (response.status === 'connected') {
		testapiFacebook();
	}else if (response.status === 'not_authorized') {
		FB.login(function(response) {
			statusChangeCallback2(response);
		}, {scope: 'public_profile,email,user_photos'});
	} else {
		// REINTENTAR CONEXION//
	}
}

function statusChangeCallback2(response) {
	console.log('ENTRO EN statusChangeCallback2');
	if (response.status === 'connected') {
		testapiFacebook();
	} else if (response.status === 'not_authorized') {
		console.log('still not authorized!');
	} else {
		// REINTENTAR CONEXION//
	}
}

var revisarEstado = function checkLoginState() {
	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});
}


function picChange(evt)
{
	console.log("Aqui llega primero");
	var fileInput = evt.target.files;
	
	if(fileInput.length > 0)
	{
		console.log("SI HAY UNA IMAGEN SELECCIONADA");
		var picURL;
		$("#facebookDiv").hide();
		$("#galeriaImagenes").hide();
		$("#galeriaVacia").hide();
		$("#imgSeleccionadaDeGaleria").show();
		$("#regresarSelecImg").show();
		$("#btnGuardarImagen").show();
		$("#btnAlbumsDeFacebook").hide();
		
		if ( window.webkitURL ) {
			picURL = window.webkitURL.createObjectURL( fileInput[0] );
		} else if ( window.URL && window.URL.createObjectURL ) {
			picURL = window.URL.createObjectURL( fileInput[0] );
		} else {
			picURL = null;
		}

		fotoDeGaleria.src = picURL;
		console.log("La pic url es: " + picURL);
		var files = evt.target.files;
		var file = files[0];
		if(file.size <= 1024000){
			if (files && file)
			{
				var reader = new FileReader();
				reader.onload = function(readerEvt) {
					binaryString = readerEvt.target.result;
					//console.log("el binari string base 64 es: " + binaryString );
					binaryString =  btoa(binaryString);
					//console.log("el binari string de text es: " + binaryString );
				};

				reader.readAsBinaryString(file);
			}
			
		}else{
			bootbox.alert("La imágen ha superado el limite permitido. El límite es de 768x1024 px", function() {
				  return;
				});
			$("#galeriaImagenes").show();
			$("#imgSeleccionadaDeGaleria").hide();
			$("#regresarSelecImg").hide();
			$("#btnGuardarImagen").hide();
			$("#btnAlbumsDeFacebook").show();
			$("#btnSeleccionaImagen").val("");
			$("#actualizarTextoFoto").val("");
		}
		
	}
	else
	{
		console.log("Esto es que dio cancelar me imagino vamos a ver!");
	}
}

function validaImg()
{
	console.log("IMAGENESMAX: " + IMAGENESMAX + ", IMAGENESDELUSUARIO: " + IMAGENESDELUSUARIO);
	if (IMAGENESDELUSUARIO == IMAGENESMAX)
//		bootbox.alert("Ya alcanzaste el máximo de imágenes permitidas, adquiere Plan Pro desde la app", function() {
//			  return;
//			});
	
		bootbox.dialog({
			  title: "<p class='textBlack' ><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />Alcanzaste el máximo de imágenes permitidas</p>",
			  message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Adquiere <strong>Plan Pro</strong> desde la app para agregar más imágenes </p><br/> <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center"><a href="https://itunes.apple.com/mx/app/infomovil/id898313250?mt=8" style="margin: 0px; padding: 0px; color: rgb(49, 165, 154);" target="_blank"><img alt="AppStore" src="../resources/webapp/images/appstore_icn.png" style="margin: 0px; padding: 0px; max-width: 150px;" title="AppStore" /></a></div><div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center"><a href="https://play.google.com/store/apps/details?id=com.infomovil.infomovil" style="margin: 0px; padding: 0px; color: rgb(49, 165, 154);" target="_blank"><img alt="Google Play" src="../resources/webapp/images/gstore_icn.png"  style="margin: 0px; padding: 0px; max-width: 150px;" title="Google Play" /></a></div></div><div class="clearfix"></div><div style="display:block; height:30px; width:100%;"></div>'
			});
	
	
}

function getImagenesJQ()
{ 	
	$('#actualizarTextoFoto').val("");
	$('#nombreDeImgn').val("");
	$.blockUI.defaults.baseZ = 9000;
	$.blockUI({
		message: "Obteniendo imágenes...",
		css: {
			class:"alertaUI",
			top:  ($(window).height() - 400) /2 + 'px',
			left: ($(window).width() - 400) /2 + 'px',
			width: '400px'
		}
	});
	
	IMAGENESDELUSUARIO = 0;
	
	if(bloqueo1Vez == 0)
	{
		bloqueo1Vez = 1;
		
		$("#facebookDiv").hide();
		$('#regresarDeFace').hide();
		$('#idRegresarAlbum').hide();
		$('#btnSeleccionaImagen').show();
		$('#btnSeleccionaImagen2').show();
		$('#btnAlbumsDeFacebook').show();
		$(".imagenDinamica").remove();
		$("#imgSeleccionadaDeGaleria").hide();
		$("#regresarSelecImg").hide();
		$("#terceroFB").hide();
		$("#regresarDeFotos").hide();
		$("#btnGuardarImagenFB").hide();
		
		$("#msjEligeAlbumFoto").hide();
		var $listaImg = $('#listaImagenes');

		$.ajax({
			type : "GET",
			url : contextPath + "/infomovil/getImagenes",
			dataType : "json",
			contentType: "text/plain",
			data : {
				domainId: $('#idDominio').val()

			},
			success : function(data) {
				bloqueo1Vez = 0;
				var imgSinLogo = 0;
				for(var i = 0; i < data.length; i++)
					if (data[i].typeImage == "IMAGEN")
						imgSinLogo++;
				
				IMAGENESDELUSUARIO = imgSinLogo;
				console.log("las imagenes del usuario son: " + IMAGENESDELUSUARIO);
				if (IMAGENESDELUSUARIO > 0) 
					$("#galeriaVacia").hide(); 
				else 
					$("#galeriaVacia").show(); 
				 siHayImagen = 0;
				for(var i = 0; i < data.length; i++)
				{
					var imgUrl = data[i].url;
					var typeImg = data[i].typeImage;
					var descImg = data[i].descripcionImagen;
					var idImg = data[i].idImagen;

					if(typeImg == "IMAGEN")
					{   siHayImagen = 1;
						if(i <= IMAGENESMAX) 
						{
							var $li = $('<li class="imagenDinamica" style="display:block;height:80px; width:100%; margin:10px 0;"/>')
							$li.append('<div class="col-xs-3 text-left" style="max-height:50px;"><img src="'+imgUrl+'" onerror="errorPreview(this)" style="max-width:100px; max-height:45px;" class="ImgDinamica img-thumbnail"/></div>');
							$li.append('<div class="col-xs-9 reset"><input type="text" id="actualizarTexto' + idImg + '"  value="'+descImg+'" class="col-xs-5 col-sm-8" style="height:38px"/></input><div class="spaceBtnsMap"></div><button type="button" class="btn btn-purple" class="eliminarImagen" onClick="actualizarImagen('+idImg+', ' + "'" + imgUrl+ "'" + ')"><img width="20" height="20" alt="Borrar" src="../resources/webapp/images/ico_actualizar.png" /></button><div class="spaceBtnsMap"></div><button type="button" class="btn btn-purple" class="eliminarImagen" id="'+idImg+'"onclick="borrarImagenJQ('+idImg+')"><img width="20" height="20" alt="Borrar" src="../resources/webapp/images/trash.png" /></button><input type="hidden" id="IdImg" value="'+idImg+'"/></div></li>');
							$listaImg.append($li);
						}
						else
						{
							var $li = $('<li class="imagenDinamica" style="display:block;height:80px; width:100%; margin:10px 0;"/>')
	                    	$li.append('<div class="col-xs-3 text-center" style="max-height:50px;"><img src="'+imgUrl+'" onerror="errorPreview(this)" style="max-width:100px; max-height:45px;" class="ImgDinamica img-thumbnail"/></div>');
	                    	$li.append('<div class="col-xs-9 reset"><input type="text" id="actualizarTexto' + idImg + '" value="'+descImg+'" disabled="disabled" class="col-xs-5 col-sm-8" style="height:38px"/><div class="spaceBtnsMap"></div><button type="button" disabled="disabled" class="btn" class="eliminarImagen" onClick="actualizarImagen('+idImg+', ' + "'" + imgUrl+ "'" + ')"><img width="20" height="20" alt="Borrar" src="../resources/webapp/images/ico_actualizar.png" /></button><div class="spaceBtnsMap"></div><button type="button" disable="disable" class="btn" class="eliminarImagen" id="'+idImg+'"onclick="borrarImagenJQ('+idImg+')"><img width="20" height="20" alt="Borrar" src="../resources/webapp/images/trash.png" /></button><input type="hidden" id="IdImg" value="'+idImg+'"/></div></li>');
	                        $listaImg.append($li);
						}
					}
				}
				if(siHayImagen == 1){$("#galeriaVacia").hide();}
				$('#myModalImagenes').modal('show') ;
				$('#galeriaImagenes').show();
				$.unblockUI();
			},
			error : function(json) {
				bloqueo1Vez = 0;
				console.log("Error Actualizar");
				$.unblockUI();
			}
		});
	}
}

function errorPreview(element) {
    //alert('The image could not be loaded.');
    element.onerror='';
    element.src='../resources/webapp/images/ico_img-gy.png';
}

function guardarImagenesJQ() 
{	
	console.log("las imagenes del usuario son: " + IMAGENESDELUSUARIO + "las imágenes max son: " + IMAGENESMAX);
	if(IMAGENESDELUSUARIO < IMAGENESMAX) 
	{
		console.log("si entro a al if: " + IMAGENESDELUSUARIO);
		$.blockUI.defaults.baseZ = 9000;
		$.blockUI({
			message: "Guardando la imagen...",
			css: {
				class:"alertaUI",
				top:  ($(window).height() - 400) /2 + 'px',
				left: ($(window).width() - 400) /2 + 'px',
				width: '400px'
			}
		});

		var textFoto = $("#actualizarTextoFoto").val();

		$.ajax({
			type : "POST",
			url : contextPath + "/infomovil/guardarImagen",
			dataType : "json",
			contentType: "application/x-www-form-urlencoded",
			data : {
				baseImagen: binaryString,
				tipoImagen: "IMAGEN",
				domainId: $('#idDominio').val(),
				descImagen:  textFoto,

			},
			success : function(data) {
				console.log("LA RESPUESTA DEL GUARDADO ES: " +data);

				$("#msjEligeFotoAlbum").hide();
				$("#msjEligeAlbumFoto").hide();
				$("#facebookDiv").hide();
				$("#imgSeleccionadaDeGaleria").hide();
				$("#regresarSelecImg").hide();
				$("#btnSeleccionaImagen").show();
				$("#btnSeleccionaImagen2").show();
				$("#btnAlbumsDeFacebook").show();
				$("#btnSeleccionaImagen").val("");
				$("#actualizarTextoFoto").val("");
				getImagenesJQ();
				$("#galeriaImagenes").show();
				$("#btnGuardarImagen").hide();
			},
			error : function(json) {
				console.log("Error guardarImagen");
				$.unblockUI();
			}

		});
	}
	else
	{
		planPro = $("#planPro").val();
		visible = "display:block;";
		
		if (planPro == "SI")
			visible = "display:none;";
		
		bootbox.dialog({
			  title: "<p class='textBlack' ><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />Alcanzaste el máximo de imágenes permitidas</p>",
			  message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Adquiere <strong>Plan Pro</strong> desde la app para agregar más imágenes </p><br/> <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center"><a href="https://itunes.apple.com/mx/app/infomovil/id898313250?mt=8" style="margin: 0px; padding: 0px; color: rgb(49, 165, 154);" target="_blank"><img alt="AppStore" src="../resources/webapp/images/appstore_icn.png" style="margin: 0px; padding: 0px; max-width: 150px;" title="AppStore" /></a></div><div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center"><a href="https://play.google.com/store/apps/details?id=com.infomovil.infomovil" style="margin: 0px; padding: 0px; color: rgb(49, 165, 154);" target="_blank"><img alt="Google Play" src="../resources/webapp/images/gstore_icn.png"  style="margin: 0px; padding: 0px; max-width: 150px;" title="Google Play" /></a></div></div><div class="clearfix"></div><div style="display:block; height:30px; width:100%;"></div>'
			});	
		
		$("#galeriaImagenes").show();
		$("#imgSeleccionadaDeGaleria").hide();
		$("#regresarSelecImg").hide();
		$("#btnGuardarImagen").hide();
		$("#btnAlbumsDeFacebook").show();
		$("#btnSeleccionaImagen").val("");
		$("#actualizarTextoFoto").val("");
	}
}

function guardarImagenesJQF()
{	
	if(IMAGENESDELUSUARIO < IMAGENESMAX){
		
		var imageUrl = $("#imgVistaPrevia").attr("src");
		console.log('imageUrl', imageUrl);
		$.blockUI.defaults.baseZ = 9000;
		$.blockUI({
			message: "Guardando la imagen...",
			css: {
				class:"alertaUI",
				top:  ($(window).height() - 400) /2 + 'px',
				left: ($(window).width() - 400) /2 + 'px',
				width: '400px'
			}
		});
		
		convertImgToBase64(imageUrl, function(base64Img) {
			binaryString = base64Img.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
			var textFoto = $("#nombreDeImgn").val();
			$.ajax({
				type : "POST",
				url : contextPath + "/infomovil/guardarImagen",
				dataType : "json",
				contentType: "application/x-www-form-urlencoded",
				data : {
					baseImagen: binaryString,
					tipoImagen: "IMAGEN",
					domainId: $('#idDominio').val(),
					descImagen:  textFoto,

				},
				success : function(data) {
					console.log("LA RESPUESTA DEL GUARDADO ES: " +data);
					$("#facebookDiv").hide();
					$("#imgSeleccionadaDeGaleria").hide();
					$("#regresarSelecImg").hide();
					$("#btnSeleccionaImagen").show();
					$("#btnSeleccionaImagen2").show();
					$("#btnAlbumsDeFacebook").show();
					getImagenesJQ();
					$("#galeriaImagenes").show();
					$("#btnGuardarImagen").hide();
					
					$.unblockUI();

				},
				error : function(json) {
					console.log("Error guardarImagen");
					$.unblockUI();
				}

			});

		});
		console.log("termino de hacer la consulta");
	}else{
		console.log("YA ALCANZASTE EL MÁXIMO DE IMAGENES PERMITIDAS ADQUIERE PLAN PRO");
		bootbox.dialog({
			  title: "<p class='textBlack'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />Alcanzaste el máximo de imágenes permitidas</p>",
			  message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Adquiere <strong>Plan Pro</strong> desde la app para agregar más imágenes </p><br/> <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center"><a href="https://itunes.apple.com/mx/app/infomovil/id898313250?mt=8" style="margin: 0px; padding: 0px; color: rgb(49, 165, 154);" target="_blank"><img alt="AppStore" src="../resources/webapp/images/appstore_icn.png" style="margin: 0px; padding: 0px; max-width: 150px;" title="AppStore" /></a></div><div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center"><a href="https://play.google.com/store/apps/details?id=com.infomovil.infomovil" style="margin: 0px; padding: 0px; color: rgb(49, 165, 154);" target="_blank"><img alt="Google Play" src="../resources/webapp/images/gstore_icn.png"  style="margin: 0px; padding: 0px; max-width: 150px;" title="Google Play" /></a></div></div><div class="clearfix"></div><div style="display:block; height:30px; width:100%;"></div>'
			});
		
	}
}

function borrarImagenJQ(idImg)
{
	bootbox.confirm("<span style='margin:5px 0 0 0; display:block; padding:20px;'>¿Seguro que deseas borrar la imagen?</span>", function(result) {

		if (result)
		{
			$.blockUI.defaults.baseZ = 9000;
			$.blockUI({
				message: "Eliminando la imagen...",
				css: {
					class:"alertaUI",
					top:  ($(window).height() - 400) /2 + 'px',
					left: ($(window).width() - 400) /2 + 'px',
					width: '400px'
				}
			});

			$.ajax({
				type : "GET",
				url : contextPath + "/infomovil/borrarImagen",
				dataType : "json",
				contentType: "text/plain",
				data : {
					domainId: $('#idDominio').val(),
					imageId: idImg,

				},
				success : function(data) {
					$.unblockUI();
					console.log("LA RESPUESTA DEL ELIMINAR IMAGEN ES: " +data);
					getImagenesJQ();
				},
				error : function(json) {
					console.log("Error Eliminar Imagen");
					$.unblockUI();
				}

			});
		}
	});
}

function actualizarImagen(idImg, imgUrl)
{
	$.blockUI.defaults.baseZ = 9000;
	$.blockUI({
		message: "Actualizando imagen...",
		css: {
			class:"alertaUI",
			top:  ($(window).height() - 400) /2 + 'px',
			left: ($(window).width() - 400) /2 + 'px',
			width: '400px'
		}
	});

	$.ajax({
		type : "GET",
		url : contextPath + "/infomovil/actualizarImagen",
		dataType : "json",
		contentType: "text/plain",
		data : {
			domainId: $('#idDominio').val(),
			imageId: idImg,
			baseImagen : "",
			descImagen : $('#actualizarTexto' + idImg).val()
		},
		success : function(data) {
			$.unblockUI();
			console.log("LA RESPUESTA DE ACTUALIZAR IMAGEN ES: " + data);
			getImagenesJQ();
		},
		error : function(json) {
			console.log("Error Actualizar Imagen");
			$.unblockUI();
		}
	});
}

function convertImgToBase64(url, callback, outputFormat)
{
	
	var img = new Image();
	img.crossOrigin = 'Anonymous';

	img.onload = function() {
		var canvas = document.createElement('CANVAS');
		var ctx = canvas.getContext('2d');
		console.log(this.height + " y " + this.width);
		if(this.width > 900 && this.width < 1400){
		console.log("una");
			canvas.height = this.height * .30;
			canvas.width = this.width *.30;
			ctx.drawImage(this,0,0,this.width,this.height,0,0,canvas.width,canvas.height);
		
		}else if(this.width > 1400 && this.width < 5000){
			console.log("dos");
			canvas.height = this.height * .20;
			canvas.width = this.width *.20;
			ctx.drawImage(this,0,0,this.width,this.height,0,0,canvas.width,canvas.height);
			
			
		}else{
			console.log("tres");
			canvas.height = this.height;
			canvas.width = this.width;
			ctx.drawImage(this,0,0);
		}
	
		var dataURL = canvas.toDataURL(outputFormat || 'image/png');
		callback(dataURL);
		canvas = null;
	};
	
	img.src = url;
}

function logueoFacebook(response){
	console.log("EL RESPONSE ES:  " + response.status);
	if (response.status === 'connected') {
		$("#btnAlbumsDeFacebook").hide();
		$("#btnSeleccionaImagen").hide();
		$("#btnSeleccionaImagen2").hide();
		$("#terceroFB").hide();
		$("#regresarDeFotos").hide();
		$("#btnGuardarImagenFB").hide();
		$("#galeriaImagenes").hide();
		$(".albumDinamico").remove();
		$("#facebookDiv").show();
		$("#primeroFB").show();
		$("#msjEligeAlbumFoto").show();
		$("#regresarDeFace").show();
		$("#segundoFB").hide();
		$("#galeriaVacia").hide();
		$("#msjEligeFotoAlbum").hide();
		$("#idRegresarAlbum").hide();
		$("#nombreDeImgn").val('');
		for (var p in infoAlbumes) {
			var $photosList = $('#albumsList');
			var $li = $('<li class="albumDinamico" style="display:block; height:100px; margin:0 5px 5px 5px;"/>');
			$li.append('<span class="col-xs-4"><img src="' + infoAlbumes[p].picture + '" style="max-width:100px; max-height:100px;"  class="img-thumbnail"/></span>');
			$li.append('<span class="col-xs-8"><strong style="color:#7c41bc" class="hidden-xs"> Album:</strong> '+ infoAlbumes[p].title +'<img alt="" src="../resources/webapp/images/ir.png" style="max-width:23px; max-height:23px;" title="Ir" class="pull-right"/></span>');

			$li.click(function() {
				var r = $(this).index();
				$(".photoDinamico").remove();
				$("#primeroFB").hide();
				$("#msjEligeAlbumFoto").hide();
				$("#regresarDeFace").hide();
				$("#segundoFB").show();
				$("#msjEligeFotoAlbum").show();
				$("#idRegresarAlbum").show();
				$("#terceroFB").hide();
				$("#regresarDeFotos").hide();
				$("#btnGuardarImagenFB").hide();
				$("#galeriaVacia").hide();
				var fotos = photosDelAlbum[r];
				for (var a in fotos ) {
					var $photosList = $('#photosList');
					var $li = $('<div class="photoDinamico" style="display:block; height:100px; margin:10px 5px; max-width:100px; float:left "/>');
					$li.append('<span class="col-xs-12"><img src="' + fotos[a].origen + '" style="max-width:100px; max-height:100px;" class="img-thumbnail"/></span>');
					$li.on("click", "img", function(){
						$("#imgVistaPrevia").attr('src',$(this).attr("src"));
						$("#primeroFB").hide();
						$("#msjEligeAlbumFoto").hide();
						$("#regresarDeFace").hide();
						$("#segundoFB").hide();
						$("#msjEligeFotoAlbum").hide();
						$("#idRegresarAlbum").hide();
						$("#terceroFB").show();
						$("#regresarDeFotos").show();
						$("#btnGuardarImagenFB").show();
					});
					$photosList.append($li);
				}
			});
			$photosList.append($li);
		}
	}else{
		FB.login(function(response) {
			statusChangeCallback(response);
		}, {scope: 'public_profile,email,user_photos'});

	}
}


function logueoFacebook2(){
	$("#btnAlbumsDeFacebook").hide();
	$("#btnSeleccionaImagen").hide();
	$("#btnSeleccionaImagen2").hide();
	$("#terceroFB").hide();
	$("#regresarDeFotos").hide();
	$("#btnGuardarImagenFB").hide();
	$("#galeriaImagenes").hide();
	$(".albumDinamico").remove();
	$("#facebookDiv").show();
	$("#primeroFB").show();
	$("#msjEligeAlbumFoto").show();
	$("#regresarDeFace").show();
	$("#segundoFB").hide();
	$("#galeriaVacia").hide();
	$("#msjEligeFotoAlbum").hide();
	$("#idRegresarAlbum").hide();
	$("#nombreDeImgn").val('');
	for (var p in infoAlbumes) {
		var $photosList = $('#albumsList');
		var $li = $('<li class="albumDinamico" style="display:block; height:100px; margin:0 5px 5px 5px;"/>');
		$li.append('<span class="col-xs-4"><img src="' + infoAlbumes[p].picture + '" style="max-width:100px; max-height:100px;"  class="img-thumbnail"/></span>');
		$li.append('<span class="col-xs-8"><strong style="color:#7c41bc" class="hidden-xs"> Album:</strong> '+ infoAlbumes[p].title +' <img alt="" src="../resources/webapp/images/ir.png" style="max-width:23px; max-height:23px;" title="Ir" class="pull-right"/></span><br/>');

		$li.click(function() {
			var r = $(this).index();
			$(".photoDinamico").remove();
			$("#primeroFB").hide();
			$("#msjEligeAlbumFoto").hide();
			$("#regresarDeFace").hide();
			$("#segundoFB").show();
			$("#msjEligeFotoAlbum").show();
			$("#idRegresarAlbum").show();
			$("#terceroFB").hide();
			$("#regresarDeFotos").hide();
			$("#btnGuardarImagenFB").hide();
			$("#galeriaVacia").hide();
			var fotos = photosDelAlbum[r];
			for (var a in fotos ) {
				var $photosList = $('#photosList');
				var $li = $('<div class="photoDinamico" style="display:block; height:100px; margin:10px 5px; max-width:100px; float:left "/>');
				$li.append('<span class="col-xs-12"><img src="' + fotos[a].origen + '" style="max-width:100px; max-height:100px;" class="img-thumbnail"/></span>');
				$li.on("click", "img", function(){
					$("#imgVistaPrevia").attr('src',$(this).attr("src"));
					$("#primeroFB").hide();
					$("#msjEligeAlbumFoto").hide();
					$("#regresarDeFace").hide();
					$("#segundoFB").hide();
					$("#msjEligeFotoAlbum").hide();
					$("#idRegresarAlbum").hide();
					$("#terceroFB").show();
					$("#regresarDeFotos").show();
					$("#btnGuardarImagenFB").show();
				});
				$photosList.append($li);
			}
		});
		$photosList.append($li);
	}

}