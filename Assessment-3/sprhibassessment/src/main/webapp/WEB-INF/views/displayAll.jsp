<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>

<html>
<head>
	<title>Home</title>
</head>
<body>
	<div style="text-align: center">
		<table border="1px">
			<th>
				<td>Name</td>
				<td>Club</td>
				<td>Position</td>
				<td>Jersey Number</td>
			</th>
			<c:forEach items="${footballers}" var="footballer">
				<tr>
					<td>${footballer.playerName}</td>
					<td>${footballer.clubName}</td>
					<td>${footballer.position}</td>
					<td>${footballer.jerseyNo}</td>
				</tr>

			</c:forEach>

		</table>
	</div>
</body>
</html>