

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
        var str3 = "&maxResults=10&key=AIzaSyBfyUsYuAxuiHu1IeOW-L6dbfkNfEIEIEU";
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
                              var $li = $('<li data-video="'+videoUrl+'" class="dinamico"/>');

                              $li.append('<div class="title">'+ title + '</div>');
                              $li.append('<div class="thumb"><img src="' + imgSrc + '" /></div>');
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

function guardarUrlVideo()
{
    var urlVideo = $("#playerVideoFrame").attr("src");
    console.log(urlVideo);

	$("#myModalVideo").css("display", "none");
    $.blockUI({ 
        message: "Actualizando video...", 
        css: { 
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
			urlVideo: urlVideo,
		},
		success : function(json) {		
			
			if(json.actualizaVideo == "0")
			{
				console.log("Video actualizado correctamente");		
				window.location = contextPath + '/infomovil/editarSitio';
			}

			$.unblockUI();
		},
		error : function(json) {
			console.log("Error actualizaVideo");
			$.unblockUI();
		}

	});	
}
