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
 
  Datos:any=[]
  loginForm:FormGroup;
  passwordShown = false;
  nameicon = 'eye-off';
  passwordtipo = 'password';
  usuario='gabriel';
  temporalclave='1234';
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

    
   }

  ngOnInit() {}

  async login() {

    const loading = await this.loadingController.create({
      message: "Por favor espere...",
    });
    loading.present();

    this.webServiceMedica
      .login( this.usuario, this.temporalclave)
      .subscribe(
        (success: any) => {
          loading.dismiss();

          console.log('estiy aqui',success);

          if (success.usuario == undefined && success.temporalclave == undefined) 
          {
               this.mensajeToast("Datos Incorrectos");
          } else {
         
          localStorage.setItem("id_rol",success.id_rol);
            this.router.navigateByUrl('tabs/inicio' );
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

  togglePass(){
if(this.passwordShown){
  this.passwordShown = false;
  this.passwordtipo = 'password';
  this.nameicon = 'eye-off';
}else{
  this.passwordShown = true;
  this.passwordtipo = 'text';
  this.nameicon = 'eye';
}
  }
}
