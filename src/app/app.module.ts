import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { pendientesPage } from '../pages/pendientes/pendientes.component';
import { terminadosPage } from '../pages/terminados/terminados.component';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { listasComponent } from '../components/listas.component';
import { DeseosService } from '../services/deseos.service';

import { FiltroCompletadoPipe } from '../pipes/filtro-completado/filtro-completado';




@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    pendientesPage,
    terminadosPage,
    AgregarPage,
    FiltroCompletadoPipe,
    listasComponent

 

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    pendientesPage,
    terminadosPage,
    AgregarPage
 

    
  ],
  providers: [
    DeseosService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
