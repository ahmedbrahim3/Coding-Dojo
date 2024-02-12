<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>

<div class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container">
<div>

			<h1 class="navbar-brand">Welcome ${LogdInUser.userName}</h1>
			<p>loclocolcolocoloco</p>
             </div>
			<div class="collapse navbar-collapse d-flex justify-content-between">
				<ul class="navbar-nav mr-auto">
					
				</ul>
				<div>
				<form action="/logout" method="post"
					class="form-inline my-2 my-lg-0">
					<button class="btn btn-danger my-2 my-sm-0">logout</button>
				</form>
				<a href="/create">
				<button class="btn btn-outline-success">add to my shelf</button>
				</a>
				
	
				</div>
				
			</div>
			
		</div>
		</div>
    

    <div class="container">
        <table class="table table-bordered table-hover">
            <thead class="thead-light">
                <tr>
                    <th>ID</th>
                    <th>title</th>
                    <th>author name</th>
                    <th>Posted By</th>
                </tr>
            </thead>
            <tbody>
                
                    
                    <c:forEach var="book" items="${books}">
                    <tr>
                     <td>${book.id }</td>
                    
                     <td> <a href="/one/${book.id }">${book.title}</a></td>
                     
                        <td>${book.author}</td>
                        <td>${book.postedBy.userName }</td>
                        </tr>
                    </c:forEach>
                       
                    
               
        </table>
    </div>
</body>
</html>
