import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarcitaPageRoutingModule } from './agendarcita-routing.module';

import { AgendarcitaPage } from './agendarcita.page';

import {CalendarModule} from 'ion2-calendar';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarcitaPageRoutingModule,
    CalendarModule  ,
    ComponentsModule
  ],

  declarations: [AgendarcitaPage]
/*   providers:[{provide: LOCALE_ID, useValue: 'es-ec'}] */
})
export class AgendarcitaPageModule {}
