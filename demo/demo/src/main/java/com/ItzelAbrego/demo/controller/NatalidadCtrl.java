package com.ItzelAbrego.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ItzelAbrego.demo.entity.Natalidad;
import com.ItzelAbrego.demo.service.NatalidadService;

@RestController
public class NatalidadCtrl {

	@Autowired
	NatalidadService a;
	
	@RequestMapping("/natalidad")
	public List<Natalidad> getNatalidad() {
		return a.getNatalidad();
	}
}
