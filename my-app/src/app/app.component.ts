import { Component, OnInit } from '@angular/core';
import { NatalidadService } from './Services/NatalidadService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NatalidadService]
})
export class AppComponent implements OnInit{
  title = 'app';
  items=[];

  columns =  ["id", "año", "nacidos", "hombres", "mujeres", "tasa", "indice"]

  constructor(private n:NatalidadService){}

	ngOnInit(){
		this.ejemplo();
	}

  ejemplo(){
  	this.n.getNatalidad().subscribe((natalidades:any) => {
            console.log(natalidades);
            this.items = natalidades;

            })
  }

  /*a(){
  	console.log(this.items);
  	this.items.forEach(a => console.log(a.año))
  }*/
  
}
