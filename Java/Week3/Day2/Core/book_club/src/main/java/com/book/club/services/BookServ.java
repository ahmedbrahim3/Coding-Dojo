package com.book.club.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.book.club.models.Book;
import com.book.club.repositories.BookRepo;

@Service
public class BookServ {
	
	
	@Autowired
	private BookRepo BookRepo;
	
	public List<Book> allBooks(){
		return BookRepo.findAll();
	}
	
	public Book findOne(Long id) {
		Optional<Book> opBook = BookRepo.findById(id);
		if(opBook.isPresent()) {
			return opBook.get();
		}else {
			return null;
		}
	}
	
	public Book create(Book book) {
		return BookRepo.save(book);
	}
	
	public Book update(Book book) {
		return BookRepo.save(book);
	}
	
	public void delete(Long id) {
		BookRepo.deleteById(id);
	}

}
