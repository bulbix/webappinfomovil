<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<div id="publicarSitio"> 
	<div class="bgDobleBlack "></div>
	<section class="bgFondo publicar btnsEditor">
		<div class="container whiteBg">
			<div class="row">
				<h3 class=" text-center textBlack ">&iexcl;Ponle un nombre a tu p&aacute;gina web! </h3> 
				<a href="" data-toggle="modal" data-target="#myModalRecAyuda" class="textBlack col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 text-center"> 
				<strong>Ver tips</strong> <img src="<c:url value="/resources/webapp/images/help.png"/>" width="25" height="25" alt=""/></a> 
					<br/>
				
				<div id="divTel" class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" style=<tiles:getAsString name="visibleTel"/>>

		        <div class="col-xs-12 col-sm-12 text-center textBlack reset" >			
					
					<strong><span>www.<span id="idCatTipoRecAutocompletaTel" style="text-transform:lowercase">mi-pagina</span>.tel</span></strong>  
		           </div><br/>
		           				
					<div class="divider"></div>		            	
					<div class="form-group">
						<label class="sr-only" for="exampleInputAmount">www.</label>
						<div class="input-group">
							<div class="input-group-addon">www.</div>
							<input type="text" style="text-transform:lowercase;" class="form-control textBlack text-center"
								id="nombreDominioBusqueda" name="nombreDominioBusqueda"
								placeholder="Escribe aqu�" maxlength="30" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Escribe aqu�'" autocomplete="off"/>
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
							value="Busca nombre" id="btnBuscarTel"
							class="btn btn-default btn-outlineGreen col-xs-12 text-center textWhite"
							onClick="validaDominio('tel')">
						<div class="clear"></div>
						<div class="divider"></div>
					</div>
				</div>
				
				
				  <div id="divRecurso" class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12" style=<tiles:getAsString name="visibleRecurso"/>>
		        
		        <div class="col-xs-12 col-sm-12 text-center textBlack reset" >			
					
					<strong><span>www.infomovil.com/</span><span id="idCatTipoRecAutocompleta" style="text-transform:lowercase">mi-pagina</span></strong>  
		           </div>

		          <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
		            <div class="divider "></div>
		            <input type="text" placeholder="Escribe aqu�" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Escribe aqu�'" maxlength="30" 
		            	id="nombreDominioRec" name="nombreDominioRec" class="form-control text-center lowCase" autocomplete="off" />
		            <input type="hidden" id="tipoDominioRec" name="tipoDominioRec" value="recurso"/>
		          </div>
		          <div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
		            <div class="col-xs-12 text-center textBlack" style="display:none" id="validacionNombreRec">
						<img src="<c:url value="/resources/webapp/images/fa-warning.png"/>" width="20" height="20" alt="Alerta" />
					</div>
					<div class="clear"></div>
		            <div class="divider"></div>
					 
		          
		            <input type="button" value="Busca nombre" id="btnBuscarTel" class="btn btn-default btn-outlineGreen col-xs-12 text-center textWhite" onClick="validaDominio('recurso')">
		            <div class="clear"></div>
		            <div class="divider"></div>
		            
		          </div>
		        </div>    			
			</div>
			
		</div>
		
	</section>
</div>

<!-- 		<!--MODAL RECURSO AYUDA--> 
<tiles:insertDefinition name="modalRecAyuda">
	<tiles:putAttribute name="visibleRecurso" value="${ visibleRecurso }"/>
	<tiles:putAttribute name="visibleTel" value="${ visibleTel }"/>
</tiles:insertDefinition>
<!-- 		<!--/MODAL RECURSO AYUDA--> 