<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="modal-header">
	<button type="button" class="close textBlack pull-right btnsEditor " data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> 
  <p class="modal-title textPurple" ><strong>Confirmación de compra</strong></p>
</div>
<div class="modal-body bgWhite">

	<div class="col-xs-12">
	
	<p style="color:#2fa399">Datos del contacto administrativo</p>
	<form class="form-horizontal">
	<div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label text-left">Correo</label>
    <div class="col-xs-12 col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" placeholder="" value="" id="nombreUser" disabled="disabled"/>
    </div>           
  </div>
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label text-left">Nombre</label>
    <div class="col-xs-12 col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" placeholder="" value="" id="nombreUser"/>
    </div>           
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label text-left">Dirección</label>
    <div class="col-xs-12  col-sm-10">
      <input type="text" class="form-control" id="inputPassword3" placeholder="" id="direccionUser">
    </div>
  </div>
 
  
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label text-left">País</label>
    <div class="col-xs-12  col-sm-10">
     <select><option>México</option></select>
    </div>
  </div>

  <div class="dividerSmall"></div>
  <hr/>
  <p style="color:#2fa399">Renovación de dominio </p>

  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label text-left">Dominio</label>
    <div class="col-xs-12 col-sm-10">
       <label class="col-sm-2 control-label text-left" style="font-weight:300;">${sitioWeb}</label> 
    </div>
  </div>
 <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label text-left">Duración</label>
    <div class="col-xs-12 col-sm-10">
      <label class="col-sm-10 control-label text-left" style="font-weight:300;">12 meses</label> 
    </div>
  </div>
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label text-left">Costo</label>
    <div class="col-xs-12 col-sm-10">
    <label class="col-sm-10 control-label text-left" style="font-weight:300;">$600.00mxn</label> 
      
    </div>
  </div>
  <div></div>
  <div></div>
  
  <div class="form-group">
    <div class="col-xs-12">

      <button type="submit" class="btn btn-outline pull-right"> <img  alt="Infomovil"
					src="<c:url value="/resources/webapp/images/btn_buyPayPayl.gif"/>" /></button>

    </div>
  </div>
</form>
	
	</div>
	
</div>
<div class="modal-footer"></div>