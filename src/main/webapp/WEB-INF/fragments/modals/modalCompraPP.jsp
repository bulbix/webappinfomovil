<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="modal-header">
	<button type="button" class="close textBlack pull-right btnsEditor " data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> 
  <p class="modal-title textPurple" ><strong>Confirmación de compra</strong></p>
</div>
<div class="modal-body bgWhite">

	<div class="col-xs-12">
	<div class="divider"></div>

	<form class="">
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label text-left">Producto</label>
    <div class="col-xs-12 col-sm-10">
       <label class="control-label text-left" style="font-weight:300;">Plan Pro</label> 
    </div>
  </div>
 <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label text-left">Duración</label>
    <div class="col-xs-12 col-sm-10">
      <label class="ontrol-label text-left" style="font-weight:300;" id="periodoPP">12 meses</label> 
    </div>
  </div>
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label text-left">Costo</label>
    <div class="col-xs-12 col-sm-10">
    <label class="control-label text-left" style="font-weight:300;" id="precioPP">$40.00 MXN</label> 
    </div>
  </div>
  </form>
  <div></div>
  <div></div>
  
  <div class="form-group">
    <div class="col-xs-12">
	
    <button type="button" class="btn btn-outline pull-right" id="btnPagoPaypalPP" > 
    
    <img
					src="<c:url value="/resources/webapp/images/btn_11.png"/>"
					 alt="Compra con PayPal" /> 
<!--     <img src="https://www.paypalobjects.com/webstatic/es_MX/mktg/logos-buttons/redesign/btn_11.png" alt="undefined" /> -->
    
    </button>

    </div>
  </div>

	
	</div>
	
</div>
<div class="modal-footer"></div>