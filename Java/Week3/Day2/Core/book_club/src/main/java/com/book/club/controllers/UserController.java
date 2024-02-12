package com.book.club.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.book.club.models.Book;
import com.book.club.models.LoginUser;
import com.book.club.models.User;
import com.book.club.services.BookServ;
import com.book.club.services.UserServ;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;


@Controller
public class UserController {
	
	
	@Autowired
	private UserServ userService;
    
	
	@Autowired
	private BookServ BookServ ;
	// === Display Route === Login and register forms
	@GetMapping("/")
	public String index(Model model) {

		// Bind empty User and LoginUser objects to the JSP
		// to capture the form input
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
		return "login.jsp";
	}

	// ==== Action Route =	=== Registration
	
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model,
			HttpSession session) {

		// 1. Execute the Service method
		userService.register(newUser, result);
		
		//check the errors and rerender our page
		if (result.hasErrors()) {
			// Be sure to send in the empty LoginUser before
			// re-rendering the page.
			model.addAttribute("newLogin", new LoginUser());						
			return "login.jsp";
		} else {
			//save the user ID in the session to use where ever we want
			System.out.println( newUser.getId());
																
			session.setAttribute("userID", newUser.getId());
			return "redirect:/home";
		}
	}

	// === Action Route === Login ===
	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, BindingResult result, Model model, HttpSession session) {
	    User user = userService.login(newLogin, result);

	    if (result.hasErrors()) {
	        model.addAttribute("newUser", new User());
	        return "login.jsp";
	    } else {
	        // Set the user ID to the session
	    	System.out.println( user.getId());
	    	session.setAttribute("user_id", user.getId());
	        return "redirect:/home";
	    }
	}

	
	@PostMapping("/logout")
	public String logout(HttpSession session) {
		
		session.removeAttribute("userID");
		return "redirect:/";
	}
	
	@GetMapping("/home")
	public String home(Model model,HttpSession session) {
		Long UserId=(Long )session.getAttribute("user_id");
		User LogdInUser= userService.findOne(UserId);
		model.addAttribute("LogdInUser", LogdInUser);
		List <Book> allBooks= BookServ.allBooks();
		model.addAttribute("books", allBooks);
		return "home.jsp";
	}

}
