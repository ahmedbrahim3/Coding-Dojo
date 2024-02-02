package com.human.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Human {
	
	@GetMapping("/")
	public String index(@RequestParam(value="q", required = false) String query, @RequestParam(value="last", required = false) String last) {
		return "you are "+ query +" "+ last;
	}
	

}
