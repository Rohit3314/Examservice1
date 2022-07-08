package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Exammodel;
import com.demo.repository.Examinterface;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class Examcontroller 
{

	@Autowired
	private Examinterface einterface;
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("insert")
	public Exammodel insert(@RequestBody Exammodel em)
	{
		return this.einterface.save(em);
	}
    
	@CrossOrigin(origins="http://localhost:4200")
    @GetMapping("view")
	public List<Exammodel> view()
	{
		return einterface.findAll();
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("update")
	public Exammodel update(@RequestBody Exammodel em)
	{
	    return einterface.save(em);	
	}
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("delete")
	public void  delete(@RequestBody Exammodel em)
	{
		this.einterface.delete(em);
	}
	
	
	
}
