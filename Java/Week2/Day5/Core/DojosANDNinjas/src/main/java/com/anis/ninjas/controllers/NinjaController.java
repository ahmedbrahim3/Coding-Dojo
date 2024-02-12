package com.anis.ninjas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.anis.ninjas.models.Dojo;
import com.anis.ninjas.models.Ninja;
import com.anis.ninjas.services.DojoService;
import com.anis.ninjas.services.NinjaService;

import jakarta.validation.Valid;


@Controller
@RequestMapping("/ninjas")
public class NinjaController {
	@Autowired
	private NinjaService NinServ;
	@Autowired
	private DojoService DojoServ;
	
	@GetMapping("/new")
	public String ninjaForm(@ModelAttribute("ninja") Ninja ninja, Model model) {
		List<Dojo> allDojos = DojoServ.allDojos();
		model.addAttribute("allDojos",allDojos);
		return "ninjas.jsp";
	}
	@PostMapping("/processNinja")
	public String createNinja(@Valid @ModelAttribute("ninja") Ninja ninja,
			BindingResult result) {
		if (result.hasErrors()) {
			return "ninjas.jsp";
		}else {
			Ninja newNinja = NinServ.createNin(ninja);
			return "redirect:/ninjas/new";
		}

	}
}
