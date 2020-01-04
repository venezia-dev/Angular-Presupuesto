import { Component, OnInit } from '@angular/core';
import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from 'src/app/models/Ingreso';
import { Egreso } from 'src/app/models/Egreso';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  type: string="ingresoOperation";
  description: string;
  value: number;

  constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresoService,
    private toastrService: ToastrService
    ) { }

  ngOnInit() {
  }

  operation(value){
    this.type = value;
  }

  addValue(){
    if(this.type === "ingresoOperation"){
      this.ingresoService.ingresos.push(new Ingreso(this.description, this.value));
      this.toastrService.success('Registro de Ingreso', 'Ingresado!', {
        timeOut: 3000
      });
    } else {
      this.egresoService.egresos.push(new Egreso(this.description, this.value));
      this.toastrService.success('Registro de Egreso', 'Ingresado!', {
        timeOut: 3000
      });
    }
  }

}
