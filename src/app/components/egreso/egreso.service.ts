import { Egreso } from '../../models/Egreso';

export class EgresoService {
    egresos: Egreso[] = [
        new Egreso("Impuestos", 2000),
        new Egreso("Ropa", 500)
    ];

    //Funcion de Eliminar por indice
    delete(egreso: Egreso) {
        const index: number = this.egresos.indexOf(egreso);
        this.egresos.splice(index, 1);
    }

    //Funcion Eliminar Todo
    deleteEgresos(){
        const count = this.egresos.length;
        return this.egresos.splice(0,count);
    }
}

