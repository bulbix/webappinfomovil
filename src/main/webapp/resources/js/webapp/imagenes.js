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

    
  // ESTA FUNCION ES PARA SABER SI ESTA CONECTADO A FACEBOOK //
  function statusChangeCallback(response) {
    if (response.status === 'connected') {
      testapiFacebook();  
    }else if (response.status === 'not_authorized') {  // REINTENTAR CONEXION // 
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
			
            for(var i = 0; i < data.length; i++) 
            {	
            	var imgUrl = data[i].url;
            	var typeImg = data[i].typeImage;
            	var descImg = data[i].descripcionImagen; 
                var idImg = data[i].idImagen;
                
                if(typeImg == "IMAGEN")
                {
                    var $li = $('<li class="imagenDinamica"><img src="'+imgUrl+'" width="80" height="80" class="ImgDinamica"/>');
                    	$li.append('<input type="text" id="actualizarTexto" value="'+descImg+'"></input>');
                    	$li.append('<button type="button" class="btn btn-default"  class="eliminarImagen">A</button>');
                    	$li.append('<button type="button" class="btn btn-default" class="eliminarImagen" id="'+idImg+'"onclick="borrarImagenJQ('+idImg+')">X</button>');	
                    	$li.append('<input type="hidden" id="IdImg" value="'+idImg+'"/></li>');	
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
    
function guardarImagenesJQ()
{
	var textFoto = "";
	
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

	textFoto = $("#actualizarTextoFoto").val();
	
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
        $("#myModalImagenes").modal('toggle');
        $("#galeriaImagenes").hide();
			
		},
		error : function(json) {
			console.log("Error guardarImagen");
			$.unblockUI();
		}

	});		
	
	$.unblockUI();
}

function guardarImagenesJQF()
{    	
	var textFoto = "";
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
    	textFoto = $("#nombreDeImgn").val();

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
            $("#myModalImagenes").modal('toggle');
            $("#galeriaImagenes").hide();
            $.unblockUI();
    		},
    		error : function(json) {
    			console.log("Error guardarImagen");
    			$.unblockUI();
    		}

    	});		
	
    });   
}
    
 function borrarImagenJQ(idImg)
 { 	
	var textFoto = $("#actualizarTextoFoto").val();
	console.log("descripcion es: " + textFoto);
	
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
            console.log("LA RESPUESTA DEL ELIMINAR IMAGEN ES: " +data);
            getImagenesJQ();
			
		},
		error : function(json) {
			console.log("Error Eliminar Imagen");
			$.unblockUI();
		}

	});		
	
	$.unblockUI();
}
 
function convertImgToBase64(url, callback, outputFormat)
{
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