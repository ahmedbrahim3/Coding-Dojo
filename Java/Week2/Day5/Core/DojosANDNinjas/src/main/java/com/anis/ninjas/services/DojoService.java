package com.anis.ninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.anis.ninjas.models.Dojo;
import com.anis.ninjas.repositories.DojoRepository;

@Service
public class DojoService {
	@Autowired
	private DojoRepository dojoRepo;
	
	public List<Dojo> allDojos(){
		return dojoRepo.findAll();
	}
	
	// CREATE
	public Dojo createDojo(Dojo d) {
		return dojoRepo.save(d);
	}
	
	
	// READ ONE
	public Dojo findDojoById(Long id) {
		Optional<Dojo> maybeDojo = dojoRepo.findById(id);
		if(maybeDojo.isPresent()) {
			return maybeDojo.get();
		}else {
			return null;
		}
	}
}
