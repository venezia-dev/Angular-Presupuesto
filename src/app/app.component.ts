import { Component } from '@angular/core';
import { Ingreso } from './models/Ingreso';
import { Egreso } from './models/Egreso';
import { IngresoService } from './components/ingreso/ingreso.service';
import { EgresoService } from './components/egreso/egreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-presupuesto';

  ingresos: Ingreso[]=[];
  egresos: Egreso[]=[];

  constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresoService
  ){
    this.ingresos = ingresoService.ingresos;
    this.egresos = egresoService.egresos;
  }

  getIngresoTotal(){
    let ingresoTotal: number = 0;
    this.ingresos.forEach(ingreso => {
     ingresoTotal += ingreso.value;
    });
    return ingresoTotal;
  }


  getEgresoTotal(){
    let egresoTotal: number = 0;
    this.egresos.forEach(egreso => {
     egresoTotal += egreso.value;
    });
    return egresoTotal;
  }

  getPorcentajeTotal(){
    if (this.getIngresoTotal() === 0){
      return 0;
    } else {
      return this.getEgresoTotal()/this.getIngresoTotal();
    }
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
  
}
