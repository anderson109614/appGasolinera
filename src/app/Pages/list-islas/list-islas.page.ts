import { Component, OnInit } from '@angular/core';
import {IslasService} from '../../Servicios/islas.service';
import { ModalController, ToastController } from '@ionic/angular';
import {  IslaPage } from '../../Pages/isla/isla.page';
import  { Isla } from '../../Modelos/Isla';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-list-islas',
  templateUrl: './list-islas.page.html',
  styleUrls: ['./list-islas.page.scss'],
})
export class ListIslasPage implements OnInit {
  LisIslas:any=[];
  LisIslasAux:any=[];
  constructor(private islSer:IslasService,
    public alertController: AlertController,
    public modalController: ModalController,
    public toastController: ToastController) { }

  ngOnInit() {
    this.cargarIslas();
  }
  cargarIslas(){
    this.islSer.getIslas().subscribe(
      res => {
        this.LisIslas = res;
        this.LisIslasAux = res;
      },
      err => console.log(err)
    );
}

checkIsla($event: KeyboardEvent) {

  this.LisIslas=this.LisIslasAux;
  
  let value = (<HTMLInputElement>event.target).value;
  const result = this.LisIslas.filter(cli =>cli.Nombre.toUpperCase().search(value.toUpperCase())==0                                         
                                              || cli.Descripcion.toUpperCase().search(value.toUpperCase())==0);
  this.LisIslas=result;

}
async MostrarNuevo() {
  const modal = await this.modalController.create({
    component: IslaPage,
    componentProps: {
      nuevo: true
    }

  });
  await modal.present();

  const { data } = await modal.onDidDismiss();

  try {

      
    this.cargarIslas();


  } catch (error) {
    console.log('error');
  }
}
async EditarIsla(cli:Isla){
  const modal = await this.modalController.create({
    component: IslaPage,
    componentProps: {
      nuevo: false,
      isla:cli
    }

  });
  await modal.present();

  const { data } = await modal.onDidDismiss();

  try {

      
    this.cargarIslas();


  } catch (error) {
    console.log('error');
  }
}
async eliminarCon(ids:Isla){
  const alert = await this.alertController.create({
    header: 'Eliminar',
    message: 'Seguro que desea eliminar esta Isla',
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
          this.islSer.eliminarIsla(ids).subscribe(
            res => {
              this.cargarIslas();
              this.presentToast("Isla eliminado..!!");
              
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
