<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="modal-header">
	<button type="button" class="close textBlack pull-left" data-dismiss="modal" aria-label="Close" id="idClose"><span aria-hidden="true">&times;</span></button> 
    <button type="button" class="btn btn-purple pull-right" onClick="guardarUrlVideo()"><img width="20" height="20" alt="Infomovil" 
    	src="<c:url value="/resources/webapp/images/successWhite.png"/>" /><span class="hidden-xs">Guardar</span>
    </button>
	<div class="pull-right" style="display:inline-block; width:10px; height:20px;"></div>
    <button type="button" class="btn btn-purple pull-right" id="borrarVideo" onClick="borrarVideo()">
    	<img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/trash.png"/>" />
    </button>
</div>
<div class="modal-body">
	<div>
	 	<div id= "primero" style=" display:block; height:100px;">
		    <div style="display:block; height:30px; width:100%;"></div>
		    <div style="display:block; margin:0 auto; width:80%;">Busca tu video: <input type="text" name="fname" id="algo">
				<div class="divider hidden-sm hidden-md hidden-lg"></div>
		    	<input type="button" value="Buscar" id="button" class="btn btn-purple">                      
		    </div>
	    </div><!--Fin del div primero -->
	
        <div id="segundo">
        	<button type="button" id="idRegresar" class="btn btn-purple pull-left">Regresar</button>
            <div class="clear"></div>
            <div style="width:100%; height:10px; display:block"></div>     
            <ul id="lista" style="list-style:none; margin:0 0 0 -30px;"></ul>
        </div><!--Fin del div segundo -->
	
	    <div id="tercero">
	    	<div id="playerVideo">
	        	<iframe src=""  id="playerVideoFrame" style="width:80% !important; height:auto; min-height:200px; display:block; min-width:200px; margin: 0 auto; border:0"></iframe>
	        </div>
	    </div><!--Fin del div tercero -->   
	</div>
    <div class="modal-footer">
		<div class="divider"></div>
	</div>
</div>