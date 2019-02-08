import { Component } from '@angular/core';



import { pendientesPage } from '../pendientes/pendientes.component';
import { terminadosPage } from '../terminados/terminados.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = pendientesPage;
  tab2Root = terminadosPage;


  constructor() {

  }
}
