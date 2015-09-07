$(document).ready(function(){

	$("#terceroFB").hide();
	$(".albumDinamico").remove();
	$("#segundoFB").hide();
	$("#galeriaVacia").hide();
	$("#imgSeleccionadaDeGaleria").hide();
	$("#facebookDiv").hide();
	$("#primeroFB").show();
	var $btnAlbumsDeFacebook = $("#btnAlbumsDeFacebook").show();
	$("#btnSeleccionaImagen").show();
	$("#btnGuardarImagen").hide();

	$btnAlbumsDeFacebook.click(function(e) {
		$(this).hide();
		$("#btnSeleccionaImagen").hide();
		$("#terceroFB").hide();
		$("#galeriaImagenes").hide();
		$(".albumDinamico").remove();
		$("#facebookDiv").show();
		$("#primeroFB").show();
		$("#segundoFB").hide();
		$("#nombreDeImgn").val('');
		FB.getLoginStatus(function(response) {
			if (response.status === 'connected') {
				$('#myModalFacebook').modal();

				for (var p in infoAlbumes) {
					var $photosList = $('#albumsList');
					var $li = $('<li class="albumDinamico"/>');
					$li.append('<img src="' + infoAlbumes[p].picture + '" width="100" height="100"/>');
					$li.append('<div>Album: '+ infoAlbumes[p].title +'</div>');

					$li.click(function() {
						var r = $(this).index();
						$(".photoDinamico").remove();
						$("#primeroFB").hide();
						$("#segundoFB").show();
						$("#terceroFB").hide();

						var fotos = photosDelAlbum[r];
						for (var a in fotos ) {
							var $photosList = $('#photosList');
							var $li = $('<li class="photoDinamico"/>');
							$li.append('<img src="' + fotos[a].origen + '" width="100" height="100"/>');
							$li.on("click", "img", function(){
								$("#imgVistaPrevia").attr('src',$(this).attr("src"));
								$("#primeroFB").hide();
								$("#segundoFB").hide();
								$("#terceroFB").show();
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
		});
	});

	$("#idRegresarAlbum").click(function(){
		$(".photoDinamico").remove();
		$("#terceroFB").hide();
		$("#segundoFB").hide();
		$("#primeroFB").show();
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
		$("#btnAlbumsDeFacebook").show();
	});
	$("#closemyModalImagenes").click(function(){
		$("#myModalImagenes").modal('toggle');
		$("#galeriaImagenes").hide();
	});
	$("#regresarSelecImg").click(function(){
		$("#galeriaImagenes").show();
		$("#imgSeleccionadaDeGaleria").hide();
		$("#btnGuardarImagen").hide();
		$("#btnAlbumsDeFacebook").show();
	});
	$("#regresarDeFace").click(function(){
		$("#facebookDiv").hide();
		$(".albumDinamico").remove();
		$(".photoDinamico").remove();
		$("#galeriaImagenes").show();
		$("#btnAlbumsDeFacebook").show();
		$("#btnSeleccionaImagen").show();
	});
	$("#regresarDeFotos").click(function(){
		$("#terceroFB").hide();
		$("#segundoFB").show();
	});



//////////////FIND EL CODIGO DE IMAGENES ////////////

});

var IMAGENESMAX = 5;
var IMAGENESDELUSUARIO = 0;
var infoAlbumes = [];
var photosDelAlbum = [];

var testapiFacebook = function testAPI() {
	var k = 0;
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
	});
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

var binaryString;

function picChange(evt)
{
	console.log("Aqui no llega primero");
	var fileInput = evt.target.files;

	if(fileInput.length > 0)
	{
		var picURL;
		$("#facebookDiv").hide();
		$("#galeriaImagenes").hide();
		$("#galeriaVacia").hide();
		$("#imgSeleccionadaDeGaleria").show();
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

		if (files && file)
		{
			var reader = new FileReader();
			reader.onload = function(readerEvt) {
				binaryString = readerEvt.target.result;
				binaryString =  btoa(binaryString);
			};

			reader.readAsBinaryString(file);
		}
	}
	else
	{
		console.log("Esto es que dio cancelar me imagino vamos a ver!");
	}
}

var bloqueo1Vez = 0;
function getImagenesJQ()
{
	if(bloqueo1Vez == 0){
		bloqueo1Vez = 1;
		$('#actualizarTextoFoto').val("");
		$('#nombreDeImgn').val("");
		$.blockUI.defaults.baseZ = 9000;
		$.blockUI({
			message: "Obteniendo imagenes...",
			css: {
				class:"alertaUI",
				top:  ($(window).height() - 400) /2 + 'px',
				left: ($(window).width() - 400) /2 + 'px',
				width: '400px'
			}
		});

		$(".imagenDinamica").remove();
		$("#imgSeleccionadaDeGaleria").hide();
		$("#terceroFB").hide();
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
				IMAGENESDELUSUARIO = data.length;
				for(var i = 0; i < data.length; i++)
				{
					var imgUrl = data[i].url;
					var typeImg = data[i].typeImage;
					var descImg = data[i].descripcionImagen;
					var idImg = data[i].idImagen;

					if(typeImg == "IMAGEN")
					{
						var $li = $('<li class="imagenDinamica"><img src="'+imgUrl+'" width="80" height="80" class="ImgDinamica"/>');
						$li.append("<input type='text' id='actualizarTexto" + idImg + "' value='"+descImg+"'></input>");
						$li.append('<button type="button" class="btn btn-default"  class="eliminarImagen" onClick="actualizarImagen('+idImg+', ' + "'" + imgUrl+ "'" + ')">A</button>');
						$li.append('<button type="button" class="btn btn-default" class="eliminarImagen" id="'+idImg+'"onclick="borrarImagenJQ('+idImg+')">X</button>');
						$li.append('<input type="hidden" id="IdImg" value="'+idImg+'"/></li>');
						$listaImg.append($li);
					}
				}

				$('#myModalImagenes').modal('show') ;
				$('#galeriaImagenes').show();

			},
			error : function(json) {
				bloqueo1Vez = 0;
				console.log("Error Actualizar");
				$.unblockUI();
			}

		});
		$.unblockUI();

	}
}

function guardarImagenesJQ(){
	bloqueo1Vez = 1;
	console.log("Las iamgenes del usuario son" +IMAGENESDELUSUARIO + "Las imagnes maximas son: " +IMAGENESMAX);
	if(IMAGENESDELUSUARIO <= IMAGENESMAX){
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
				// $("#myModalImagenes").modal('toggle');

				$("#facebookDiv").hide();
				$("#imgSeleccionadaDeGaleria").hide();
				$("#btnSeleccionaImagen").show();
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
	}else{
		console.log("YA ALCANZASTE EL MÁXIMO DE IMAGENES PERMITIDAS ADQUIERE Plan Pro");
	}

}

function guardarImagenesJQF()
{
	if(IMAGENESDELUSUARIO <= IMAGENESMAX){
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

			binaryString = btoa(base64Img);
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
					$("#btnSeleccionaImagen").show();
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
	}else{
		console.log("YA ALCANZASTE EL MÁXIMO DE IMAGENES PERMITIDAS ADQUIERE P");
	}
}


function borrarImagenJQ(idImg)
{
	bootbox.confirm("¿Seguro que deseas borrar la imagen?", function(result) {

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
			$.unblockUI();

		},
		error : function(json) {
			console.log("Error Actualizar Imagen");
			$.unblockUI();
		}

	});

}

function convertImgToBase64(url, callback, outputFormat)
{
	console.log("url: " + url);
	var img = new Image();
	img.crossOrigin = 'Anonymous';

	img.onload = function() {
		var canvas = document.createElement('CANVAS');
		var ctx = canvas.getContext('2d');
		canvas.height = this.height;
		canvas.width = this.width;
		ctx.drawImage(this,0,0);
		var dataURL = canvas.toDataURL(outputFormat || 'image/png');
		callback(dataURL);
		canvas = null;
	};

	img.src = url;
}