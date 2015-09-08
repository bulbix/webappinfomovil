<!--<div class="modal-header">
	<button type="button" class="close"  aria-label="Close" id="closemyModalImagenes"><span aria-hidden="true">&times;</span></button>
	<input type="file" accept="image/*" onchange="picChange(event)" id="btnSeleccionaImagen"/>
	<button type="button" class="btn btn-default"  id="btnAlbumsDeFacebook">Face</button>
	<button type="button" class="btn btn-default"  id="btnGuardarImagen" onclick="guardarImagenesJQ()">Guardar</button>
</div>

<div class="modal-body">  
	<div id="galeriaVacia">
    	<p align="center">¡Agrega imágenes!</p>
    </div>
	<div id="galeriaImagenes">
    	<ul id="listaImagenes" class="listNone"></ul>    
    </div>    
    <div id="facebookDiv">
    	<div id="primeroFB">
        	<button type="button" id="regresarDeFace">Regresar</button>
            <ul id="albumsList" ></ul>
        </div>
        <div id="segundoFB">
        	<button type="button" id="idRegresarAlbum">Regresar</button>
            <ul id="photosList" ></ul>
        </div>
        <div id="terceroFB">
       		<button type="button" id="regresarDeFotos">Regresar</button>
            <img src="" width="100" height="100" id="imgVistaPrevia"/>
            <form action="">
            	Nombre de la imagen: <input type="text" name="fname" id="nombreDeImgn" maxlength="50"></input><br><br><br>
                <button type="button" class="btn btn-default"  id="btnGuardarImagen" onclick="guardarImagenesJQF()">Guardar</button>
            </form>
        </div>
	</div>    
    <div id="imgSeleccionadaDeGaleria">
    	<button type="button" class="btn btn-default"  id="regresarSelecImg">Regresar</button><br>
        <img src="" width="150" height="150" class="imgActualizar" id="fotoDeGaleria"/>
        <div>Nombre de la imagen:</div>
        <input type="text" value="" id="actualizarTextoFoto"></input>              
    </div>
</div>
-->

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="modal-header">
	<button type="button" class="close textBlack pull-left btnsEditor"  aria-label="Close" id="closemyModalImagenes"><span aria-hidden="true">&times;</span></button>
	<button type="button" class="btn btn-purple pull-right btnsEditor"  id="btnGuardarImagen" onclick="guardarImagenesJQ()"><img width="15" height="15" alt="Infomovil" 
    	src="<c:url value="/resources/webapp/images/successWhite.png"/>" /><span class="hidden-xs"> Guardar</span></button>
	<div class="pull-right spaceBtnsMap"></div>
	<span class="btn btn-purple pull-right btnsEditor" id="btnSeleccionaImagen2"><img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/ico_upload.png"/>" style="display:inline" /><input style="display:inline" type="file" accept="image/*" onchange="picChange(event)" id="btnSeleccionaImagen" /></span>
	<div class="pull-right spaceBtnsMap"></div>
	<button type="button" class="btn btn-blueFB pull-right btnsEditor"  id="btnAlbumsDeFacebook"><img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/ico_facebook.png"/>" /> <span class="hidden-xs">Facebook</span></button>
</div>

<div class="modal-body">  
	<div id="galeriaVacia">
    	<p class="textBlack text-left" style="display:block; min-height:150px; margin: 50px 0 0 0;"><img width="30" height="30" alt="Infomovil" src="<c:url value="/resources/webapp/images/ico_img-bk.png"/>" />  Ahora agrega imágenes</p>
    </div>
    
    
	<div id="galeriaImagenes">
	<div class="col-xs-12"> 
    	<ul id="listaImagenes" class="listNone" style="list-style:none"></ul> 
    	</div>   
    </div>  
    
      
    <div id="facebookDiv">
    	<div id="primeroFB">
        	<button type="button" id="regresarDeFace" class="btn btn-purple">Regresar</button>
            <ul id="albumsList" style="list-style:none;"></ul>
        </div><!--Fin del div primero -->
        <div id="segundoFB">
        	<button type="button" id="idRegresarAlbum" class="btn btn-purple">Regresar</button>
            <ul id="photosList" ></ul>
        </div><!--Fin del div segundo -->
        <div id="terceroFB">
       		<button type="button" id="regresarDeFotos" class="btn btn-purple">Regresar</button>
       		<div class="col-xs-12"> 
            <div class="col-xs-3 text-left"><img src="" style="max-width:100px; max-height:50px;" id="imgVistaPrevia"/></div>
           <div class="col-xs-9">
            <form action="">
            	<label style="display:inline">Nombre: </label> <input type="text" name="fname" id="nombreDeImgn" maxlength="50"></input> <button type="button" class="btn btn-purple"  id="btnGuardarImagen" onclick="guardarImagenesJQF()">Guardar</button>
            </form>
            </div>
        </div><!--Fin del div tercero -->
	</div>    
	
    <div id="imgSeleccionadaDeGaleria">
    	<div style="display:block; margin:10px;"><button type="button" class="btn btn-purple"  id="regresarSelecImg" >Regresar</button></div>
    	<div class="col-xs-12"> 
    	<div class="col-xs-3 text-center"><img src=""  class="imgActualizar" id="fotoDeGaleria" style="max-width:100px; max-height:50px;"/></div>
        <div class="col-xs-9">
        <label style="display:inline">Nombre: </label> <input type="text" value="" id="actualizarTextoFoto" style="display:inline" ></input>
        </div>
    </div>
</div>
<div class="clear"></div>
</div>

<div class="modal-footer"></div>