$(document).ready(function(){

    $("#terceroFB").hide();
    $(".albumDinamico").remove();
    $("#segundoFB").hide();
    //$("#galeriaVacia").hide();
    $("#imgSeleccionadaDeGaleria").hide();
    $("#facebookDiv").hide();
    $("#primeroFB").show();
    $("#btnAlbumsDeFacebook").show();
    $("#btnSeleccionaImagen").show();
    $("#btnGuardarImagen").hide();

    $( "#btnAlbumsDeFacebook" ).click(function(e) {
          $(this).hide();
          $("#btnSeleccionaImagen").hide();
          $("#btnSeleccionaImagen2").hide();
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
                          var $li = $('<li class="albumDinamico" style="display: block;height:50px; margin:10px;"/><span class="col-xs-3"><img src="' + infoAlbumes[p].picture + '" style="max-width:100px; height:50px;"/></span><span class="col-xs-9"> Album: '+ infoAlbumes[p].title +'</span>');
                          // $li.append('');
                          
                           
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
                                         $li.append('<img src="' + fotos[a].origen + '" style="max-width:100px; height:50px;"/>');
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
var infoAlbumes = new Array();
var photosDelAlbum = new Array();
  
var testapiFacebook = function testAPI() {
     var k = 0;
     FB.api('/me/albums?fields=count,name,id,picture', function(response) {
          $(response.data).map(function(){
                  if (this.count > 0) {
                                  var resultAlbums = {
                                      aid : this.id,
                                      title : this.name,
                                      count : this.count,
                                      picture : this.picture.data.url
                                  };
                                  infoAlbumes[k] = resultAlbums;
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
    
function getImagenesJQ()
{
	$('#btnSeleccionaImagen').show();
	$('#btnSeleccionaImagen2').show();
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
			IMAGENESDELUSUARIO = data.length;
            for(var i = 0; i < data.length; i++) 
            {	
            	var imgUrl = data[i].url;
            	var typeImg = data[i].typeImage;
            	var descImg = data[i].descripcionImagen; 
                var idImg = data[i].idImagen;
                
                if(typeImg == "IMAGEN")
                {
                    var $li = $('<li class="imagenDinamica" style="display:block;height:50px; width:100%; margin:10px 0;"><div class="col-xs-3 text-center" style="max-height:50px;"><img src="'+imgUrl+'" onerror="errorPreview(this)" style="max-width:100px; max-height:50px;" class="ImgDinamica"/></div><div class="col-xs-9"><input type="text" id="actualizarTexto"' + idImg + '"" value="'+descImg+'" /><div class="spaceBtnsMap"></div><button type="button" class="btn btn-purple"  class="eliminarImagen" onClick="actualizarImagen('+idImg+', ' + "'" + imgUrl+ "'" + ')"><img width="20" height="20" alt="Borrar" src="../resources/webapp/images/ico_actualizar.png" /></button><div class="spaceBtnsMap"></div><button type="button" class="btn btn-purple" class="eliminarImagen" id="'+idImg+'"onclick="borrarImagenJQ('+idImg+')"><img width="20" height="20" alt="Borrar" src="../resources/webapp/images/trash.png" /></button><input type="hidden" id="IdImg" value="'+idImg+'"/></div></li>');
                    	//$li.append('');
                    	
                    	$listaImg.append($li);	
                }
            }
            
       $('#myModalImagenes').modal('show') ;
       $('#galeriaImagenes').show();
                
		},
		error : function(json) {
			console.log("Error Actualizar");
			$.unblockUI();
		}

	});	
	
	$.unblockUI();
}
function errorPreview(element) {
    //alert('The image could not be loaded.');
    element.onerror='';
    element.src='../resources/webapp/images/ico_img-gy.png';
}
function guardarImagenesJQ()
{	console.log("Las imágenes del usuario son" +IMAGENESDELUSUARIO + "Las imágenes máximas son: " +IMAGENESMAX);
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
		console.log("YA ALCANZASTE EL MÁXIMO DE IMAGENES PERMITIDAS ADQUIERE PLAN PRO");
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
		console.log("YA ALCANZASTE EL MÁXIMO DE IMAGENES PERMITIDAS ADQUIERE PLAN PRO");
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