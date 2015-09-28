var bloqueo1Vez = 0;
var planPro = "";
var visible = "";
var IMAGENESMAX = $("#galeriaImagenesMax").val();
var IMAGENESDELUSUARIO = 0;
var infoAlbumes = [];
var photosDelAlbum = [];
var siHayImagen = 0;
var noEsDispositivo = false;
var ORIGIN_USER = 1;
var ORIGIN_FACEBOOK = 2;

$(document).ready(function() {

	isDevice();
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

	$("#btnGuardarImagen").hide();
	$btnAlbumsDeFacebook.click(function(e) {

		FB.getLoginStatus(function(response) {

			logueoFacebook(response);
		});

	});

	$("#idRegresarAlbum").click(function() {

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

	$("#idCloseImgFace").click(function() {
		$("#imgVistaPrevia").attr('src', '');
	});

	$("#llamarGaleriaImagenes").click(function() {

		$("#galeriaImagenes").show();
		$("#buscarImagenes").hide();
		$("#facebookDiv").hide();
		$("#actualizarImagenes").hide();
		$('#myModalImagenes').modal();
		if (noEsDispositivo)
			$("#btnSeleccionaImagen2").show();
		$("#btnAlbumsDeFacebook").show();
	});
	$("#closemyModalImagenes").click(function() {
		$("#myModalImagenes").modal('toggle');
		$("#galeriaImagenes").hide();
	});
	$("#regresarSelecImg").click(function() {

		$("#galeriaImagenes").show();
		$("#imgSeleccionadaDeGaleria").hide();
		$("#regresarSelecImg").hide();
		$("#btnGuardarImagen").hide();
		$("#btnAlbumsDeFacebook").show();
		$("#btnSeleccionaImagen").val("");
		$("#actualizarTextoFoto").val("");
	});
	$("#regresarDeFace").click(function() {

		$("#facebookDiv").hide();
		$(".albumDinamico").remove();
		$(".photoDinamico").remove();
		$("#galeriaImagenes").show();
		$("#btnAlbumsDeFacebook").show();
		if (noEsDispositivo)
			$("#btnSeleccionaImagen2").show();
		$("#regresarDeFace").hide();
		$("#msjEligeAlbumFoto").hide();
		if (siHayImagen == 1) {
			$("#galeriaVacia").hide();
		} else {
			$("#galeriaVacia").show();
		}
	});
	$("#regresarDeFotos").click(function() {

		$("#terceroFB").hide();
		$("#regresarDeFotos").hide();
		$("#btnGuardarImagenFB").hide();
		$("#segundoFB").show();
		$("#msjEligeFotoAlbum").show();
		$("#idRegresarAlbum").show();

	});
	// ////////////FIND EL CODIGO DE IMAGENES ////////////

});

function isDevice() {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
			.test(navigator.userAgent)) {
		$("#btnSeleccionaImagen2").hide();
		noEsDispositivo = false;
		$('.modal').on('show.bs.modal', function() {
			$(this).css({
				position : 'fixed',
				marginTop : '0px',
				bottom : document.documentElement.scrollHeigh + 'px'
			});
		});
	} else {
		$("#btnSeleccionaImagen2").show();
		noEsDispositivo = true;
	}
}

function testapiFacebook() {
	var k = 0;
	dfd = new $.Deferred();
	FB.api('/me/albums?fields=count,name,id,picture', function(response) {
		$(response.data).map(function() {
			if (this.count > 0) {
				infoAlbumes[k] = {
					aid : this.id,
					title : this.name,
					count : this.count,
					picture : this.picture.data.url
				};
				k++;
			}

		});

		for ( var p in infoAlbumes) {
			generaFotos(infoAlbumes[p], p);
		}
		dfd.resolve();
	});
	dfd.done(function() {
		logueoFacebook2();
	});

}// Fin del test API //

function generaFotos(idAlbum, p) {
	FB.api('/' + idAlbum.aid + '/photos?fields=images', function(photos) {
		var resultTemp = [];
		for (var j = 0; j < photos.data.length; j++) {
			resultTemp[j] = {
				origen : photos.data[j].images[0].source
			};
		}
		photosDelAlbum[p] = resultTemp;
	});
}

window.fbAsyncInit = function() {

	FB.init({
		appId : '422690184604551',
		cookie : true, // enable cookies to allow the server to access
		xfbml : true, // parse social plugins on this page
		version : 'v2.0' // use version 2.2
	});
	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});
};

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {
		return;
	}
	js = d.createElement(s);
	js.id = id;
	js.src = "https://connect.facebook.net/en_US/all.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response) {
	if (response.status === 'connected') {
		testapiFacebook();
	} else if (response.status === 'not_authorized') {
		FB.login(function(response) {
			statusChangeCallback2(response);
		}, {
			scope : 'public_profile,email,user_photos'
		});
	} else {
		// REINTENTAR CONEXION//
	}
}

function statusChangeCallback2(response) {

	if (response.status === 'connected') {
		testapiFacebook();
	}
}

var revisarEstado = function checkLoginState() {
	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});
}

function picChange(evt) {
	var fileInput = evt.target.files;
	if (fileInput.length > 0) {
		var file = fileInput[0];
		if (file) {

			var picURL;
			$("#facebookDiv").hide();
			$("#galeriaImagenes").hide();
			$("#galeriaVacia").hide();
			$("#imgSeleccionadaDeGaleria").show();
			$("#regresarSelecImg").show();
			$("#btnGuardarImagen").show();
			$("#btnAlbumsDeFacebook").hide();

			try {
				if (window.webkitURL) {
					picURL = window.webkitURL.createObjectURL(file);
				} else if (window.URL && window.URL.createObjectURL) {
					picURL = window.URL.createObjectURL(file);
				} else {
					picURL = null;
				}
				fotoDeGaleria.src = picURL;
			} catch (err) {
				alert("Ocurrio un error!!");
				return false;
			}
			var reader = new FileReader();

			reader.onload = function() {
				fotoDeGaleria.src = reader.result;
			}

			reader.readAsDataURL(file);

		}
	}

}

function getImagenesJQ() {
	$("#btnGuardarImagen").hide();
	$('#actualizarTextoFoto').val("");
	$('#nombreDeImgn').val("");
	$.blockUI.defaults.baseZ = 9000;
	$.blockUI({
		message : "Obteniendo imágenes...",
		css : {
			class : "alertaUI",
			top : ($(window).height() - 400) / 2 + 'px',
			left : ($(window).width() - 400) / 2 + 'px',
			width : '400px'
		}
	});

	IMAGENESDELUSUARIO = 0;

	if (bloqueo1Vez == 0) {
		bloqueo1Vez = 1;

		$("#facebookDiv").hide();
		$('#regresarDeFace').hide();
		$('#idRegresarAlbum').hide();
		if (noEsDispositivo)
			$('#btnSeleccionaImagen2').show();
		$('#btnAlbumsDeFacebook').show();
		$(".imagenDinamica").remove();
		$("#imgSeleccionadaDeGaleria").hide();
		$("#regresarSelecImg").hide();
		$("#terceroFB").hide();
		$("#primeroFB").hide();
		$("#regresarDeFotos").hide();
		$("#btnGuardarImagenFB").hide();

		$("#msjEligeAlbumFoto").hide();
		var $listaImg = $('#listaImagenes');
		var weHaveSuccess = false;
		$
				.ajax({
					type : "GET",
					url : contextPath + "/infomovil/getImagenes",
					dataType : "json",
					contentType : "text/plain",
					data : {
						domainId : $('#idDominio').val()

					},
					success : function(data) {
						bloqueo1Vez = 0;
						var imgSinLogo = 0;
						for (var i = 0; i < data.length; i++)
							if (data[i].typeImage == "IMAGEN")
								imgSinLogo++;

						IMAGENESDELUSUARIO = imgSinLogo;

						if (IMAGENESDELUSUARIO > 0)
							$("#galeriaVacia").hide();
						else
							$("#galeriaVacia").show();
						siHayImagen = 0;
						for (var i = 0; i < data.length; i++) {
							var imgUrl = data[i].url;
							var typeImg = data[i].typeImage;
							var descImg = data[i].descripcionImagen;
							var idImg = data[i].idImagen;

							if (typeImg == "IMAGEN") {
								siHayImagen = 1;
								if (i <= IMAGENESMAX) {
									var $li = $('<li class="imagenDinamica" style="display:block;height:80px; width:100%; margin:10px 0;"/>')
									$li
											.append('<div class="col-xs-3 text-left" style="max-height:45px;"><img src="'
													+ imgUrl
													+ '" onerror="errorPreview(this)" class="ImgDinamica img-thumbnail imgLista"/></div>');
									$li
											.append('<div class="col-xs-9 reset"><input type="text" id="actualizarTexto'
													+ idImg
													+ '"  value="'
													+ descImg
													+ '" class="col-xs-5 col-sm-8" style="height:38px"/></input><div class="spaceBtnsMap"></div><button type="button" class="btn btn-purple" class="eliminarImagen" onClick="actualizarImagen('
													+ idImg
													+ ', '
													+ "'"
													+ imgUrl
													+ "'"
													+ ')"><img width="20" height="20" alt="Borrar" src="../resources/webapp/images/ico_actualizar.png" /></button><div class="spaceBtnsMap"></div><button type="button" class="btn btn-purple" class="eliminarImagen" id="'
													+ idImg
													+ '"onclick="borrarImagenJQ('
													+ idImg
													+ ')"><img width="20" height="20" alt="Borrar" src="../resources/webapp/images/trash.png" /></button><input type="hidden" id="IdImg" value="'
													+ idImg + '"/></div></li>');
									$listaImg.append($li);
								} else {
									var $li = $('<li class="imagenDinamica" style="display:block;height:80px; width:100%; margin:10px 0;"/>')
									$li
											.append('<div class="col-xs-3 text-center" style="max-height:50px;"><img src="'
													+ imgUrl
													+ '" onerror="errorPreview(this)" class="ImgDinamica img-thumbnail imgLista"/></div>');
									$li
											.append('<div class="col-xs-9 reset"><input type="text" id="actualizarTexto'
													+ idImg
													+ '" value="'
													+ descImg
													+ '" disabled="disabled" class="col-xs-5 col-sm-8" style="height:38px"/><div class="spaceBtnsMap"></div><button type="button" disabled="disabled" class="btn" class="eliminarImagen" onClick="actualizarImagen('
													+ idImg
													+ ', '
													+ "'"
													+ imgUrl
													+ "'"
													+ ')"><img width="20" height="20" alt="Borrar" src="../resources/webapp/images/ico_actualizar.png" /></button><div class="spaceBtnsMap"></div><button type="button" disable="disable" class="btn" class="eliminarImagen" id="'
													+ idImg
													+ '"onclick="borrarImagenJQ('
													+ idImg
													+ ')"><img width="20" height="20" alt="Borrar" src="../resources/webapp/images/trash.png" /></button><input type="hidden" id="IdImg" value="'
													+ idImg + '"/></div></li>');
									$listaImg.append($li);
								}
							}
						}
						if (siHayImagen == 1) {
							$("#galeriaVacia").hide();
						}
						$('#myModalImagenes').modal('show');
						$('#galeriaImagenes').show();
						$.unblockUI();
						weHaveSuccess = true;
					},
					error : function(json) {
						bloqueo1Vez = 0;

						$.unblockUI();
					},
					complete : function() {
						if (!weHaveSuccess) {
							alert('Your username/password seems to be incorrect!');
						}
					}
				});
	}
}

function errorPreview(element) {
	// alert('The image could not be loaded.');
	element.onerror = '';
	element.src = '../resources/webapp/images/ico_img-gy.png';
}

function guardarImagenesJQ() {

	if (IMAGENESDELUSUARIO < IMAGENESMAX) {
		var imageDom = document.getElementById("fotoDeGaleria");
		var imageUrl = imageDom.src;
		$.blockUI.defaults.baseZ = 9000;
		$.blockUI({
			message : "Guardando la imagen...",
			css : {
				class : "alertaUI",
				top : ($(window).height() - 400) / 2 + 'px',
				left : ($(window).width() - 400) / 2 + 'px',
				width : '400px'
			}
		});

		var textFoto = $("#actualizarTextoFoto").val();

		uploadImage(imageDom, imageUrl, ORIGIN_USER, textFoto);
	} else {
		planPro = $("#planPro").val();
		visible = "display:block;";

		if (planPro == "SI")
			visible = "display:none;";

		BootstrapDialog
				.show({
					title : "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />Alcanzaste el máximo de imágenes permitidas</span>",
					message : '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Adquiere <strong>Plan Pro</strong> desde la app para agregar más imágenes </p><br/> <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center"><a href="https://itunes.apple.com/mx/app/infomovil/id898313250?mt=8" style="margin: 0px; padding: 0px; color: rgb(49, 165, 154);" target="_blank"><img alt="AppStore" src="../resources/webapp/images/appstore_icn.png" style="margin: 0px; padding: 0px; max-width: 150px;" title="AppStore" /></a></div><div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center"><a href="https://play.google.com/store/apps/details?id=com.infomovil.infomovil" style="margin: 0px; padding: 0px; color: rgb(49, 165, 154);" target="_blank"><img alt="Google Play" src="../resources/webapp/images/gstore_icn.png"  style="margin: 0px; padding: 0px; max-width: 150px;" title="Google Play" /></a></div></div><div class="clearfix"></div><div style="display:block; height:30px; width:100%;"></div>'
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

function guardarImagenesJQF() {
	if (IMAGENESDELUSUARIO < IMAGENESMAX) {
		var imageUrl = $("#imgVistaPrevia").attr("src");
		$.blockUI.defaults.baseZ = 9000;
		$.blockUI({
			message : "Guardando la imagen...",
			css : {
				class : "alertaUI",
				top : ($(window).height() - 400) / 2 + 'px',
				left : ($(window).width() - 400) / 2 + 'px',
				width : '400px'
			}
		});

		convertImgToBase64F(
				imageUrl,
				function(base64Img) {
					binaryString = base64Img.replace(
							/^data:image\/(png|jpeg|jpg);base64,/, "");
					var textFoto = $("#nombreDeImgn").val();
					var weHaveSuccess = false;
					$
							.ajax({
								type : "POST",
								url : contextPath + "/infomovil/guardarImagen",
								dataType : "json",
								contentType : "application/x-www-form-urlencoded",
								data : {
									baseImagen : binaryString,
									tipoImagen : "IMAGEN",
									domainId : $('#idDominio').val(),
									descImagen : textFoto,

								},
								success : function(data) {
									console
											.log("LA RESPUESTA DEL GUARDADO ES: "
													+ data);
									$("#facebookDiv").hide();
									$("#imgSeleccionadaDeGaleria").hide();
									$("#regresarSelecImg").hide();
									if (noEsDispositivo)
										$("#btnSeleccionaImagen2").show();
									$("#btnAlbumsDeFacebook").show();
									getImagenesJQ();
									$("#galeriaImagenes").show();
									$("#btnGuardarImagen").hide();
									weHaveSuccess = true;
									$.unblockUI();

								},
								error : function(json) {
									$.unblockUI();
									BootstrapDialog
											.show({
												title : "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />Imagen demasiado grande</span>",
												message : '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">La imagen ha superado el límite permitido. El límite es de 768x1024 px</p><br/>'
											});

								},
								complete : function() {
									if (!weHaveSuccess) {
										BootstrapDialog
												.show({
													title : "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />Imagen demasiado grande</span>",
													message : '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">La imagen ha superado el límite permitido. El límite es de 768x1024 px</p><br/>'
												});
									}
								}

							});

				});
		console.log("termino de hacer la consulta");
	} else {
		console
				.log("YA ALCANZASTE EL MÁXIMO DE IMAGENES PERMITIDAS ADQUIERE PLAN PRO");
		BootstrapDialog
				.show({
					title : "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />Alcanzaste el máximo de imágenes permitidas</span>",
					message : '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Adquiere <strong>Plan Pro</strong> desde la app para agregar más imágenes </p><br/> <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center"><a href="https://itunes.apple.com/mx/app/infomovil/id898313250?mt=8" style="margin: 0px; padding: 0px; color: rgb(49, 165, 154);" target="_blank"><img alt="AppStore" src="../resources/webapp/images/appstore_icn.png" style="margin: 0px; padding: 0px; max-width: 150px;" title="AppStore" /></a></div><div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center"><a href="https://play.google.com/store/apps/details?id=com.infomovil.infomovil" style="margin: 0px; padding: 0px; color: rgb(49, 165, 154);" target="_blank"><img alt="Google Play" src="../resources/webapp/images/gstore_icn.png"  style="margin: 0px; padding: 0px; max-width: 150px;" title="Google Play" /></a></div></div><div class="clearfix"></div><div style="display:block; height:30px; width:100%;"></div>'
				});

	}
}

function convertImgToBase64F(url, callback, outputFormat) {
	var img = new Image();
	img.crossOrigin = 'Anonymous';
	img.onload = function() {
		var canvas = document.createElement('CANVAS');
		var ctx = canvas.getContext('2d');

		var targetWidth = 500;

		var ratio = (targetWidth > this.width) ? 1 : targetWidth / this.width;
		canvas.height = this.height * ratio;
		canvas.width = this.width * ratio;
		ctx.drawImage(this, 0, 0, this.width, this.height, 0, 0, canvas.width,
				canvas.height);
		var dataURL = canvas.toDataURL(outputFormat || 'image/png');
		callback(dataURL);
		canvas = null;
	};

	img.src = url;
}

function uploadImage(imageDom, imageUrl, origin, textFoto) {

	convertImgToBase64(
			imageDom,
			imageUrl,
			function(base64Img) {
				binaryString = base64Img.replace(
						/^data:image\/(png|jpeg|jpg);base64,/, "");
				var weHaveSuccess = false;
				$
						.ajax({
							type : "POST",
							url : contextPath + "/infomovil/guardarImagen",
							dataType : "json",
							timeout : 25000,
							contentType : "application/x-www-form-urlencoded",
							data : {
								baseImagen : binaryString,
								tipoImagen : "IMAGEN",
								domainId : $('#idDominio').val(),
								descImagen : textFoto

							},
							success : function(data) {
								weHaveSuccess = true;
								if (origin == ORIGIN_FACEBOOK) {
									$("#facebookDiv").hide();
									$("#imgSeleccionadaDeGaleria").hide();
									$("#regresarSelecImg").hide();
									if (noEsDispositivo)
										$("#btnSeleccionaImagen2").show();
									$("#btnAlbumsDeFacebook").show();
									getImagenesJQ();
									$("#galeriaImagenes").show();
									$("#btnGuardarImagen").hide();
								} else {
									$("#msjEligeFotoAlbum").hide();
									$("#msjEligeAlbumFoto").hide();
									$("#facebookDiv").hide();
									$("#imgSeleccionadaDeGaleria").hide();
									$("#regresarSelecImg").hide();
									if (noEsDispositivo)
										$("#btnSeleccionaImagen2").show();
									$("#btnAlbumsDeFacebook").show();
									$("#btnSeleccionaImagen").val("");
									$("#actualizarTextoFoto").val("");
									getImagenesJQ();
									$("#galeriaImagenes").show();
									$("#btnGuardarImagen").hide();
								}

								$.unblockUI();

							},
							error : function(json, t) {
								$.unblockUI();
								if (t === "timeout") {
									BootstrapDialog
											.show({
												title : "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />Se agoto el tiempo de espera</span>",
												message : '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo nuevamente.</p><br/>'
											});
								} else {
									BootstrapDialog
											.show({
												title : "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />Imagen demasiado grande</span>",
												message : '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">La imagen ha superado el límite permitido. El límite es de 768x1024 px</p><br/>'
											});
								}

							},
							complete : function() {
								if (!weHaveSuccess) {
									BootstrapDialog
											.show({
												title : "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />Imagen demasiado grande</span>",
												message : '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">La imagen ha superado el límite permitido. El límite es de 768x1024 px</p><br/>'
											});
								}
							}

						});

			});

}

function borrarImagenJQ(idImg) {
	BootstrapDialog
			.show({
				title : '<div class="textBlack">Borrar Imagen</div>',
				message : '<div style="display:block; padding: 10px;">¿Seguro que deseas borrar la imagen?</div>',
				buttons : [
						{
							label : 'Cancelar',
							action : function(dialog) {
								dialog.close();
							}
						},
						{
							label : 'Aceptar',
							action : function(dialog) {
								dialog.close();
								$.blockUI.defaults.baseZ = 9000;
								$.blockUI({
									message : "Eliminando la imagen...",
									css : {
										class : "alertaUI",
										top : ($(window).height() - 400) / 2
												+ 'px',
										left : ($(window).width() - 400) / 2
												+ 'px',
										width : '400px'
									}
								});
								var weHaveSuccess = false;
								$
										.ajax({
											type : "GET",
											url : contextPath
													+ "/infomovil/borrarImagen",
											dataType : "json",
											contentType : "text/plain",
											data : {
												domainId : $('#idDominio')
														.val(),
												imageId : idImg,

											},
											success : function(data) {
												$.unblockUI();
												getImagenesJQ();
												weHaveSuccess = true;
											},
											error : function(json) {
												$.unblockUI();
												BootstrapDialog
														.show({
															title : "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se ha eliminado la imagen</span>",
															message : '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Intenta eliminar la imagen nuevamente.</p><br/>'
														});
											},
											complete : function() {
												if (!weHaveSuccess) {
													BootstrapDialog
															.show({
																title : "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se ha eliminado la imagen</span>",
																message : '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Intenta eliminar la imagen nuevamente.</p><br/>'
															});
												}
											}
										});
							}

						} ]
			});
}

function actualizarImagen(idImg, imgUrl) {
	$.blockUI.defaults.baseZ = 9000;
	$.blockUI({
		message : "Actualizando imagen...",
		css : {
			class : "alertaUI",
			top : ($(window).height() - 400) / 2 + 'px',
			left : ($(window).width() - 400) / 2 + 'px',
			width : '400px'
		}
	});
	var weHaveSuccess = false;
	$
			.ajax({
				type : "GET",
				url : contextPath + "/infomovil/actualizarImagen",
				dataType : "json",
				contentType : "text/plain",
				data : {
					domainId : $('#idDominio').val(),
					imageId : idImg,
					baseImagen : "",
					descImagen : $('#actualizarTexto' + idImg).val()
				},
				success : function(data) {
					$.unblockUI();
					getImagenesJQ();
					weHaveSuccess = true;
				},
				error : function(json) {
					$.unblockUI();
					BootstrapDialog
							.show({
								title : "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se ha actualizado el nombre de la imagen</span>",
								message : '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Intenta actualizar el nombre de la imagen nuevamente.</p><br/>'
							});
				},
				complete : function() {
					if (!weHaveSuccess) {
						BootstrapDialog
								.show({
									title : "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se ha actualizado el nombre de la imagen</span>",
									message : '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Intenta actualizar el nombre de la imagen nuevamente.</p><br/>'
								});
					}
				}
			});
}

function convertImgToBase64(imageDom, url, callback, outputFormat) {
	var resize1 = function() {
		var canvas = document.createElement('CANVAS');
		var ctx = canvas.getContext('2d');

		var targetWidth = 320;
		var ratio = (targetWidth > imageDom.naturalWidth) ? 1 : targetWidth
				/ imageDom.naturalWidth;
		console.log(imageDom.naturalWidth, targetWidth, ratio);
		canvas.height = imageDom.naturalHeight * ratio;
		canvas.width = imageDom.naturalWidth * ratio;

		ctx.drawImage(imageDom, 0, 0, imageDom.naturalWidth,
				imageDom.naturalHeight, 0, 0, canvas.width, canvas.height);

		return canvas.toDataURL(outputFormat || 'image/png');
	};

	var resize2 = function() {
		var canvas = document.createElement('CANVAS');
		var ctx = canvas.getContext('2d');
		var targetWidth = 420;
		var ratio = (targetWidth > imageDom.naturalWidth) ? 1 : targetWidth
				/ imageDom.naturalWidth;
		console.log(imageDom.naturalWidth, targetWidth, ratio);
		canvas.height = imageDom.naturalHeight * ratio;
		canvas.width = imageDom.naturalWidth * ratio;
		ctx.drawImage(imageDom, 0, 0, imageDom.naturalWidth,
				imageDom.naturalHeight, 0, 0, canvas.width, canvas.height);

		return canvas.toDataURL(outputFormat || 'image/png');
	};

	if (url.substring(0, 5) == 'data:') {
		var dataURL = resize1();
		console.log('guardar imagen Tamaños (original, redimensionado)',
				url.length, dataURL.length);
		imageDom.src = dataURL;
		callback(dataURL);
		canvas = null;
	} else {
		console.log("entro pr facebook");
		var img = new Image();
		img.crossOrigin = 'Anonymous';
		img.onload = function() {
			var dataURL = resize2();
			console.log('Tamaños (original, redimensionado)', url.length,
					dataURL.length);
			imageDom.src = dataURL;
			callback(dataURL);
			canvas = null;
		};
		console.log("La nueva URL" + url);
		img.src = url;
	}
}

function logueoFacebook(response) {

	if (response.status === 'connected') {
		$("#btnAlbumsDeFacebook").hide();
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

		for ( var p in infoAlbumes) {
			var $photosList = $('#albumsList');
			var $li = $('<li class="albumDinamico" style="display:block; height:100px; margin:0 5px 5px 5px;"/>');
			$li.append('<span class="col-xs-4"><img src="'
					+ infoAlbumes[p].picture
					+ '" class="img-thumbnail imgListaBig"/></span>');
			$li
					.append('<span class="col-xs-8"><strong style="color:#7c41bc" class="hidden-xs"> Album:</strong> '
							+ infoAlbumes[p].title
							+ '<img alt="" src="../resources/webapp/images/ir.png" style="max-width:23px; max-height:23px;" title="Ir" class="pull-right"/></span>');

			$li
					.click(function() {

						$.blockUI.defaults.baseZ = 9000;
						$.blockUI({
							message : "Obteniendo imágenes...",
							css : {
								class : "alertaUI",
								top : ($(window).height() - 400) / 2 + 'px',
								left : ($(window).width() - 400) / 2 + 'px',
								width : '400px'
							}
						});

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
						for ( var a in fotos) {
							var $photosList = $('#photosList');
							var $li = $('<div class="photoDinamico" style="display:block; height:100px; margin:10px 5px; max-width:100px; float:left "/>');
							$li
									.append('<span class="col-xs-12"><img src="'
											+ fotos[a].origen
											+ '"  class="img-thumbnail imgListaBig"/></span>');
							$li.on("click", "img", function() {
								$("#imgVistaPrevia").attr('src',
										$(this).attr("src"));
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
						$.unblockUI();
					});
			$photosList.append($li);
		}
	} else {
		if (navigator.userAgent.match('CriOS')) {
			window
					.open(
							'https://www.facebook.com/dialog/oauth?client_id=422690184604551&scope=email,user_photos&redirect_uri='
									+ document.location.href + '', '', null);
		} else {
			FB.login(function(response) {
				statusChangeCallback(response);
			}, {
				scope : 'public_profile,email,user_photos'
			});
		}
	}
}

function logueoFacebook2() {

	$("#btnAlbumsDeFacebook").hide();
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

	for ( var p in infoAlbumes) {
		var $photosList = $('#albumsList');
		var $li = $('<li class="albumDinamico" style="display:block; height:100px; margin:0 5px 5px 5px;"/>');
		$li.append('<span class="col-xs-4"><img src="' + infoAlbumes[p].picture
				+ '"  class="img-thumbnail imgListaBig"/></span>');
		$li
				.append('<span class="col-xs-8"><strong style="color:#7c41bc" class="hidden-xs"> Album:</strong> '
						+ infoAlbumes[p].title
						+ ' <img alt="" src="../resources/webapp/images/ir.png" style="max-width:23px; max-height:23px;" title="Ir" class="pull-right"/></span><br/>');

		$li
				.click(function() {

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

					for ( var a in fotos) {
						var $photosList = $('#photosList');
						var $li = $('<div class="photoDinamico" style="display:block; height:100px; margin:10px 5px; max-width:100px; float:left "/>');
						$li.append('<span class="col-xs-12"><img src="'
								+ fotos[a].origen
								+ '"  class="img-thumbnail imgLista"/></span>');
						$li.on("click", "img", function() {
							$("#imgVistaPrevia").attr('src',
									$(this).attr("src"));
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