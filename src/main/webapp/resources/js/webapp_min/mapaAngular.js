app.controller("MapCtrl",function($http,ubicacionFactory,volanteMapaService){function getLocationData(latLng){var geocoder=new google.maps.Geocoder;geocoder.geocode({location:latLng},function(results,status){status==google.maps.GeocoderStatus.OK&&(modeloMap.direccion="",modeloMap.direccion=results[0].formatted_address,actualizarUbicacion(modeloMap.latitud,modeloMap.longitud,modeloMap.direccion))})}function mensajeActualizacion(msg){$.blockUI.defaults.baseZ=9e3,$.blockUI({message:msg,css:{padding:"10px",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait",margin:"0 auto",top:($(window).height()-200)/2+"px",left:($(window).width()-200)/2+"px",width:modeloMap.width}})}function actualizarUbicacion(latitud,longitud,direccion){$("#myModalMaps").modal("toggle"),mensajeActualizacion("Actualizando ubicación...");var data,url=ubicacionFactory.ubicacion(tipoProducto).saveUrl;if("pagina"==tipoProducto)data={hashUser:hashUser,latitude:latitud,longitude:longitud,direccion:direccion};else{if(0==volanteMapaService.state.offerId){var resp=requestServer("POST",contextPath+"/infomovil/getPromociones",{});void 0!=resp[0]&&(volanteMapaService.state.offerId=resp[0].idOffer)}data={locId:volanteMapaService.state.locId,offerId:volanteMapaService.state.offerId,hashUser:hashUser,latitude:latitud,longitude:longitud,direccion:direccion}}$http({method:"POST",url:url,data:data}).then(function(response){0==response.data.codeError&&("volante"==tipoProducto&&(volanteMapaService.state.locId=response.data.locId),myLatlng=new google.maps.LatLng(latitud,longitud),modeloMap.tieneMapa=!0,obtenerDireccion(myLatlng),modeloMap.marker.setPosition(myLatlng),requestServer("GET",contextPath+"/infomovil/refrescarPromocion",{}),$.unblockUI())},function(response){$.unblockUI()})}function guardarUbicacion(map){var latLng=null;modeloMap.guardaPorEvento?(modeloMap.latitud=modeloMap.latAux,modeloMap.longitud=modeloMap.lngAux):(modeloMap.mapCenter=map.getCenter(),modeloMap.latitud=modeloMap.mapCenter.lat(),modeloMap.longitud=modeloMap.mapCenter.lng()),latLng=new google.maps.LatLng(modeloMap.latitud,modeloMap.longitud),getLocationData(latLng)}function eventosMapa(){var mapOptions={center:myLatlng,zoom:modeloMap.zoom,mapTypeControl:!1};map=new google.maps.Map(document.getElementById("map-canvas"),mapOptions),modeloMap.mapAuxiliar=map;var input=document.getElementById("pac-input"),autocomplete=new google.maps.places.Autocomplete(input);autocomplete.bindTo("bounds",map),map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);var infowindow=new google.maps.InfoWindow;modeloMap.marker=new google.maps.Marker({map:map,position:myLatlng}),modeloMap.marker.setVisible(!0),modeloMap.obtenerDireccion&&obtenerDireccion(myLatlng),google.maps.event.addListener(autocomplete,"place_changed",function(){return infowindow.close(),modeloMap.place=autocomplete.getPlace(),modeloMap.place.geometry?(modeloMap.place.geometry.viewport?map.fitBounds(modeloMap.place.geometry.viewport):(map.setCenter(modeloMap.place.geometry.location),map.setZoom(15)),modeloMap.marker.setPlace({placeId:modeloMap.place.place_id,location:modeloMap.place.geometry.location}),modeloMap.marker.setVisible(!0),infowindow.setContent("<div><strong>"+modeloMap.place.name+"</strong><br>"+modeloMap.place.formatted_address),modeloMap.mapAuxiliar=map,infowindow.open(map,modeloMap.marker),modeloMap.guardaPorEvento=!0,modeloMap.latAux=modeloMap.place.geometry.location.lat(),void(modeloMap.lngAux=modeloMap.place.geometry.location.lng())):($.unblockUI(),void(modeloMap.guardaPorEvento=!1))}),google.maps.event.addListener(map,"dragend",function(){modeloMap.mapAuxiliar=map,modeloMap.guardaPorEvento=!1})}function obtenerDireccion(latLng){var geocoder=new google.maps.Geocoder;geocoder.geocode({location:latLng},function(results,status){status==google.maps.GeocoderStatus.OK&&($("#direccionMap").html(results[0].formatted_address),$("#idOpcionUbicacion").html("Editar ubicación actual:"))})}function errorGeolocalizacion(error){switch($.unblockUI(),modeloMap.obtenerDireccion=!1,error.code){case error.PERMISSION_DENIED:modeloMap.msjValidacion="Necesitas habilitar la función de geolocalización. Favor de cambiar tu configuración o de buscar manualmente tu ubicación.";break;case error.POSITION_UNAVAILABLE:modeloMap.msjValidacion="La información de geolocalización no está disponible.";break;case error.TIMEOUT:modeloMap.msjValidacion="Tiempo de espera agotado para obtener tu geolocalización. Intenta de nuevo.";break;case error.UNKNOWN_ERROR:modeloMap.msjValidacion="Error al intentar obtener tu geolocalización. Intenta de nuevo."}mostrarError(modeloMap.msjValidacion)}function mostrarError(descripcionMsj){$.blockUI.defaults.baseZ=9e3,$.blockUI({message:descripcionMsj,css:{padding:"10px",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait",margin:"0 auto",top:($(window).height()-200)/2+"px",left:($(window).width()-200)/2+"px",width:modeloMap.width}}),setTimeout($.unblockUI,3e3)}var mapaCtrl=this,modeloMap={longitud:null,latitud:null,zoom:15,msjValidacion:"",myLatlng:null,place:null,mapCenter:null,geocoder:null,mapAuxiliar:null,obtenerDireccion:!1,geolocalizacion:!1,bandera:!1,tieneMapa:!1,direccion:"",latPermiso:0,lonPermiso:0,guardaPorEvento:!1,marker:null,latAux:null,lngAux:null,width:"200px"},myLatlng=null,map=null,hashUser=null,tipoProducto=null;volanteMapaService.state.locId=0,volanteMapaService.state.offerId=0,mapaCtrl.init=function(tipo){tipoProducto=tipo,hashUser=hashUsuario();var params,url=ubicacionFactory.ubicacion(tipo).getUrl;if("pagina"==tipo)params={hashUser:hashUser};else{var resp=requestServer("POST",contextPath+"/infomovil/getPromociones",{});void 0!=resp[0]&&(volanteMapaService.state.offerId=resp[0].idOffer),params={offerId:volanteMapaService.state.offerId,hashUser:hashUser}}$http({method:"GET",url:url,params:params}).then(function(response){response.data.ubicacion.length>0?(modeloMap.longitud=response.data.ubicacion[0].longitude,modeloMap.latitud=response.data.ubicacion[0].latitude,"volante"==tipo?volanteMapaService.state.locId=response.data.ubicacion[0].locId:volanteMapaService.state.locId=0):(modeloMap.longitud=0,modeloMap.latitud=0),modeloMap.tieneMapa=0!=modeloMap.longitud&&0!=modeloMap.latitud,modeloMap.tieneMapa?(modeloMap.obtenerDireccion=!0,modeloMap.zoom=15):(modeloMap.obtenerDireccion=!1,modeloMap.latitud=21.06086980676483,modeloMap.longitud=-98.86579389431152,modeloMap.zoom=3),myLatlng=new google.maps.LatLng(modeloMap.latitud,modeloMap.longitud),eventosMapa()},function(response){}),$("#myModalMaps").on("shown.bs.modal",function(){$("#pac-input").val(""),google.maps.event.trigger(map,"resize"),map.panTo(modeloMap.marker.getPosition())})},mapaCtrl.guardar=function(){guardarUbicacion(modeloMap.mapAuxiliar)},mapaCtrl.borrar=function(){if(modeloMap.tieneMapa){mensajeActualizacion("Eliminando ubicación...");var data,url=ubicacionFactory.ubicacion(tipoProducto).delUrl;data="pagina"==tipoProducto?{hashUser:hashUser}:{locId:volanteMapaService.state.locId,hashUser:hashUser},$http({method:"DELETE",headers:{"Content-Type":"application/json"},url:url,data:data}).then(function(response){0==response.data.codeError&&(modeloMap.latitud=21.06086980676483,modeloMap.longitud=-98.86579389431152,modeloMap.zoom=3,myLatlng=new google.maps.LatLng(modeloMap.latitud,modeloMap.longitud),modeloMap.marker.setPosition(myLatlng),map.panTo(myLatlng),map.setZoom(3),$("#direccionMap").html(""),$("#idOpcionUbicacion").html("Coloca tu ubicación"),$("#myModalMaps").modal("toggle"),requestServer("GET",contextPath+"/infomovil/refrescarPromocion",{}),$.unblockUI())},function(response){$.unblockUI()})}},mapaCtrl.ubicame=function(){return modeloMap.geolocalizacion=navigator.geolocation?!0:!1,myLatlng=new google.maps.LatLng(modeloMap.latitud,modeloMap.longitud),modeloMap.geolocalizacion?(mensajeActualizacion("Obteniendo tu ubicación actual..."),void navigator.geolocation.getCurrentPosition(function(position){modeloMap.latPermiso=position.coords.latitude,modeloMap.lonPermiso=position.coords.longitude,myLatlng=null,myLatlng=new google.maps.LatLng(modeloMap.latPermiso,modeloMap.lonPermiso),modeloMap.marker.setMap(null),modeloMap.marker=new google.maps.Marker({map:map,position:myLatlng}),modeloMap.marker.setPosition(myLatlng),modeloMap.marker.setVisible(!0),map.panTo(myLatlng),map.setZoom(15),modeloMap.mapAuxiliar=map,modeloMap.guardaPorEvento=!1,modeloMap.tieneMapa=!1,$("#pac-input").val(""),$.unblockUI()},function(error){errorGeolocalizacion(error)},{enableHighAccuracy:!0,timeout:15e3})):void mostrarError("Este buscador, no soporta la geolocalización")}}).factory("ubicacionFactory",function(){var server=requestServer("POST",contextPath+"/infomovil/getPerfil",{}).perfil,ubicacionPagina={getUrl:server+"/api/editorPagina/getUbicacion",delUrl:server+"/api/editorPagina/deleteUbicacion",saveUrl:server+"api/editorPagina/upsertUbicacion"},ubicacionVolante={getUrl:server+"/api/editorVolante/getUbicacion",delUrl:server+"/api/editorVolante/deleteUbicacion",saveUrl:server+"api/editorVolante/upsertUbicacion"};return{ubicacion:function(tipo){return"pagina"==tipo?ubicacionPagina:ubicacionVolante}}}).factory("volanteMapaService",function($http,MensajesService){var state={offerId:0,locId:0};return{state:state,borrarDatos:function(){state.offerId=0,state.locId=0,$("#direccionMap").html(""),$("#idOpcionUbicacion").html("Coloca tu ubicación")}}});