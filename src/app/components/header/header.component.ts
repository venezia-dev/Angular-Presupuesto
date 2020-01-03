import { Component, OnInit, Input } from '@angular/core';
import { EgresoService } from '../egreso/egreso.service';
import { IngresoService } from '../ingreso/ingreso.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() presupuestoTotal: number;
  @Input() ingresoTotal: number;
  @Input() egresoTotal: number;
  @Input() porcentajeTotal: number;


  constructor(private ingresoService: IngresoService,
    private egresoService: EgresoService) { }

  ngOnInit() {
  }

  resetTotal(){
    this.ingresoService.deleteIngresos();
    this.egresoService.deleteEgresos();
 }

}
