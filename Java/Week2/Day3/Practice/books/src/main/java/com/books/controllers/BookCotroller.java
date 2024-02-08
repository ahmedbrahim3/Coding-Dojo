package com.books.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.books.models.Book;
import com.books.services.BookServices;





@Controller
@RequestMapping("/books")
public class BookCotroller {

	@Autowired
	private BookServices bookServ;
	
	@GetMapping("")
	public String Home(@ModelAttribute("book") Book book, Model model){
		List <Book> allBooks = bookServ.allBooks();
		model.addAttribute("allBooks",allBooks);
		System.out.println(allBooks);
		return "Home.jsp";
	}
	@GetMapping("/{id}")
	public String findOneBook(@PathVariable("id") Long id,Model model) {
		Book selectedBook= bookServ.findBookById(id);
		model.addAttribute("book", selectedBook);
		return "one.jsp";
	}
		
	

}
