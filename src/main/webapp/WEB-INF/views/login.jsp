<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%
	String path = request.getContextPath();
%>


<html>
<meta name="viewport"
	content="width=device-width,initial-scale=1, maximum-scale=1" />
<head>
<title>Login WebAppInfomovil</title>
</head>

<c:if test="${not empty error}">
			<div class="errorblock">
				${sessionScope["SPRING_SECURITY_LAST_EXCEPTION"].message}</div>
			</c:if>

<body onload='document.f.j_username.focus();'>

	<form name='f' action="<c:url value='j_spring_security_check' />"
		method='POST'>


		<input type=text name='j_username' value='' class="inputForm"
			placeholder="Usuario">
		
		<input type=password name='j_password'
			value='' class="inputForm" placeholder="Password"
			style="margin-top: 2%; margin-bottom: 3%;">

		<div id="lower" style="background: none; box-shadow: none;">
			<input type="submit" value="Entrar" id="inputButton"
				class="inputButton">
		</div>

	</form>
</body>
</html>
