import { Component, OnInit } from '@angular/core';
import { NatalidadService } from '../../Services/NatalidadService';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css'],
  providers:[NatalidadService]
})
export class DonaComponent implements OnInit {

  public doughnutChartLabels:string[] = [
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
 /* public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';*/

  constructor(private n:NatalidadService){}

  items=[];
  doughnutChartData: any;
    /*    doughnutChartLabels:any;*/
    doughnutChartType:string

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

  createGraps(tasas: any[]){

    let data = []
    tasas.map((tasa: any) => {
      data.push(tasa.tasa);
    })
    this.doughnutChartData = [data];
    this.doughnutChartType = 'doughnut';
  }

 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
