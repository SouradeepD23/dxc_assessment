<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>

<html>
<head>
	<title>Home</title>
</head>
<body>
	<div style="text-align: center">
		Name:	${footballer.playerName} <br>
		Club:	${footballer.clubName} <br>
		Position: ${footballer.position} <br>
		Jersey No.: ${footballer.jerseyNo} <br>
	</div>
</body>
</html>