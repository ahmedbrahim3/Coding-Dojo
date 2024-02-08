<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Beautiful Bootstrap Table</title>
<!-- Bootstrap CSS -->
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container">
    <h1>Books Information</h1>

      <table class="table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Language</th>
                <th>Pages</th>
            </tr>
        </thead>
        <tbody>
            <!-- Example data. You should replace this with actual data -->
            <c:forEach items="${allBooks }" var="oneBook">
            <tr>
                <td> <a href="/books/${oneBook.id }">${oneBook.title}</a> </td>
                <td>${oneBook.language}</td>
                <td>${oneBook.pages}</td>
            </tr>
            </c:forEach>
            
           
            <!-- Add more rows as needed -->
        </tbody>
    </table>
</div>

<!-- Bootstrap JS (optional) -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
</body>
</html>
