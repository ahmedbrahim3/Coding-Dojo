package com.daikachi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/daikachi")
public class DaikichiController {
	
	@GetMapping("/travel/{name}")
	public String travel(@PathVariable("name") String name) {
			return "Congrats!you will soon travel to "+name;
	     
	}
	@GetMapping("/lotto/{number}")
	public String lotto(@PathVariable("number") Integer number) {
			if(number %2 ==0) {
				return "you will take a grand journey in the near future";
			}else {
				return "you have enjoyed the fruits of laber but now try to have time with family and friends ";
			}
	     
	}
		
}
