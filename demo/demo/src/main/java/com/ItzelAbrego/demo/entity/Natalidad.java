package com.ItzelAbrego.demo.entity;

public class Natalidad {
	
	private int id;
	private int año;
	private int nacidos;
	private int hombres;
	private int mujeres;
	private double tasa;
	private double indice;
	
	
	
	public Natalidad(int id, int año, int nacidos, int hombres, int mujeres, double tasa, double indice) {
		
		this.id = id;
		this.año = año;
		this.nacidos = nacidos;
		this.hombres = hombres;
		this.mujeres = mujeres;
		this.tasa = tasa;
		this.indice = indice;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getAño() {
		return año;
	}
	public void setAño(int año) {
		this.año = año;
	}
	public int getNacidos() {
		return nacidos;
	}
	public void setNacidos(int nacidos) {
		this.nacidos = nacidos;
	}
	public int getHombres() {
		return hombres;
	}
	public void setHombres(int hombres) {
		this.hombres = hombres;
	}
	public int getMujeres() {
		return mujeres;
	}
	public void setMujeres(int mujeres) {
		this.mujeres = mujeres;
	}
	public double getTasa() {
		return tasa;
	}
	public void setTasa(int tasa) {
		this.tasa = tasa;
	}
	public double getIndice() {
		return indice;
	}
	public void setIndice(int indice) {
		this.indice = indice;
	}
	

	
}
