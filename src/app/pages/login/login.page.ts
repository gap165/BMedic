import { Component, OnInit } from '@angular/core';
import { MenuController,
         AlertController,
         LoadingController,
         ToastController } 
from '@ionic/angular';
import { WsBMedicService } from '../../service/ws-b-medic.service';
import { Storage } from '@ionic/storage';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  ping:any;
  usuario:string='administrador';
  temporalclave:string='1234';
  Datos:any=[]
  loginForm:FormGroup;

  constructor
  (
private menu:MenuController, 
private webServiceMedica: WsBMedicService,
private storage: Storage,
private formBuilder:FormBuilder,
public toastController:ToastController,
public alertController:AlertController,
public loadingController: LoadingController,
private router:Router

  ) 
  {/* bloquear menu en login */
    this.menu.enable(false,'first');

    this.loginForm = formBuilder.group({
      usuario: ["administrador", Validators.required],
      temporalclave: ["1234", Validators.required],
    }); 

    
   }

  ngOnInit() {}

  async login() {
    //this.mensaje('ingreso..');

    const loading = await this.loadingController.create({
      message: "Por favor espere...",
    });
    loading.present();

    this.webServiceMedica
      .login(this.loginForm.value.usuario, this.loginForm.value.temporalclave)
      .subscribe(
        (success: any) => {
          loading.dismiss();

          console.log('estoy aqui');

          if (success.usuario == undefined) {
           
            this.mensajeToast("Datos Incorrectos");
          } else {
         
            this.router.navigateByUrl('inicio' );
        
          }
        },

        (errornet) => {
          loading.dismiss();
          this.mensaje("No se pudo conectar con el Servicio API REST");
        }
      );
  }
  async mensajeToast(texto) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 3000,
    });
    toast.present();
  }
  async mensaje(texto) {
    const alert = await this.alertController.create({
      header: "Alerta",
      message: texto,
      buttons: ["OK"],
    });
    await alert.present();
  }
}
