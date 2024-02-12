package com.book.club.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.book.club.models.Book;


public interface BookRepo extends CrudRepository<Book, Long> {

	List<Book> findAll();

}
