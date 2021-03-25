import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-agendarcita',
  templateUrl: './agendarcita.page.html',
  styleUrls: ['./agendarcita.page.scss'],
})
export class AgendarcitaPage implements OnInit {
  dateRange: { from: string; to: string; };
  type: 'string';
  
  optionsRange: CalendarComponentOptions = {
    monthPickerFormat: ['Ene.','Feb.','Mar.','Abr.','May.','Jun.','Jul.','Ago.','Sep.','Oct.','Nov.','Dic.'],
    monthFormat: 'MMM ,YYYY',
    weekdays: ['Dom','Lun', 'Mar', 'Mir', 'Jue', 'Vie', 'Sab'],
    weekStart: 1,
   

  
  };
  constructor() { }

  ngOnInit() {
  }

}
