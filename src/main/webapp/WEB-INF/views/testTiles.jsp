<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<c:forEach begin="0" end="9" var="index">
	<tiles:insertDefinition name="headerFragment"/>
</c:forEach>


<tiles:insertDefinition name="infomovilTemplate">	 
	<tiles:putAttribute name="titulo" value="Agregar campaña"/>
</tiles:insertDefinition> 	