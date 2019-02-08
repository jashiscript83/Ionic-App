import { Component, Input } from '@angular/core';
import { DeseosService } from '../services/deseos.service';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { Lista } from '../models/lista.models';
import { AgregarPage } from '../pages/agregar/agregar.component';



@Component ({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})

export class listasComponent {

    @Input() terminada: boolean = false;
    constructor( public deseosService: DeseosService,
        private NavCtrl : NavController,
        private AlertCtrl: AlertController
        ) {
        
    }
    listaSeleccionada(Lista: Lista){
        console.log(Lista)
        this.NavCtrl.push(AgregarPage,{
            titulo: Lista.titulo,
            lista: Lista
        })
    }

    borrarlista(lista: Lista){
        this.deseosService.borrarlista(lista);

    }
    editar(lista: Lista, slidingItem: ItemSliding){
        slidingItem.close();

        const alerta = this.AlertCtrl.create({

            title:'Editar Lista',
            message:'Editar Nombre de la lista',
            inputs:[{
                name:'titulo',
                placeholder:'Nombre de la lista',
                value: lista.titulo
            }],
            buttons:[{
                text:'Cancelar'
            },{
                text:'Actualizar',
                handler: data=>{
                    if(data.titulo.length === 0){
                        return;

                    }
           lista.titulo =data.titulo;
           this.deseosService.guardarStorage();
        

         }
        }]

                
                
            
            
    });
          
    alerta.present()
        
    }
}