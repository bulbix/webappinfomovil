<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Infomovil Template</title>
</head>
<body>
	<h1><tiles:getAsString name="titulo"/></h1>
	
	<tiles:insertAttribute name="header" />    
	
	
	
	<tiles:insertAttribute name="footer" /> 
	   
</body>
</html>