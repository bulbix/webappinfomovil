function descargarArchivo(tipo){var eventoPromocion="promo-guardarPDF",pathArchivo=$("#urlVistaPreviaPromoImprimir").attr("src");void 0==pathArchivo&&(pathArchivo=$("#urlPromocion").text()+"?vistaPrevia=1"),pathArchivo=pathArchivo.replace("html",tipo);var link=document.createElement("a");document.body.appendChild(link),link.target="_self",link.download="promo."+tipo,link.href=pathArchivo,link.click(),"jpg"==tipo&&(eventoPromocion="promo-guardarJPG"),ga("send","event","promo",eventoPromocion,$("#tempNombrePromo").val(),$("#tempBanderaPromo").val())}function imprimirPromocionWeb(){var urlPromo=$("#urlPromocion").text(),nombrePromo=urlPromo.substring(urlPromo.lastIndexOf("/")+1),eventoPromocion="promo-imprimir",oldstrInner=document.documentElement.innerHTML,oldstr=document.body.innerHTML;document.html;$.blockUI.defaults.baseZ=9e3,$.blockUI({message:"Generando impresión...",css:{"class":"alertaUI",top:($(window).height()-400)/2+"px",left:($(window).width()-400)/2+"px",width:"400px"}}),$.ajax({type:"POST",url:contextPath+"/infomovil/getHTMLPromocion",data:{nombrePromocion:nombrePromo},success:function(data){$("#myModalPromoImprimir").modal("toggle"),document.documentElement.innerHTML=data.elHtmlDePromocion,setTimeout(function(){window.print(),window.focus(),window.close(),document.documentElement.innerHTML=oldstrInner,$(document.body).html(oldstr),banderaImprimir=!0,$("#myModalPromoImprimir").modal(),$.unblockUI()},2500),ga("send","event","promo",eventoPromocion,$("#tempNombrePromo").val(),$("#tempBanderaPromo").val())},error:function(json){$.unblockUI(),banderaImprimir=!1,BootstrapDialog.show({title:"<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se ha generado la impresión</span>",message:'<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo más tarde.</p><br/>'})}})}function cerrarModalImprimir(){1==banderaImprimir&&location.reload()}var app=angular.module("InfomovilVolantes",["ngMaterial","ngMessages","angular-momentjs"]),preferenceContVol=0;app.config(function($mdDateLocaleProvider){$mdDateLocaleProvider.formatDate=function(date){return moment(date).format("DD/MM/YYYY")}}).controller("VolantesController",function($scope,$http,VolanteService,MensajesService,$moment,volanteMapaService){var templatesPromo=new Array("promo8","promo6","promo1","promo5","promo4","promo7","promo2","promo3"),volantesCtrl=(new Array("Navidad","Cursos","Bares","Floral","Tecnología 2","Buen Fin","Hipster","Tecnología"),this);volantesCtrl.modfechaVigencia="",volantesCtrl.planPro="",volantesCtrl.fechaVigencia=new Date,$scope.$watch("volantesCtrl.fechaVigencia",function(v){var d=new Date(v);volantesCtrl.modfechaVigencia=moment(d).format("DD/MM/YYYY")}),volantesCtrl.muestraPublicarPromo=!1,volantesCtrl.muestraPromoPublicada=!1,volantesCtrl.muestraDivError=!1,volantesCtrl.noEspecificado=!1,volantesCtrl.llamanos=!1,volantesCtrl.enviaEmail=!1,volantesCtrl.visitanos=!1,volantesCtrl.plantillaPromo="promo1",volantesCtrl.producto="web",volantesCtrl.vista="editarSitio",volantesCtrl.tabla="multiproducto_dev",volantesCtrl.indicePromocion=2,volantesCtrl.maxLength=30,volantesCtrl.eventoPromocion="",volantesCtrl.init=function(planPro){volantesCtrl.planPro=planPro,"NO"==volantesCtrl.planPro&&$("#txtNombreVolante").prop("disabled",!0)},volantesCtrl.actualizaProducto=function(){volantesCtrl.mensaje="Actualizando producto...",MensajesService.abrirBlockUIGeneral(volantesCtrl.mensaje),$http({method:"POST",url:contextPath+"/infomovil/actualizaProducto",params:{tableName:volantesCtrl.tabla,producto:volantesCtrl.producto}}).then(function(response){volantesCtrl.mensaje="",MensajesService.cerrarBlockUIGeneral("Volantes",volantesCtrl.mensaje),window.location=contextPath+"/infomovil/"+volantesCtrl.vista},function(response){volantesCtrl.mensaje="No se ha podido actualizar el producto",MensajesService.cerrarBlockUIGeneral("Volantes",volantesCtrl.mensaje)})},volantesCtrl.vistaPrevia=function(){volantesCtrl.indicePromocion=2,volantesCtrl.plantillaPromo=templatesPromo[volantesCtrl.indicePromocion];var mensaje="Generando vista previa...";MensajesService.abrirBlockUIGeneral(mensaje),$http({method:"POST",url:contextPath+"/infomovil/verPromo",params:{idDominio:0,titulo:$("#nombrePromo").val(),descripcion:$("#descPromo").val(),fechaVigencia:volantesCtrl.modfechaVigencia,base64Imagen:"",redimir:$(".radioPromo:checked").val(),terminos:$("#infoadiPromo").val(),templatePromo:volantesCtrl.plantillaPromo,empresa:$("#nombreEmpresaPromo").val()}}).then(function(response){$("#urlVistaPreviaPromo").attr("src",response.data.urlVistaPreviaPromo+"?vistaPrevia=1"),$("#myModalPromo").modal(),$.unblockUI()},function(response){volantesCtrl.mensaje="No se ha podido generar la vista previa",MensajesService.cerrarBlockUIGeneral("Volantes",volantesCtrl.mensaje)})},volantesCtrl.publicarVolante=function(){return volantesCtrl.resultado=volantesCtrl.validarCampos(),volantesCtrl.eventoPromocion="promo-publicar","datosCompletos"!=volantesCtrl.resultado?("email"==volantesCtrl.resultado?$("#divError").html("El formato de email es incorrecto"):"teléfono"==volantesCtrl.resultado||"celular"==volantesCtrl.resultado?$("#divError").html("El formato de "+volantesCtrl.resultado+" es incorrecto deben ser 10 digitos"):"fecha"==volantesCtrl.resultado?$("#divError").html("El formato de "+volantesCtrl.resultado+" es incorrecto"):$("#divError").html(volantesCtrl.resultado),$("#divError").css("display","block"),void(volantesCtrl.muestraDivError=!0)):($("#divError").css("display","none"),volantesCtrl.muestraDivError=!1,volantesCtrl.plantillaFinalPromo="promo1",volantesCtrl.plantillaFinalPromo.length>0&&null!=volantesCtrl.plantillaFinalPromo&&(volantesCtrl.plantillaPromo=volantesCtrl.plantillaFinalPromo),volantesCtrl.mensaje="Publicando volante...",MensajesService.abrirBlockUIGeneral(volantesCtrl.mensaje),void $http({method:"POST",url:contextPath+"/infomovil/guardarPromocion",params:{titulo:$("#nombrePromo").val(),descripcion:$("#descPromo").val(),fechaVigencia:volantesCtrl.modfechaVigencia,base64Imagen:"",redimir:$(".radioPromo:checked").val(),terminos:$("#infoadiPromo").val(),templatePromo:$("#tempPromocion").text(),idPromocion:$("#idPromocion").text(),empresa:$("#nombreEmpresaPromo").val(),nombreVolante:"SI"==volantesCtrl.planPro?$("#txtNombreVolante").val():""}}).then(function(response){"0"==response.data.codeError?(guardarContactos(),VolanteService.guardarEventoGA(volantesCtrl.eventoPromocion,response.data.nombreSitio,response.data.banderaCanal),VolanteService.getVolantes(),volantesCtrl.muestraPublicarPromo=!1,volantesCtrl.muestraPromoPublicada=!0):(volantesCtrl.mensaje="El nombre elegido ya existe",MensajesService.cerrarBlockUIGeneral("Volantes",volantesCtrl.mensaje)),$.unblockUI()},function(response){volantesCtrl.mensaje="No se ha podido publicar el volante",MensajesService.cerrarBlockUIGeneral("Volantes",volantesCtrl.mensaje)}))},volantesCtrl.eliminarVolante=function(){volantesCtrl.eventoPromocion="promo-eliminar";var textos={titulo:"Borrar Volante",mensaje:"¿Seguro que deseas borrar el volante?"};MensajesService.obtenerConfirmacion(textos,function(confirmarBorrar){confirmarBorrar&&(volantesCtrl.mensaje="Eliminando volante...",MensajesService.abrirBlockUIGeneral(volantesCtrl.mensaje),$http({method:"POST",url:contextPath+"/infomovil/eliminarPromocion",params:{idPromocion:$("#idPromocion").text()}}).then(function(response){$("#idEmailContactoVolante").text(""),$("#idCelContactoVolante").text(""),$("#idTelContactoVolante").text(""),$("#telefonoVolante").val(""),$("#telContactoVolante").val(""),$("#celContactoVolante").val(""),$("#nombreEmpresaPromo").val(""),$("#emailContactoVolante").val(""),$("#txtNombreVolante").val(""),$("#tempPromocion").text("promo1"),volantesCtrl.indicePromocion=2,volantesCtrl.muestraPublicarPromo=!0,volantesCtrl.muestraPromoPublicada=!1,volantesCtrl.indicePromocion=0,volantesCtrl.modfechaVigencia="",volantesCtrl.fechaVigencia=new Date,VolanteService.guardarEventoGA(volantesCtrl.eventoPromocion,response.data.nombreSitio,response.data.banderaCanal),VolanteService.getVolantes(),volanteMapaService.borrarDatos(),$.unblockUI()},function(response){volantesCtrl.mensaje="No se ha podido eliminar el volante",MensajesService.cerrarBlockUIGeneral("Volantes",volantesCtrl.mensaje)}))})},volantesCtrl.guardarPromocion=function(){if(volantesCtrl.resultado=volantesCtrl.validarCampos(),volantesCtrl.eventoPromocion="promo-guardar","datosCompletos"!=volantesCtrl.resultado)return"email"==volantesCtrl.resultado?$("#divError").html("El formato de email es incorrecto"):"teléfono"==volantesCtrl.resultado||"celular"==volantesCtrl.resultado?$("#divError").html("El formato de "+volantesCtrl.resultado+" es incorrecto deben ser 10 digitos"):"fecha"==volantesCtrl.resultado?$("#divError").html("El formato de "+volantesCtrl.resultado+" es incorrecto"):$("#divError").html("Falta llenar el campo "+volantesCtrl.resultado),void(volantesCtrl.muestraDivError=!0);volantesCtrl.muestraDivError=!1;var plantillaFinalPromo=$("#tempPromocion").text();plantillaFinalPromo.trim().length>0&&null!=plantillaFinalPromo&&(volantesCtrl.plantillaPromo=plantillaFinalPromo);var volante={nombrePromo:$("#nombrePromo").val(),descPromo:$("#descPromo").val(),datepickerPromo:volantesCtrl.modfechaVigencia,base64Imagen:"",redimir:$(".radioPromo:checked").val(),infoadiPromo:$("#infoadiPromo").val(),plantillaPromo:volantesCtrl.plantillaPromo,idPromocion:$("#idPromocion").text(),empresa:$("#nombreEmpresaPromo").val(),nombreVolante:"SI"==volantesCtrl.planPro?$("#txtNombreVolante").val():""};VolanteService.actualizarVolante(volante,volantesCtrl.eventoPromocion),guardarContactos()},volantesCtrl.verPromoActiva=function(){volantesCtrl.urlPromo=$("#urlPromocion").text(),volantesCtrl.urlPromo.trim().length>0&&null!=volantesCtrl.urlPromo&&window.open(volantesCtrl.urlPromo,"_blank")},volantesCtrl.compartirPromo=function(){$scope.urlPromoShare=$("#urlPromocion").text();var lWhatsapp="javascript:alert('Esta acción no se puede completar en este dispositivo')",lFace="http://www.facebook.com/sharer/sharer.php?u="+$scope.urlPromoShare+"&t=Checa%20esta%20promo%20",lGoogle="https://plus.google.com/share?url="+$scope.urlPromoShare,lEmail="mailto:?subject="+$scope.urlPromoShare+"%20Checa%20esta%20promo!&body=Checa%20esta%20promo:%20"+$scope.urlPromoShare+"%0A%0ACrea%20un%20volante%20digital%20asi%20con%20www.infomovil.com%0A%0A",lTwitt="http://www.twitter.com/intent/tweet?text="+$scope.urlPromoShare+"%20%0A%0ACheca%20esta%20promo:%20"+$scope.urlPromoShare;if(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i))var lWhatsapp="whatsapp://send?text=Checa%20esta%20promo:%20"+$scope.urlPromoShare;$("#Facebook").attr("href",lFace),$("#Google").attr("href",lGoogle),$("#Email").attr("href",lEmail),$("#Twitter").attr("href",lTwitt),$("#WhatsApp").attr("href",lWhatsapp),$("#myModalPromoShare").modal()},volantesCtrl.imprimirPromo=function(){volantesCtrl.mensaje="Obteniendo volante...",MensajesService.abrirBlockUIGeneral(volantesCtrl.mensaje),$("#urlVistaPreviaPromoImprimir").attr("src",$("#urlPromocion").text()+"?vistaPrevia=1");var iframe=document.getElementById("urlVistaPreviaPromoImprimir");iframe.src=iframe.src+(new Date).getTime()+Math.floor(1e6*Math.random()),iframe.src=iframe.src,document.getElementById("urlVistaPreviaPromoImprimir").onload=function(){$.unblockUI(),$("#myModalPromoImprimir").modal()}},volantesCtrl.validarCampos=function(){var regexFecha=new RegExp(/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g),regexTel=new RegExp("^\\d{10}$"),regexEmail=new RegExp("^[_a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$"),regExpNombreVolante=new RegExp("^\\w{0,30}$"),$nom=$("#nombrePromo").val().trim(),$desc=$("#descPromo").val().trim(),$dp=volantesCtrl.modfechaVigencia,$rp=$(".radioPromo:checked").val(),$tV=$("#telContactoVolante").val(),$cV=$("#celContactoVolante").val(),$eCV=$("#emailContactoVolante").val(),nombreVolante=$("#txtNombreVolante").val().trim(),$fV=$(".md-datepicker-input").val(),bolFecha=regexFecha.test($fV);return!volantesCtrl.muestraPromoPublicada&&"SI"==volantesCtrl.planPro&&nombreVolante.length>0&&!regExpNombreVolante.test(nombreVolante)?"El nombre del volante no debe ser mayor a 30 caracteres ni debe contener caracteres especiales ni espacios en blanco":$nom.length<=0?"Falta llenar el campo nombre de la promoción":$desc.length<=0?"Falta llenar el campo descripción de la promoción":$dp.length<=0?"Falta llenar el campo vigencia de la promoción":$rp.length<=0?"Falta llenar el campo cómo redimir":$tV.length>0&&!regexTel.test($tV)?"teléfono":$cV.length>0&&!regexTel.test($cV)?"celular":$eCV.length>0&&!regexEmail.test($eCV)?"email":bolFecha?"datosCompletos":"fecha"},$scope.$watch(function(){return VolanteService.volantes()},function(value){if(volantesCtrl.volantes=value,volantesCtrl.arr=value instanceof Array?value:[value],volantesCtrl.arr.length>0&&void 0!=VolanteService.getTotVolantes()&&(volantesCtrl.muestraPublicarPromo=!1,volantesCtrl.muestraPromoPublicada=!0,void 0!=volantesCtrl.arr[0])){volantesCtrl.modfechaVigencia=volantesCtrl.arr[0].endDateOffer;var fechaVigencia=$moment(volantesCtrl.arr[0].endDateOffer,"DD/MM/YYYY");volantesCtrl.fechaVigencia=fechaVigencia.toDate(),$("#txtNombreVolante").val(volantesCtrl.arr[0].pagina)}}),VolanteService.getVolantes();var upsertContactoVolantes=function(contacto){var url=contactos.saveUrl;$http({method:"POST",url:url,data:contacto,async:!0}).then(function(response){requestServer("GET",contextPath+"/infomovil/refrescarPromocion",{})},function(response){})},getContactoTel=function(){var valContacto=0;$("#idTelContactoVolante").text()>0&&(valContacto=$("#idTelContactoVolante").text());var offerID=VolanteService.getOfferId(),contacto={contactoId:valContacto,offerId:offerID.offerId,descripcion:"",orderNaptr:0,preference:0,contenido:$("#telContactoVolante").val(),codigoPais:"+52",services:"E2U+voice:tel",tipoContacto:"tel:",activo:1,ultimaModificacion:"",usuarioModifico:"",hashUser:hashUsuario()};return contacto},getContactoCel=function(){var valContacto=0;$("#idCelContactoVolante").text()>0&&(valContacto=$("#idCelContactoVolante").text());var offerID=VolanteService.getOfferId(),contacto={contactoId:valContacto,offerId:offerID.offerId,descripcion:"",orderNaptr:0,preference:1,contenido:$("#celContactoVolante").val(),codigoPais:"+52 1",services:"E2U+voice:tel+x-mobile",tipoContacto:"tel:",activo:1,ultimaModificacion:"",usuarioModifico:"",hashUser:hashUsuario()};return contacto},getContactoEmail=function(){var valContacto=0;$("#idEmailContactoVolante").text()>0&&(valContacto=$("#idEmailContactoVolante").text());var offerID=VolanteService.getOfferId(),contacto={contactoId:valContacto,offerId:offerID.offerId,descripcion:"",orderNaptr:0,preference:1,contenido:$("#emailContactoVolante").val(),codigoPais:"",services:"E2U+email:mailto",tipoContacto:"mailto:",activo:1,ultimaModificacion:"",usuarioModifico:"",hashUser:hashUsuario()};return contacto},guardarContactos=function(){$("#telContactoVolante").val().length>0?(datosContacto=getContactoTel(),upsertContactoVolantes(datosContacto)):VolanteService.eliminarContactoVolante("tel"),$("#celContactoVolante").val().length>0?(datosContacto=getContactoCel(),upsertContactoVolantes(datosContacto)):VolanteService.eliminarContactoVolante("cel"),$("#emailContactoVolante").val().length>0?(datosContacto=getContactoEmail(),upsertContactoVolantes(datosContacto)):VolanteService.eliminarContactoVolante("email")}});var banderaImprimir=!1;