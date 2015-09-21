<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="modal-header">
	<button type="button" class="close textBlack pull-right btnsEditor " data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> 
  <p class="modal-title textBlack"><strong>Datos del contacto administrativo</strong></p>
</div>
<div class="modal-body bgWhite">
<div class="divider"></div>
	<div class="container">
	<form class="form-horizontal">
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">Nombre</label>
    <div class="col-xs-12 col-sm-6">
      <input type="text" class="form-control" id="inputEmail3" placeholder="">
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label">Dirección</label>
    <div class="col-xs-12  col-sm-6">
      <input type="text" class="form-control" id="inputPassword3" placeholder="">
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label">Correo</label>
    <div class="col-xs-12  col-sm-6">
      <input type="email" class="form-control" id="inputPassword3" placeholder="">
    </div>
  </div>
  
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label">País</label>
    <div class="col-xs-12  col-sm-6">
     <select><option>México</option></select>
    </div>
  </div>
  <div class="dividerSmall"></div>
  
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-6">
      <button type="submit" class="btn btn-default">Comprar vía PayPal</button>
    </div>
  </div>
</form>
	
	</div>
	
</div>
<div class="modal-footer"></div>