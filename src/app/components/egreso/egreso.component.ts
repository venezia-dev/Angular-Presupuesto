import { Component, OnInit, Input } from '@angular/core';
import { Egreso } from 'src/app/models/Egreso';
import { EgresoService } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos: Egreso[]=[];

  @Input() ingresoTotal: number;
  

  constructor(
    private egresoService: EgresoService
  ) { }

  ngOnInit() {
    this.egresos = this.egresoService.egresos;
  }
  //Eliminar Egresos
  deleteRegister(egreso: Egreso){
    this.egresoService.delete(egreso);
  }
  //Calcular Porcentaje del Ingreso Total
  calcPorcentaje(egreso:Egreso){
    return egreso.value/this.ingresoTotal;
  }

}
