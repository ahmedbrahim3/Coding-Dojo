package com.anis.books.render.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.anis.books.render.models.Book;
import com.anis.books.render.services.BookService;

@Controller
@RequestMapping("/books")
public class ViewController {

private final BookService bookService;

    public ViewController(BookService bookService){
        this.bookService = bookService;
    }

	@GetMapping("")
	public String getAllBook(Model model){

		List<Book> allBooks = bookService.allBooks();
		model.addAttribute("allBooks",allBooks);
		return "home.jsp";
	}

	@GetMapping("/{id}")
	public String findOneBookById(@PathVariable("id") Long id, Model model) {
		Book selectedBook = bookService.findBook(id);
		model.addAttribute("book",selectedBook);
		return "showOne.jsp";
	}
}