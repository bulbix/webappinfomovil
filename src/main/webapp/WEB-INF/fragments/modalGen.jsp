<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<div id=<tiles:getAsString name="idModal"/> class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg">
    	<div class="modal-content">
    		<div class="modal-header">
        		<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        		<p class="modal-title" ><tiles:getAsString name="tituloModal"/></p>
      		</div>
	    	<div class="modal-body bgWhite">
	    		<iframe class="legales" src="http://www.infomovil.com/pages/legal/<tiles:getAsString name="nombreArchivo"/>" frameborder="0"></iframe>
	    	</div>
	        <div class="modal-footer">
	        	<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
	      	</div>
        </div>
	</div>
</div>