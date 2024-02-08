package com.books.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.books.models.Book;
import com.books.repositories.BookRepo;


@Service
public class BookServices {			
	
	@Autowired
	private BookRepo bookRepo;
	
	public List<Book> allBooks(){
		return bookRepo.findAll();
	}
	
	
	
	public Book findBookById(Long id) {
		Optional<Book> maybeBook= bookRepo.findById(id);
		if(maybeBook.isPresent()) {
			return maybeBook.get();
			
		}
		else {
		return null ;
	}

}
}
