package com.books.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.books.models.Book;



public interface BookRepo extends CrudRepository<Book, Long> {
	
	List<Book> findAll();

}
