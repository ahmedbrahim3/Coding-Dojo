package com.anis.ninjas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.anis.ninjas.models.Dojo;
import com.anis.ninjas.services.DojoService;
import com.anis.ninjas.services.NinjaService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/dojos")
public class DojoController {
	@Autowired
	private NinjaService NinServ;
	@Autowired
	private DojoService DojoServ;
	
	@GetMapping("/new")
	public String dojoForm(@ModelAttribute("dojo") Dojo dojo) {
		
		return "dojos.jsp";
	}
	@PostMapping("/processDojo")
	public String createDojo(@Valid @ModelAttribute("dojo") Dojo dojo,
			BindingResult result) {
		if (result.hasErrors()) {
			return "dojos.jsp";
		}else {
			Dojo newDojo = DojoServ.createDojo(dojo);
			return "redirect:/dojos/new";
		}
	}
	@GetMapping("/{id}")
	public String ninjaByDojo(@PathVariable Long id,Model model) {
		Dojo saved = DojoServ.findDojoById(id);
		model.addAttribute("dojo", saved);
		return "dash.jsp";
	}
		
}
