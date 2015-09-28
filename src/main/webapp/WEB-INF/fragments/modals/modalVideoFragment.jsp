<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="modal-header">
	<button type="button" class="close textBlack pull-left navEditorSFl" data-dismiss="modal" aria-label="Close" id="idClose"><span aria-hidden="true">&times;</span></button> 
    <button type="button" class="btn btn-purple pull-right navEditorSFl" onClick="guardarUrlVideo()"><img width="20" height="20" alt="Infomovil" 
    	src="<c:url value="/resources/webapp/images/successWhite.png"/>" /><span class="hidden-xs">Guardar</span>
    </button>
	<div class="pull-right spaceBtnsMap" ></div>
    <button type="button" class="btn btn-purple pull-right" id="borrarVideo" onClick="borrarVideo()">
    	<img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/trash.png"/>" />
    </button>
</div>
<div class="modal-body navEditorSFl">
	<div>
	 	<div id= "primero" class="blkh100">
		    <div class="blk30100"></div>
		    <div class="blk80p"><strong>Busca tu video: </strong><input type="text" name="fname" id="algo">
				<div class="divider hidden-sm hidden-md hidden-lg"></div>
		    	<input type="button" value="Buscar" id="button" class="btn btn-purple">                      
		    </div>
	    </div><!--Fin del div primero -->
	
        <div id="segundo">
        	<button type="button" id="idRegresar" class="btn btn-purple pull-left">Regresar</button>
            <div class="clear"></div>
            <div class="blk10100"></div>     
            <ul id="lista" class="listNone"></ul>
        </div><!--Fin del div segundo -->
	
	    <div id="tercero">
	    	<div id="playerVideo">
	        	<iframe src=""  id="playerVideoFrame" class="blkVideo"></iframe>
	        </div>
	    </div><!--Fin del div tercero -->   
	</div>
    <div class="modal-footer">
		<div class="divider"></div>
	</div>
</div>