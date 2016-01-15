function initialize(){myApp.longitud=parseFloat($("#longitud").val()),myApp.latitud=parseFloat($("#latitud").val()),myApp.tieneMapa=0!=myApp.longitud&&0!=myApp.latitud,myApp.tieneMapa?(myApp.obtenerDireccion=!0,myApp.zoom=15):(myApp.obtenerDireccion=!1,myApp.latitud=21.06086980676483,myApp.longitud=-98.86579389431152,myApp.zoom=3),myLatlng=new google.maps.LatLng(myApp.latitud,myApp.longitud);var mapOptions={center:myLatlng,zoom:myApp.zoom,mapTypeControl:!1};map=new google.maps.Map(document.getElementById("map-canvas"),mapOptions),myApp.mapAuxiliar=map;var input=document.getElementById("pac-input"),autocomplete=new google.maps.places.Autocomplete(input);autocomplete.bindTo("bounds",map),map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);var infowindow=new google.maps.InfoWindow;myApp.marker=new google.maps.Marker({map:map,position:myLatlng}),myApp.marker.setVisible(!0),myApp.obtenerDireccion&&obtenerDireccion(myLatlng),google.maps.event.addListener(autocomplete,"place_changed",function(){return infowindow.close(),myApp.place=autocomplete.getPlace(),myApp.place.geometry?(myApp.place.geometry.viewport?map.fitBounds(myApp.place.geometry.viewport):(map.setCenter(myApp.place.geometry.location),map.setZoom(15)),myApp.marker.setPlace({placeId:myApp.place.place_id,location:myApp.place.geometry.location}),myApp.marker.setVisible(!0),infowindow.setContent("<div><strong>"+myApp.place.name+"</strong><br>"+myApp.place.formatted_address),myApp.mapAuxiliar=map,infowindow.open(map,myApp.marker),myApp.guardaPorEvento=!0,myApp.latAux=myApp.place.geometry.location.lat(),void(myApp.lngAux=myApp.place.geometry.location.lng())):($.unblockUI(),void(myApp.guardaPorEvento=!1))}),google.maps.event.addListener(map,"dragend",function(){myApp.mapAuxiliar=map,myApp.guardaPorEvento=!1}),$("#myModalMaps").on("shown.bs.modal",function(){$("#pac-input").val(""),google.maps.event.trigger(map,"resize"),map.panTo(myApp.marker.getPosition())}),$("#guardarUbicacion").on("click",function(){guardarUbicacion(myApp.mapAuxiliar)}),$("#borrarUbicacion").on("click",function(){myApp.tieneMapa&&actualizarUbicacion("","","","0")}),$("#ubicame").on("click",function(){return myApp.geolocalizacion=navigator.geolocation?!0:!1,myLatlng=new google.maps.LatLng(myApp.latitud,myApp.longitud),myApp.geolocalizacion?($.blockUI.defaults.baseZ=9e3,$.blockUI({message:"Obteniendo tu ubicación actual...",css:{padding:"10px",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait",margin:"0 auto",top:($(window).height()-200)/2+"px",left:($(window).width()-200)/2+"px",width:myApp.width}}),void navigator.geolocation.getCurrentPosition(function(position){myApp.latPermiso=position.coords.latitude,myApp.lonPermiso=position.coords.longitude,myLatlng=null,myLatlng=new google.maps.LatLng(myApp.latPermiso,myApp.lonPermiso),myApp.marker.setMap(null),myApp.marker=new google.maps.Marker({map:map,position:myLatlng}),myApp.marker.setPosition(myLatlng),myApp.marker.setVisible(!0),map.panTo(myLatlng),map.setZoom(15),myApp.mapAuxiliar=map,myApp.guardaPorEvento=!1,myApp.tieneMapa=!1,$("#pac-input").val(""),$.unblockUI()},function(error){errorGeolocalizacion(error)},{enableHighAccuracy:!0,timeout:15e3})):void mostrarError("Este buscador, no soporta la geolocalización")})}function getLocationData(latLng,guardarDatos){var geocoder=new google.maps.Geocoder;geocoder.geocode({location:latLng},function(results,status){status==google.maps.GeocoderStatus.OK&&(myApp.direccion="",myApp.direccion=results[0].formatted_address,guardarDatos(results[0].formatted_address))})}function guardarDatos(dir){actualizarUbicacion(myApp.latitud,myApp.longitud,dir,"1")}function guardarUbicacion(map){var latLng=null;myApp.guardaPorEvento?(myApp.latitud=myApp.latAux,myApp.longitud=myApp.lngAux):(myApp.mapCenter=map.getCenter(),myApp.latitud=myApp.mapCenter.lat(),myApp.longitud=myApp.mapCenter.lng()),latLng=new google.maps.LatLng(myApp.latitud,myApp.longitud),getLocationData(latLng,guardarDatos)}function obtenerDireccion(latLng){var geocoder=new google.maps.Geocoder;geocoder.geocode({location:latLng},function(results,status){status==google.maps.GeocoderStatus.OK&&($("#direccionMap").html(results[0].formatted_address),$("#idOpcionUbicacion").html("Editar ubicación actual:"))})}function actualizarUbicacion(latitud,longitud,direccion,accion){"1"==accion&&$("#myModalMaps").css("display","none"),$.blockUI.defaults.baseZ=9e3,$.blockUI({message:"Actualizando ubicación...",css:{padding:"10px",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait",margin:"0 auto",top:($(window).height()-200)/2+"px",left:($(window).width()-200)/2+"px",width:myApp.width}}),$.ajax({type:"GET",url:contextPath+"/infomovil/actualizaMapa",dataType:"json",contentType:"text/plain",data:{longitud:longitud,latitud:latitud,direccion:direccion},success:function(json){"0"==json.actualizaMapa&&("1"==accion?window.location=contextPath+"/infomovil/editarSitio":(myApp.latitud=21.06086980676483,myApp.longitud=-98.86579389431152,myApp.zoom=3,myLatlng=new google.maps.LatLng(myApp.latitud,myApp.longitud),myApp.marker.setPosition(myLatlng),map.panTo(myLatlng),map.setZoom(3),$("#direccionMap").html(""),$("#idOpcionUbicacion").html("Coloca tu ubicación"))),$.unblockUI()},error:function(json){$.unblockUI()}})}function errorGeolocalizacion(error){switch($.unblockUI(),myApp.obtenerDireccion=!1,error.code){case error.PERMISSION_DENIED:myApp.msjValidacion="Necesitas habilitar la función de geolocalización. Favor de cambiar tu configuración o de buscar manualmente tu ubicación.";break;case error.POSITION_UNAVAILABLE:myApp.msjValidacion="La información de geolocalización no está disponible.";break;case error.TIMEOUT:myApp.msjValidacion="Tiempo de espera agotado para obtener tu geolocalización. Intenta de nuevo.";break;case error.UNKNOWN_ERROR:myApp.msjValidacion="Error al intentar obtener tu geolocalización. Intenta de nuevo."}mostrarError(myApp.msjValidacion)}function mostrarError(descripcionMsj){$.blockUI.defaults.baseZ=9e3,$.blockUI({message:descripcionMsj,css:{padding:"10px",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait",margin:"0 auto",top:($(window).height()-200)/2+"px",left:($(window).width()-200)/2+"px",width:myApp.width}}),setTimeout($.unblockUI,3e3)}var myApp={};myApp.longitud=null,myApp.latitud=null,myApp.zoom=15,myApp.msjValidacion="",myApp.myLatlng=null,myApp.place=null,myApp.mapCenter=null,myApp.geocoder=null,myApp.mapAuxiliar=null,myApp.obtenerDireccion=!1,myApp.geolocalizacion=!1,myApp.bandera=!1,myApp.tieneMapa=!1,myApp.direccion="",myApp.latPermiso=0,myApp.lonPermiso=0,myApp.guardaPorEvento=!1,myApp.marker=null,myApp.latAux=null,myApp.lngAux=null,myApp.width="200px";var myLatlng=null,map=null;