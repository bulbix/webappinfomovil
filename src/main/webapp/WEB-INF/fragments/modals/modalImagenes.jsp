<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="modal-header">
<button type="button" class="btn btn-purple pull-right btnsEditor"  id="btnGuardarImagen" onclick="guardarImagenesJQ()" style="margin: 5px 0;"><img width="15" height="15" alt="Infomovil" 
    	src="<c:url value="/resources/webapp/images/successWhite.png"/>" /><span class="hidden-xs"> Guardar</span></button>
<button type="button" class="btn btn-purple pull-right"  id="btnGuardarImagenFB" onclick="guardarImagenesJQF()" style="margin:5px 0;"><img width="15" height="15" alt="Infomovil" 
    	src="<c:url value="/resources/webapp/images/successWhite.png"/>" /><span class="hidden-xs"> Guardar</span></button>
    	
    	
    	
    	
	<button type="button" class="close textBlack pull-left btnsEditor"  aria-label="Close" id="closemyModalImagenes"><span aria-hidden="true"><strong>&times;</strong></span></button>
	
	
    	
    <div class="btn btn-purple pull-right btnsEditor col-xs-12 col-sm-5" id="btnSeleccionaImagen2" style="overflow-x:hidden; margin:5px 0;">
<label class="cabinet" > 
		<input type="file" class="file" accept="image/*" onchange="picChange(event)" id="btnSeleccionaImagen"/><!-- 		<input style="display:inline" type="file" accept="image/*" onClick="validaImg()" onchange="picChange(event)" id="btnSeleccionaImagen"  /> -->
	</label>

	</div>
    	<button type="button" class="btn btn-purple pull-right"  id="regresarSelecImg" style="margin: 5px 0;"><img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/ico_back.png"/>" /> <span class="hidden-xs">Regresar</span></button>
	
    	<button type="button" class="btn btn-blueFB pull-right btnsEditor col-xs-12 col-sm-5"  id="btnAlbumsDeFacebook" style="margin:5px 0;"><img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/ico_facebook.png"/>" /> <span class="hidden-sm">Fotos de Facebook</span></button>
    	<button type="button" id="regresarDeFace" class="btn btn-purple pull-right" ><img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/ico_back.png"/>" /> <span class="hidden-xs">Regresar</span></button>
    	
	

	
		
    	<div class="pull-right spaceBtnsMap"></div>
    	<button type="button" id="regresarDeFotos" class="btn btn-purple pull-right" style="margin:5px 0;"><img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/ico_back.png"/>" /> <span class="hidden-xs">Regresar</span></button>
	
    	
	<button type="button" id="idRegresarAlbum" class="btn btn-purple pull-right" style="margin:5px 0;"><img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/ico_back.png"/>" /> <span class="hidden-xs">Regresar</span></button>
	<div class="pull-right spaceBtnsMap"></div>
	<div class="pull-right spaceBtnsMap"></div>
	
	<!-- <div style="display:block; margin:10px; min-height:100px;"></div>-->
	<div class="pull-left textBlack" style="display:block; margin:12px 10px;" id="msjEligeFotoAlbum"><strong>Elige una foto <span class="hidden-xs">del album</span></strong></div>
	<div class="pull-left textBlack" style="display:none; margin:12px 10px;" id="msjEligeAlbumFoto"><strong>Elige un album <span class="hidden-xs">de fotos</span></strong></div>
	<div class="clear"></div>
</div>

<div class="modal-body">  
	<div id="galeriaVacia">
    	<p class="textBlack text-center" style="display:block; min-height:150px; margin: 50px 0 0 0;"><img width="30" height="30" alt="Infomovil" src="<c:url value="/resources/webapp/images/ico_img-bk.png"/>" />  Ahora agrega imágenes</p>
    </div>
    
    
	<div id="galeriaImagenes" class="mxhModalScroll">
	<div class="col-xs-12"> 
    	<ul id="listaImagenes" class="listNone" style="list-style:none; margin: 0 0 0 -60px;"></ul> 
    	</div>   
    </div>  
    <div id="imgSeleccionadaDeGaleria" class="mxhModalScroll">
    	
    	<div class="col-xs-12"> 
   
    	<div class="col-xs-12 col-sm-3 text-center"><img src=""  class="imgActualizar img-thumbnail" id="fotoDeGaleria" style="max-width:100px; max-height:100px;"/></div>
        <div class="col-xs-12 col-sm-9">
        <label style="display:inline">Nombre: </label> <input type="text" value="" id="actualizarTextoFoto" style="display:inline" ></input>
        </div>
    </div>
</div>
   </div>  
    <div id="facebookDiv" class="mxhModalScroll">
    	<div id="primeroFB">
        	
        	<div style="display: block; padding: 10px 0 0 0;"></div>
            <ul id="albumsList" style="list-style:none; margin: 0 0 0 -60px;"></ul>
        </div><!--Fin del div primero -->
        <div class="clear"></div>
        
        <div id="segundoFB">
            <div id="photosList" ></div>
        </div><!--Fin del div segundo -->
        <div class="clear"></div>
        <div id="terceroFB">
       		
       		<div style="display:block; padding: 10px 0 0 0;"></div>
       		<div class="col-xs-12"> 
            <div class="col-xs-12 col-sm-3 text-left"><img src="" style="max-width:130px; max-height:150px; margin: 0 0 10px 0" id="imgVistaPrevia" class="img-thumbnail"/></div>
           <div class="col-xs-12 col-sm-9">
            
            	<label style="display:inline">Nombre: </label> <input type="text" name="fname" id="nombreDeImgn" maxlength="50"></input> 
          
            </div>
        </div><!--Fin del div tercero -->
	</div>    
	
    
<div class="clear"></div>
</div>

<div class="modal-footer"></div>

