<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="modal-content btnsEditor">
	<div class="modal-header">
		<button type="button" class="close textBlack" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
		<p class="modal-title"></p>
	</div>
	<div class="modal-body bgWhite">
		<h2 class="textPurple col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">&iexcl;Felicidades!</h2>
		
		<div  class="textBlack col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center"><p>Tu dominio ha sido renovado</p>
		
		
		<div class="clear"></div>
		<h3>
						<img width="130" height="130"
							alt="Infomovil"
							src="<c:url value="/resources/webapp/images/fa-purchase-bk.png"/>" /> Gracias tu compra</h3>
							
							<span>En breve recibirás un correo con tu ticket de pago</span>
					
	</div>
	
						<a href="<c:url value="/infomovil/editarSitio"></c:url>"
				class="col-xs-12 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 btn btn-default btn-outline navEditor">
				<img width="20" height="20"
							alt="Infomovil"
							src="<c:url value="/resources/webapp/images/fa-pencil.png"/>" />
				<span>Continua editando</span>
			</a>
	<div class="clear divider"></div>
</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-purple text-center col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" data-dismiss="modal">
			<strong>Continuar editando</strong>
		</button>
	</div>
</div>