import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
id_rol;
  constructor(private router:Router) {
    this.id_rol =  localStorage.getItem("id_rol");
   }

  ngOnInit() {
  }
  salir(){
 
    this.router.navigateByUrl('/login');

}
}
