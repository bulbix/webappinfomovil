<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<nav class="navbar navbar-inverse navbar-static-top">
      <div class="container">
    <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> 
          	<span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> 
          </button>
          <a class="navbar-brand" href="http://infomovil.com">
          	<span><img src="resources/webapp/images/apple-touch-icon-57x57.png" width="50" height="50" alt="Infomovil" class="animated fadeIn"/> </span><span class="marLeft animated fadeIn">Infomovil</span></a> 
    </div>
    <div id="navbar" class="navbar-collapse collapse text-right">
          <ul class="nav navbar-nav navbar-right">
        <li><a href="http://infomovil.com" class="smoothScroll">Inicio </a> </li>
        <li> <a href="<c:url value="/registrar"/>" class="smoothScroll">¿Aún no tienes cuenta? <span style="text-decoration:underline">Regístrate</span></a></li>
        <li> <a href="" onclick="cambiarIdioma()">English <img src="resources/webapp/images/fa-lang.png" width="20" height="20" alt="Infomovil" class="animated fadeIn"/></a></li>
        <!-- <li><a href="<c:url value="/login"/>" class="smoothScroll">Inicia sesión</a></li> -->
      </ul>
    </div>
  </div>
</nav>