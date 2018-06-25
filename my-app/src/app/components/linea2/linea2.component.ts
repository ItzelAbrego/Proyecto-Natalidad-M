import { Component, OnInit } from '@angular/core';
import { NatalidadService } from '../../Services/NatalidadService';

@Component({
  selector: 'app-linea2',
  templateUrl: './linea2.component.html',
  styleUrls: ['./linea2.component.css'],
   providers:[NatalidadService]
})
export class Linea2Component implements OnInit {
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

  createGraps(nacidos: any[]){
  console.log("entroooo")
    let data1 = []
    nacidos.map((nacido: any) => {
      data1.push(nacido.nacidos);
    })
  
    this.lineChartData= [
 
    {data: data1, label: 'Numero de nacidos'}
    ];
    
  }    


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
