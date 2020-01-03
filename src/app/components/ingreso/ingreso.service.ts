import {Ingreso} from '../../models/Ingreso';

export class IngresoService{
    ingresos: Ingreso[]=[
        new Ingreso("Salario", 3000),
        new Ingreso("Venta de Auto", 7000)
    ];

    //Funcion de Eliminar por indice
    delete(ingreso: Ingreso){
        const index: number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(index, 1);
    }

    //Funcion Eliminar Todo
    deleteIngresos(){
        const count = this.ingresos.length;
        return this.ingresos.splice(0,count);
    }
}

