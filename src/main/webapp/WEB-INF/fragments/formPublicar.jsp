<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<div id="publicarSitio"> 
	<div class="bgDobleBlack "></div>
	<section class="bgFondo publicar btnsEditor">
		<div class="container whiteBg">
			<div class="row">
				<h3 class=" text-center textBlack ">&iexcl;Ponle un nombre a tu p&aacute;gina web! </h3> 
				<span class="col-xs-12 text-center textBlack"><strong><tiles:getAsString name="urlEjemploSitio"/></strong></span>
				
				<div id="divTel" class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" style=<tiles:getAsString name="visibleTel"/>>
					<div class="divider"></div>
					<div class="form-group">
						<label class="sr-only" for="exampleInputAmount">www.</label>
						<div class="input-group">
							<div class="input-group-addon">www.</div>
							<input type="text" style="text-transform:lowercase;" class="form-control textBlack text-center"
								id="nombreDominioBusqueda" name="nombreDominioBusqueda"
								placeholder="Nombra tu sitio" maxlength="30" autocomplete="off"/>
							<div class="input-group-addon">.tel</div>
						</div>
						<input type="hidden" id="tipoDominioBusqueda"
							name="tipoDominioBusqueda" value="tel" /> <input type="hidden"
							id="idCatTipoRecursoBusqueda" name="idCatTipoRecursoBusqueda"
							value="1" />
					</div>
					<div class="col-xs-12 col-sm-6">
						<div class="divider hidden-sm hidden-md hidden-lg"></div>
					</div>
				    <div class="col-xs-12 text-center textWhite" style="display:none" id="validacionNombre">
						<img src="<c:url value="/resources/webapp/images/fa-warning.png"/>" width="20" height="20" alt="Alerta" />
					</div>
					<div
						class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
						<div class="divider"></div>
						<input type="submit" value="Publicar" id="btnPublicarTel"
							class="btn btn-default btn-outline col-xs-12 text-center textWhite"
							style="display: none;"> <input type="button"
							value="Buscar nombre" id="btnBuscarTel"
							class="btn btn-default btn-outline col-xs-12 text-center textBlack"
							onClick="validaDominio('tel')">
						<div class="clear"></div>
						<div class="divider"></div>
					</div>
				</div>
				
				
				  <div id="divRecurso" class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12" style=<tiles:getAsString name="visibleRecurso"/>>
		        
		        <div class="col-xs-12 col-sm-12 text-center textBlack" >
		        <a href=""  data-toggle="modal" data-target="#myModalRecAyuda" class="textBlack"> <strong>Ver tips</strong> <img src="<c:url value="/resources/webapp/images/help.png"/>" width="25" height="25" alt=""/></a> 
					<br/>
					
					
					<strong><span>www.infomovil.com/</span><span id="idCatTipoRecAutocompleta" style="text-transform:lowercase">mi-pagina</span></strong>  
		           </div>

		          <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
		            <div class="divider "></div>
		            <input type="text" placeholder="Nombra tu sitio" maxlength="30" id="nombreDominioRec" name="nombreDominioRec" class="form-control text-center lowCase" autocomplete="off" >
		            <input type="hidden" id="tipoDominioRec" name="tipoDominioRec" value="recurso"/>
		          </div>
		          <div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
		            <div class="col-xs-12 text-center textBlack" style="display:none" id="validacionNombreRec">
						<img src="<c:url value="/resources/webapp/images/fa-warning.png"/>" width="20" height="20" alt="Alerta" />
					</div>
					<div class="clear"></div>
		            <div class="divider"></div>
					 
		          
		            <input type="button" value="Buscar nombre" id="btnBuscarTel" class="btn btn-default btn-outlineGreen col-xs-12 text-center textWhite" onClick="validaDominio('recurso')">
		            <div class="clear"></div>
		            <div class="divider"></div>
		            
		          </div>
		          
		        </div>
		        
<!-- 				<span class="col-xs-12 text-center textBlack"><strong>Se recomienda usar nombres cortos y fáciles de recordar</strong></span> -->
<!-- 				<span class="col-xs-12 text-center textBlack"><strong>Sin acentos y sin espacios</strong></span> -->
     			
     			
			</div>
			
		</div>
		
	</section>
</div>