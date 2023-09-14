import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit { 
  usuario: string ='';
  contra: string='';
  restablecer: string='';
  confirmacion: boolean=true;

  constructor(
    private alertController:AlertController,private router :Router
  ) { }

  ngOnInit() {
  }
    Restablecer(){
      if(!this.usuario || !this.contra || !this.restablecer){this.presentAlert('Faltan Datos', 'Porfavor Rellene Todos Los Campos'); return;}
      if (this.contra !== this.restablecer) {
        this.confirmacion = false;
        this.presentAlert('Datos Incorrectos', 'Las Contraseñas No Coinciden');
        return;
      }
      this.router.navigate(['/home']);
    } 

    async presentAlert(header:string,message:string){const alert=await this.alertController.create({header:header,message:message,buttons:['Aceptar']});await alert.present();}
}
