import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.models';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';





@Component ({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class pendientesPage {
    constructor( public deseosService: DeseosService, 
        private NavCtrl: NavController,
        private AlertCtrl: AlertController ) {
        
    }
  
    agregarLista(){
        
        const alerta = this.AlertCtrl.create({

            title:'Nueva Lista',
            message:'Nombre de la nueva lista',
            inputs:[{
                name:'titulo',
                placeholder:'Nombre de la lista'
            }],
            buttons:[{
                text:'Cancelar'
            },{
                text:'Aceptar',
                handler: data=>{
                    if(data.titulo.length === 0){
                        return;

                    }

                    
         this.NavCtrl.push(AgregarPage,{
             titulo:data.titulo

         })

                    console.log(data)
                }
            }
            
        ]

         

        });
        alerta.present()
    }
   
   
}