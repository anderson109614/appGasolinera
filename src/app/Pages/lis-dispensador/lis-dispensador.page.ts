import { Component, OnInit } from '@angular/core';
import {IslasService} from '../../Servicios/islas.service';
import { ModalController, ToastController } from '@ionic/angular';
import {  DispensadorPage } from '../../Pages/dispensador/dispensador.page';
import  { Maquina } from '../../Modelos/Maquina';
import { AlertController } from '@ionic/angular';
import { DispensadorC } from 'src/app/Modelos/DispensadorC';
@Component({
  selector: 'app-lis-dispensador',
  templateUrl: './lis-dispensador.page.html',
  styleUrls: ['./lis-dispensador.page.scss'],
})
export class LisDispensadorPage implements OnInit {
  LisDispensadores:any=[];
  LisDispensadoresAux:any=[];
  constructor(private islSer:IslasService,
    public alertController: AlertController,
    public modalController: ModalController,
    public toastController: ToastController) { }

  ngOnInit() {
    this.cargarDispensadores();
  }

  cargarDispensadores(){
    this.islSer.getDispensadores().subscribe(
      res => {
        this.LisDispensadores = res;
        this.LisDispensadoresAux = res;
      },
      err => console.log(err)
    );
}

checkMaquina($event: KeyboardEvent) {

  this.LisDispensadores=this.LisDispensadoresAux;
  
  let value = (<HTMLInputElement>event.target).value;
  const result = this.LisDispensadores.filter(cli =>cli.Nombre.toUpperCase().search(value.toUpperCase())==0                                         
                                              || cli.Descripcion.toUpperCase().search(value.toUpperCase())==0);
  this.LisDispensadores=result;

}
async MostrarNuevo() {
  const modal = await this.modalController.create({
    component: DispensadorPage,
    componentProps: {
      nuevo: true
    }

  });
  await modal.present();

  const { data } = await modal.onDidDismiss();

  try {

      
    this.cargarDispensadores();


  } catch (error) {
    console.log('error');
  }
}
async EditarIsla(cli:DispensadorC){
  const modal = await this.modalController.create({
    component: DispensadorPage,
    componentProps: {
      nuevo: false,
      dispensador:cli
    }

  });
  await modal.present();

  const { data } = await modal.onDidDismiss();

  try {

      
    this.cargarDispensadores();


  } catch (error) {
    console.log('error');
  }
}
async eliminarCon(ids:DispensadorC){
  const alert = await this.alertController.create({
    header: 'Eliminar',
    message: 'Seguro que desea eliminar este Dispensador',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('cancelar');
        }
      }, {
        text: 'Eliminar',
        handler: () => {
          console.log('Eliminar');
          this.islSer.eliminarDispensadores(ids).subscribe(
            res => {
              this.cargarDispensadores();
              this.presentToast("Dispensador eliminado..!!");
              
            },
            err => console.log(err)
          );





        }
      }
    ]
  });

  await alert.present();
}
async presentToast(msj: string) {
  const toast = await this.toastController.create({
    message: msj,
    duration: 5000
  });
  toast.present();
}






}
