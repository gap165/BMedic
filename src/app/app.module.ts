import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CalendarModule } from 'ion2-calendar';
import { HttpClientModule } from '@angular/common/http';
import { WsBMedicService } from './service/ws-b-medic.service';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Storage } from '@ionic/storage';
import { FormBuilder } from '@angular/forms';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(), 
    AppRoutingModule,  
    IonicStorageModule.forRoot(),
  CalendarModule],
  providers: [
    WsBMedicService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Storage, FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
