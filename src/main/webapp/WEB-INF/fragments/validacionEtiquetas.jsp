<script>
	<c:choose> 
		<c:when test="${tipoPublica == 'tel'}">
			$("#publicarTel").css("display", "block");					
		</c:when>
		<c:otherwise>
				$("#publicarRecurso").css("display", "block");			
		</c:otherwise>
	</c:choose>

	<c:choose> 
		<c:when test="${canalUsuario == 'BAZ'}">
			$("#logoBAZ").css("display", "block");
			$("#idRegBAZ").css("display", "block");			
			$("#logoGral").css("display", "none");					
		</c:when>
		<c:otherwise>
			$("#logoBAZ").css("display", "none");
			$("#idRegBAZ").css("display", "none");	
			$("#logoGral").css("display", "block");	
		</c:otherwise>
	</c:choose>

	<c:choose>
		<c:when test="${sitioWeb != 'SIN_PUBLICAR'}">
			$("#urlSitio").css("display", "block");
			$("#descargaApp").css("display", "block");
			$("#publicarTel").css("display", "none");
			$("#publicarRecurso").css("display", "none");
			$(".botonDesPublicar").css("display", "block");		
			$("#masContenido").css("display", "block");
			
			<c:if test="${planPro == 'SI'}">
				$("#idBtnVideo").css("display", "block");
				$("#btnVideoLi").css("display", "block");
				$(".botonDesPublicarVid").css("display", "block");
				$("#imgPlanPro").css("display", "table-row");
			</c:if>
		
		</c:when>
		<c:otherwise>
		
		</c:otherwise>
	</c:choose>	

	<c:if test="${urlVideo != ''}">
		$("#idOpcionVideo").html("Edita tu video");
	</c:if>
	
	<c:if test="${registroExitoso =='SI'}">
		$("#myModalRegistro").modal('show');
	</c:if>
	
	<c:if test="${resultadoPublicacion =='SI'}">
		$("#myModalExito").modal('show');
	</c:if>

	<c:if test="${resultadoPublicacion =='NO'}">
		$("#myModalFallo").modal('show');
	</c:if>

</script>