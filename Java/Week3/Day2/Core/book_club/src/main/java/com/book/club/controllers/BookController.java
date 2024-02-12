package com.book.club.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.book.club.models.Book;
import com.book.club.models.User;
import com.book.club.services.BookServ;
import com.book.club.services.UserServ;


import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class BookController {
	@Autowired
	private BookServ BookServ ;
	@Autowired
	private UserServ userServ;
	
	@GetMapping("/create")
	public String create(@ModelAttribute("book") Book newRecipe, BindingResult result, HttpSession session,
			Model model) {
		Long id = (Long) session.getAttribute("user_id");
		if (id == null) {
			// if the user is not logged in we should redirect him to the landing page
			return "redirect:/";
		} else {
			// get the logged in user
			User loggedinUser = userServ.findOne(id);
			model.addAttribute("user", loggedinUser);
			return "create.jsp";
		}
	}
	@PostMapping("/create")
	public String create(@ModelAttribute("book") Book newBook, BindingResult result, HttpSession session) {
		if (result.hasErrors()) {
			return "create.jsp";
		} else {
			Long id = (Long) session.getAttribute("user_id");
			User loggedinUser = userServ.findOne(id);
			newBook.setPostedBy(loggedinUser);
			BookServ.create(newBook);
			return "redirect:/home";
		}
	}
	
	@GetMapping("/one/{id}")
	public String showOne(@PathVariable("id") Long id, HttpSession session, Model model) {
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			// if the user is not logged in we should redirect him to the landing page
			return "redirect:/";
		} else {
			// get the logged in user
			User loggedinUser = userServ.findOne(userId);
			model.addAttribute("user", loggedinUser);

			Book book = BookServ.findOne(id);
			model.addAttribute("book", book);
			return "one.jsp";
		}
	}


	@DeleteMapping("/book/delete/{id}")
	public String delete(@PathVariable("id") Long id) {
		BookServ.delete(id);
		return "redirect:/home";
	}

	@GetMapping("/book/{id}/edit")
	public String update(@PathVariable("id") Long id, HttpSession session, Model model) {
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			// if the user is not logged in we should redirect him to the landing page
			return "redirect:/";
		} else {
			// get the logged in user
			User loggedinUser = userServ.findOne(userId);
			model.addAttribute("user", loggedinUser);
			Book book = BookServ.findOne(id);
			model.addAttribute("book", book);
			return "edit.jsp";
		}
	}
	@PutMapping("/edit/{id}")
	public String edit(@Valid @ModelAttribute("book") Book book, BindingResult result,
			@PathVariable("id") Long id) {
		if(result.hasErrors()) {
			return "edit.jsp";
		}else {
			Book oldBook = BookServ.findOne(id);
			book.setPostedBy(oldBook.getPostedBy());
			BookServ.update(book);
			return "redirect:/home";
		}
	}
}
