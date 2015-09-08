<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<div id=<tiles:getAsString name="idModal"/> class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class=<tiles:getAsString name="tamanioModal"/>>   
    	<div class="modal-content">
    	
	    	<c:set var="fragmentModal" value="${fragmentName}"/>
			<tiles:insertDefinition name="${fragmentName}"></tiles:insertDefinition>
			
   	 	</div>
  	</div>
</div>
