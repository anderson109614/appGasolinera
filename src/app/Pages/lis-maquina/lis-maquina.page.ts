import { Component, OnInit } from '@angular/core';
import {IslasService} from '../../Servicios/islas.service';
import { ModalController, ToastController } from '@ionic/angular';
import {  MaquinaPage } from '../../Pages/maquina/maquina.page';
import  { Maquina } from '../../Modelos/Maquina';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-lis-maquina',
  templateUrl: './lis-maquina.page.html',
  styleUrls: ['./lis-maquina.page.scss'],
})
export class LisMaquinaPage implements OnInit {

  LisMaquinas:any=[];
  LisMaquinasAux:any=[];
  constructor(private islSer:IslasService,
    public alertController: AlertController,
    public modalController: ModalController,
    public toastController: ToastController) { }

  ngOnInit() {
    this.cargarMaquinas();
  }

  cargarMaquinas(){
    this.islSer.getMAquinas().subscribe(
      res => {
        this.LisMaquinas = res;
        this.LisMaquinasAux = res;
      },
      err => console.log(err)
    );
}
checkMaquina($event: KeyboardEvent) {

  this.LisMaquinas=this.LisMaquinas;
  
  let value = (<HTMLInputElement>event.target).value;
  const result = this.LisMaquinas.filter(cli =>cli.Nombre.toUpperCase().search(value.toUpperCase())==0                                         
                                              || cli.Descripcion.toUpperCase().search(value.toUpperCase())==0);
  this.LisMaquinas=result;

}
async MostrarNuevo() {
  const modal = await this.modalController.create({
    component: MaquinaPage,
    componentProps: {
      nuevo: true
    }

  });
  await modal.present();

  const { data } = await modal.onDidDismiss();

  try {

      
    this.cargarMaquinas();


  } catch (error) {
    console.log('error');
  }
}
async EditarIsla(cli:Maquina){
  const modal = await this.modalController.create({
    component: MaquinaPage,
    componentProps: {
      nuevo: false,
      maquina:cli
    }

  });
  await modal.present();

  const { data } = await modal.onDidDismiss();

  try {

      
    this.cargarMaquinas();


  } catch (error) {
    console.log('error');
  }
}
async eliminarCon(ids:Maquina){
  const alert = await this.alertController.create({
    header: 'Eliminar',
    message: 'Seguro que desea eliminar esta Maquina',
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
          this.islSer.eliminarMAquinas(ids).subscribe(
            res => {
              this.cargarMaquinas();
              this.presentToast("Maquina eliminado..!!");
              
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
