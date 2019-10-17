<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Home</title>
</head>
<body>
	<div style="text-align: center">
		<form>
			<input type="text" name="playerName" placeholder="Enter Player Name"><br>
			<input type="text" name="clubName" placeholder="Enter Club Name"><br>
			<input type="text" name="position" placeholder="Position"><br>
			<input type="text" name="jerseyNo" placeholder="Jersey Number"><br>
			<input type="submit" value="Save Player" formaction="saveBaller"><br>
			<input type="submit" value="View Player" formaction="displayBaller"><br>
			<input type="submit" value="Update Player Profile" formaction="updateBaller"><br>
			<input type="submit" value="Delete Player" formaction="deleteBaller"><br>
		</form>
		<form action="">
			<input type="submit" value="View All Players" formaction="displayAllBallers"><br>
		</form>
	</div>
</body>
</html>
