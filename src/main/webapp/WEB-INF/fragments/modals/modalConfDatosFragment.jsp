<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="modal-header">
	<button type="button" class="close textBlack pull-right btnsEditor " data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> 
  <p class="modal-title textPurple" ><strong>Confirmación de compra</strong></p>
</div>
<div class="modal-body">

	<div class="col-xs-12">
	

	<p style="color:#2fa399">Datos del contacto administrativo</p>
	  <div id="datosIncompletos" style="color:#f00; font-size:.9em; font-weight:bold; margin:0 0 20px 0;"></div>
	
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label text-left">Nombre</label>
    <div class="col-xs-12 col-sm-10">
      <input type="text" class="form-controlModal" placeholder=""  id="nombreUser"/>
    </div>           
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label text-left">Dirección</label>
    <div class="col-xs-12  col-sm-10">
      <input type="text" class="form-controlModal" id="direccionUser">
    </div>
  </div>

  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label text-left">Correo</label>
    <div class="col-xs-12  col-sm-10">
      <input type="email" class="form-controlModal" id="emailUser" disabled="disabled" value="${correoElectronico}">
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label text-left">País</label>
    <div class="col-xs-12  col-sm-10">
     <select><option>MX</option></select>
    </div>
  </div>
  <div class="dividerSmall"></div>
  <hr/>
  <p style="color:#2fa399">Renovación de dominio</p>

	<form class="">
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label text-left">Dominio</label>
    <div class="col-xs-12 col-sm-10">
       <label class="control-label text-left" style="font-weight:300;">${sessionScope.urlRenovar}</label> 
    </div>
  </div>
 <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label text-left">Duración</label>
    <div class="col-xs-12 col-sm-10">
      <label class="ontrol-label text-left" style="font-weight:300;">12 meses</label> 
    </div>
  </div>
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label text-left">Costo</label>
    <div class="col-xs-12 col-sm-10">
    <label class="control-label text-left" style="font-weight:300;">$199.00 MXN</label> 
      
    </div>
  </div>
  </form>
  <div></div>
  <div></div>
  
  <div class="form-group">
    <div class="col-xs-12">

<%-- 	<form action="${urlPaypal}" method="post" target="_top"> --%>
<!-- 		<input type="hidden" name="cmd" value="_s-xclick"> -->
<!-- 		<input type="hidden" name="hosted_button_id" value="GVM5RUC45WKJS"> -->
<!-- 		<input type="image" src="https://www.sandbox.paypal.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea."> -->
<!-- 		<img alt="" border="0" src="https://www.sandbox.paypal.com/es_XC/i/scr/pixel.gif" width="1" height="1"> -->
<!-- 	</form> -->
	
    <button type="button" class="btn btn-outline pull-right" id="btnPagoPaypal" > 
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