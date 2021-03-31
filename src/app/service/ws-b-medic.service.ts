import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ToastController, LoadingController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class WsBMedicService {
loading:any;
URL= "http://localhost/wsbluemedic/"
  constructor(
    public toastController:ToastController,
     private http:HttpClient,
      private loadingController: LoadingController) { }

    login(usuario,temporalclave) {
        let urlServer = this.URL + "usuarios.php";
        let body = new HttpParams();
        body = body.set("usuario", usuario);
        body = body.set("temporalclave", temporalclave);
        body = body.set("op", "login");
        return this.http.post(urlServer, body, { responseType: "json" });
      }
      listmedicos() {
        let urlServer = this.URL + "usuarios.php";
        let body = new HttpParams();
        body = body.set("op", "listmedicos");
        return this.http.post(urlServer, body, { responseType: "json" });
      }
}
