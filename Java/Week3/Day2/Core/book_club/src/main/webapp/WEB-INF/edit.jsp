<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- Formatting (dates) -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Title</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/app.js"></script>
<!-- change to match your file/naming structure -->
</head>
<body>
	<div class="container">
		<div class="navbar navbar-expand-lg navbar-light bg-light">
			<h1 class="navbar-brand">Hello ${user.userName }</h1>

			<div class="collapse navbar-collapse d-flex justify-content-between">
				<ul class="navbar-nav mr-auto">
					<li><a href="home" class="btn btn-outline-success">Dashboard</a></li>
				</ul>
				<form action="/logout" method="post"
					class="form-inline my-2 my-lg-0">
					<button class="btn btn-danger my-2 my-sm-0">logout</button>
				</form>

			</div>
		</div>

		<form:form action="/edit/${book.id}" method="put"
			modelAttribute="book">

			<p>
				<form:label path="title">Name</form:label>
				<form:errors path="title" class="text-danger" />
				<form:input class="form-control" path="title" />
			</p>
			<p>
				<form:label path="author">author</form:label>
				<form:errors path="author" class="text-danger" />
				<form:input class="form-control" path="author" />
			</p>

			<p>
				<form:label path="thoughts">thoughts</form:label>
				<form:errors path="thoughts" class="text-danger" />
				<form:textarea class="form-control" path="thoughts" />
			</p>


			<br />
			<input type="submit" value="Submit" class="btn btn-success" />
		</form:form>
	</div>

</body>
</html>