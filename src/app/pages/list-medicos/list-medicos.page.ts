import { Component, OnInit } from '@angular/core';
import { WsBMedicService } from '../../service/ws-b-medic.service';

@Component({
  selector: 'app-list-medicos',
  templateUrl: './list-medicos.page.html',
  styleUrls: ['./list-medicos.page.scss'],
})
export class ListMedicosPage implements OnInit {
  listamedicos=[];
  constructor(private webServiceMedica:WsBMedicService) {
  this.webServiceMedica
  .listmedicos()
  .subscribe((success:any) =>
  {
      this.listamedicos=success
   console.log('lista medicos',success); 
  })

}

  ngOnInit() {
  }

}
