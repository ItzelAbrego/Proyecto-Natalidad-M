import { Component, OnInit } from '@angular/core';
import { NatalidadService } from '../../Services/NatalidadService';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css'],
  providers:[NatalidadService]
})

export class BarrasComponent implements OnInit {

public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public barChartLabels:string[] = [
  '1990',
  '1991',
  '1992',
  '1993',
  '1994',
  '1995',
  '1996',
  '1997',
  '1998',
  '1999',
  '2000',
  '2001',
  '2002',
  '2003',
  '2004',
  '2005',
  '2006',
  '2007',
  '2008',
  '2009',
  '2010',
  '2011'];
  
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 

  /*public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];*/

  
  constructor(private n:NatalidadService){}

  items=[];
  barChartData:any[];

  

  ngOnInit(){
    this.ejemplo();
  }

  ejemplo(){
    this.n.getNatalidad().subscribe((natalidades:any) => {
            console.log(natalidades);
            this.items = natalidades;
             this.createGraps(natalidades);
            })
  }

  createGraps(hm: any[]){
  console.log("entroooo")
    let data1 = []
    hm.map((n: any) => {
      data1.push(n.hombres);
    })
    let data2=[]
    hm.map((n: any) => {
      data2.push(n.mujeres);
    })

    this.barChartData= [
 
    {data: data2, label: 'Mujeres'},
    {data: data1, label: 'Hombres'}
    ];
    
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
   


}
