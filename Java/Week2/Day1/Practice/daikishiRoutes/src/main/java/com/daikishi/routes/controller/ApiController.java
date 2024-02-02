package com.daikishi.routes.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")
public class ApiController {
	
	@GetMapping("/")
	public String Home() {
		return "Welcome";
	}	
	
	@GetMapping("/today")
	public String Today() {
		return "Today 7alla m3aak";
	}	
	@GetMapping("/tomorrow")
	public String Tomorrow() {
		return "Tomorrow and forsta 7el mo5ek maneha";
	}	


}
