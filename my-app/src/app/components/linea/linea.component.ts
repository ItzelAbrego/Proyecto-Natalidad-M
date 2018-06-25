import { Component, OnInit  } from '@angular/core';
import { NatalidadService } from '../../Services/NatalidadService';

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css'],
  providers:[NatalidadService]
})
export class LineaComponent implements OnInit{
  
  constructor(private n:NatalidadService){}

  items=[];
  lineChartData:any[];

  

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

  createGraps(indices: any[]){
  console.log("entroooo")
    let data1 = []
    indices.map((indice: any) => {
      data1.push(indice.indice);
    })
  
    this.lineChartData= [
 
    {data: data1, label: 'Porcentaje del indice de fertilidad'}
    ];
    
  }    


  /*public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];*/

   public lineChartLabels:Array<any> = [
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

    public lineChartOptions:any = {
    responsive: true
  };

  public lineChartColors:Array<any> = [];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }



}
