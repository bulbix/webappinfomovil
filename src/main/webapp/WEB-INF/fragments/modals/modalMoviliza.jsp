<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="modal-content btnsEditor">
	<div class="modal-header">
		<button type="button" class="close textBlack" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
		<p class="modal-title textBlack"><strong>Moviliza tu sitio:</strong> la forma más fácil de cumplir con las nuevas exigencias del buscador de Google.</p>
	</div>
	<div class="modal-body bgWhite ">
	<div class="col-xs-12">
 
		<div class="divider"></div>
					
		<span class="textBlack _1_1em">Google ahora te penaliza si tu sitio web no se ve bien en móviles. Con Moviliza tu sitio, puedes cumplir facilmente con este nuevo requerimiento sin tener que cambiar tu sitio web actual.</span>
		<br/>
		<p class="textPurple"><strong>¿Cómo funciona?</strong></p> 
		<br/>
		<img alt="Moviliza tu sitio" src="<c:url value="/resources/webapp/images/moviliza2.png"/>"  style="margin: 0px; padding: 0px; max-width: 550px; width:100%;" title="Moviliza tu sitio" />
		<br/>		
		
		<div class="clear"></div><br/>
		<div class="clear"></div><br/>
		<span class="textBlack"><strong class="text-center">Este servicio requiere que tengas una suscripción vigente al Plan Pro.</strong></span>
		<span id="tienePlanProNota" class="textPurple"><strong class="text-center">¡Adquiérelo ya!</strong></span>

	</div>	
	
		<div class="clear divider"></div>
	</div>
	<div class="modal-footer textBlack">
		<button type="button" id="modalMovilizaPP" class="btn btn-purple text-center col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" data-toggle="modal">
			<strong>¿Quieres continuar?</strong>
		</button>
	</div>
</div>