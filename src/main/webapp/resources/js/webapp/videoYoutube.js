$("#myModalVideo").on('shown.bs.modal', function() { 
	
	if ($("#urlVideo").val().trim().length > 0) {
		
		console.log("con video");
		$("#playerVideoFrame").attr('src', $("#urlVideo").val());
        $("#primero").hide();
        $("#segundo").hide();
        $("#tercero").show();
	}

});

$("#myModalVideo").on('hidden.bs.modal', function() {
    $("#playerVideoFrame").attr('src', ""); 
	$("#tercero").hide();
    $(".dinamico").remove();
    $("#primero").show();
    $("#segundo").hide();	
});

$(document).ready(function(){
    $("#tercero").hide();
    $(".dinamico").remove();
    $("#primero").show();
    $("#segundo").hide();
    

    $("#button").click(function(){
       $("#tercero").hide();
       $(".dinamico").remove();
       $("#segundo").hide();
       $("#primero").show();
        var str = $("#algo").val();
        var inputsinespacios = str.split(' ').join('%20');
        var str1 = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=";
        var str2 = inputsinespacios;
        var str3 = "&maxResults=20&key=AIzaSyBfyUsYuAxuiHu1IeOW-L6dbfkNfEIEIEU";
        var peticion = str1.concat(str2,str3);
        var $lista = $('#lista');
        var $videoFrame = $('#playerVideoFrame');
        $.ajax({
                        url: peticion,
                        type: "GET",
                        dataType: "json",
                         complete: function (data) {
                          $("#tercero").hide();
                          $(".dinamico").remove();
                          $("#primero").hide();
                          $("#segundo").show();
                          var items = data.responseJSON.items;
                           for(var i = 0; i < items.length; i++) {
                              var title = items[i].snippet.title;
                              var videoId = items[i].id.videoId;
                              var imgSrc = items[i].snippet.thumbnails.default.url;
                              var videoUrl = 'https://www.youtube.com/embed/' + videoId;
                              var $li = $('<li data-video="'+videoUrl+'" class="dinamico btnsEditor" style="margin:0 0 10px 0; background:#e2e2e2; cursor:pointer!important;"/>');

                              
                              $li.append('<span class="thumb" style="display:block; float:left; width:50%;"><img src="' + imgSrc + '" /></span>');
                              $li.append('<span class="title" style="display:block; float:left;width:50%">'+ title + '</span><div class="clear"></div>');
                              $li.click(function() {
                                  $videoFrame.attr('src', $(this).attr('data-video') );
                                  $("#primero").hide();
                                  $("#segundo").hide();
                                  $("#tercero").show();
                              });
                              $lista.append($li);
                           }
                         },
                         error: function (error) {
                              alert('El error jquery es: ' +JSON.stringify(error));
                         }
                  });         
    });
    
  $("#idClose").click(function(){
    $(".dinamico").remove();
    $("#tercero").hide();
    $("#segundo").hide();
    $("#primero").show();
  });
  
  $("#idRegresar").click(function(){
    $(".dinamico").remove();
    $("#tercero").hide();
    $("#segundo").hide();
    $("#primero").show();
  });
  
});

function borrarVideo() 
{	
	if ($("#playerVideoFrame").attr("src").trim().length == 0)
		return;
	
	actualizaVideo("", "0");
}

function guardarUrlVideo()
{
	if ($("#playerVideoFrame").attr("src").trim().length == 0)
		return;
	
    actualizaVideo($("#playerVideoFrame").attr("src"), "1");
}

function actualizaVideo(url, accion) {

	if (accion == "1")
		$("#myModalVideo").css("display", "none");

    $.blockUI.defaults.baseZ = 9000;   
    $.blockUI({ 
        message: "Actualizando video...", 
        css: { 
        	class:"alertaUI",
            top:  ($(window).height() - 400) /2 + 'px', 
            left: ($(window).width() - 400) /2 + 'px', 
            width: '400px' 
        } 
    }); 
    
	$.ajax({
		type : "GET",
		url : contextPath + "/infomovil/actualizaVideo",
		dataType : "json",
		contentType: "text/plain",
		data : {
			urlVideo: url,
		},
		success : function(json) {		
			
			if(json.actualizaVideo == "0")
			{
				console.log("Video actualizado correctamente");	
				if (accion == "1") /*Guarda*/
					window.location = contextPath + '/infomovil/editarSitio';
				else
				{
					$("#tercero").hide();
				    $(".dinamico").remove();
				    $("#primero").show();
				    $("#segundo").hide();	
					$("#playerVideoFrame").attr('src', ""); 	
					$("#urlVideo").val("");
					$("#idOpcionVideo").html("Agrega un video");
				}
			}

			$.unblockUI();
		},
		error : function(json) {
			console.log("Error actualizaVideo");
			$.unblockUI();
		}

	});	
}
