<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<footer class="footer bgBlack">
      <section class="">
    <div class="container">
          <div class="row" >
       <div class="dividerSmall"></div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-md-offset-4"> 
        
        
        <img src="<c:url value="/resources/webapp/images/logo_infomovil.png"/>" alt="Infomovil" class="img-responsive imgLog" /> 
  
            </div>
      </div>
      <div class="dividerSmall"></div>
       <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3 ">
              <p class="text-small txtWhite reset text-center"><em>Ayudando a construir una economía digital.</em></p>
            </div>
            <div class="clear"></div>
          <div class="dividerSmall"></div>
          <div class="col-xs-12 col-sm-12">
        <p  class="text-center text-small reset">Consulta las <a href="#" title="Condiciones del servicio" data-toggle="modal" data-target="#myModalTerminos">condiciones del servicio </a>y las <a href="#" data-toggle="modal" data-target="#myModalAviso">pol&iacute;ticas de privacidad</a> de Infomovil.</p>
      </div>
      <div class="clear"></div>
          <div class="dividerSmall"></div>
        </div>
  </section>
    </footer>
<!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
<div class="scroll-top page-scroll visible-xs visble-sm"> <a class="btn" href="#page-top"> 
<img src="<c:url value="/resources/webapp/images/fa-chevron-up.png"/>" width="15" height="15" alt="Alerta" /> Subir</a> </div>

<!--/Footer-->

 <tiles:insertDefinition name="modalTerminos">
	<tiles:putAttribute name="tituloModal" value="Condiciones del servicio"/>
	<tiles:putAttribute name="idModal" value="myModalTerminos"/>
	<tiles:putAttribute name="urlSrc" value="http://www.infomovil.com/pages/legal/terminos.html"/>
</tiles:insertDefinition>

 <tiles:insertDefinition name="modalTerminos">
	<tiles:putAttribute name="tituloModal" value="Políticas de privacidad"/>
	<tiles:putAttribute name="idModal" value="myModalAviso"/>
	<tiles:putAttribute name="urlSrc" value="http://www.infomovil.com/pages/legal/aviso.html"/>
</tiles:insertDefinition>