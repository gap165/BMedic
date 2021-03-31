import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  id_rol;
  constructor
  (
    private menu:MenuController,
    private router: Router
  ) 
  {
   /*  this.menu.enable(true,'first'); */
   this.id_rol =  localStorage.getItem("id_rol");
   }

  ngOnInit() {
  }
  salir(){
 
      this.router.navigateByUrl('/login');
 
  }
}
