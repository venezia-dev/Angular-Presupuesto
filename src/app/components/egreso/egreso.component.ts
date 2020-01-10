import { Component, OnInit, Input } from '@angular/core';
import { Egreso } from 'src/app/models/Egreso';
import { EgresoService } from './egreso.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos: Egreso[]=[];

  @Input() ingresoTotal: number;

  constructor(
    private egresoService: EgresoService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.egresos = this.egresoService.egresos;
  }
  
  //Eliminar Egresos
  deleteRegister(egreso: Egreso){
    this.egresoService.delete(egreso);
    this.toastrService.error('Registro de Egreso', 'Eliminado!', {
      timeOut: 3000
    });
  }
  //Calcular Porcentaje del Ingreso Total
  calcPorcentaje(egreso:Egreso){
    if (this.ingresoTotal === 0){
      return 0
    } else {
      return egreso.value/this.ingresoTotal;
    }
  }

}
