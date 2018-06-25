import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//graficos
import { ChartsModule } from 'ng2-charts';

import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { LineaComponent } from './components/linea/linea.component';
import { DonaComponent } from './components/dona/dona.component';
import { BarrasComponent } from './components/barras/barras.component';
import { Linea2Component } from './components/linea2/linea2.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    DonaComponent,
    BarrasComponent,
    Linea2Component
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
