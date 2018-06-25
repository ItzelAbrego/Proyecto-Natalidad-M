package com.ItzelAbrego.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ItzelAbrego.demo.dao.NatalidadDAO;
import com.ItzelAbrego.demo.entity.Natalidad;

@Service
public class NatalidadService {

	@Autowired
	NatalidadDAO a;
	public 	List<Natalidad> getNatalidad() {
		return a.getNatalidad();
	}
}
