<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="modal-content btnsEditor">
	<div class="modal-header">
		<button type="button" class="close textBlack" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
		<p class="modal-title"></p>
	</div>
	<div class="modal-body">
		<h2 class="textPurple col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">&iexcl;Felicidades!</h2>
		
		<div  class="textBlack col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center"><p>Tu dominio ha sido renovado</p>
		
		
		<div class="clear"></div>
		<h3>
						<img width="100" height="100"
							alt="Infomovil"
							src="<c:url value="/resources/webapp/images/fa-purchase-bk.png"/>" /> Gracias por tu compra</h3>
							
							<span>En breve recibirás un correo con tu ticket de pago</span>
							
							<br/>
							<hr/>
							<span>Puede tardar unos minutos en reflejarse las nuevas fechas de vigencia</span>
					
	</div>
	
						
	<div class="clear divider"></div>
</div>
	<div class="modal-footer">
		<a href="<c:url value="/infomovil/editarSitio"></c:url>" style="color:#fff" type="button" class="btn btn-purple text-center col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" data-dismiss="modal">
			<strong>Continuar editando</strong>
		</a>
	</div>
</div>