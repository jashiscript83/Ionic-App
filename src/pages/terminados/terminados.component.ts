import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.models';





@Component ({
    selector: 'page-terminados',
    templateUrl: 'terminados.component.html'
})
export class terminadosPage {
    constructor( public deseosService: DeseosService) {
        
    }
    listaSeleccionada(Lista: Lista){
        console.log(Lista)
    }
   
}