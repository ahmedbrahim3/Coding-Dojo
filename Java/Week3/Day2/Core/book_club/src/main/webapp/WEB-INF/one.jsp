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
					<li><a href="/home" class="btn btn-outline-success">Dashboard</a>
					</li>
				</ul>
				<form action="/logout" method="post"
					class="form-inline my-2 my-lg-0">
					<button class="btn btn-danger my-2 my-sm-0">logout</button>
				</form>

			</div>
		</div>
		<div class="d-flex">
			<img alt="${recipe.name }" src="${recipe.path }" class="m-5">
			<div class="mt-5">
				<h3>Title: ${book.title }</h3>
				<h5 style="color: #28A745">Posted By:
					${book.postedBy.userName }</h5>
				<p>Description: ${book.thoughts }</p>
			</div>
		</div>
		<hr>

		<div class="collapse navbar-collapse d-flex justify-content-between">
			<c:if test="${user.id == book.postedBy.id}">
				<a href="/book/${book.id}/edit" class="btn btn-outline-primary">Edit</a>
				<form action="/book/delete/${book.id}" method="post">
					<input type="hidden" name="_method" value="delete"> <input
						type="submit" value="Delete" class="btn btn-outline-danger">
				</form>
			</c:if>
		</div>
	</div>
</body>
</html>