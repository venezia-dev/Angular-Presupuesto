import { Component, OnInit } from '@angular/core';
import { Ingreso } from 'src/app/models/Ingreso';
import { IngresoService } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos: Ingreso[]=[];

  constructor(
    private ingresoService: IngresoService
  ) { }

  ngOnInit() {
    this.ingresos = this.ingresoService.ingresos;
  }

  //Eliminar Registro de Ingreso
  deleteRegister(ingreso: Ingreso){
    this.ingresoService.delete(ingreso);
  }

}
