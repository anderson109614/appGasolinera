import { Component, OnInit } from '@angular/core';
import {CombustiblesService} from '../../Servicios/combustibles.service';
import { ModalController, ToastController } from '@ionic/angular';
import {  CombustiblePage } from '../../Pages/combustible/combustible.page';
import  { Combustible } from '../../Modelos/Combustible';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-list-combustibles',
  templateUrl: './list-combustibles.page.html',
  styleUrls: ['./list-combustibles.page.scss'],
})
export class ListCombustiblesPage implements OnInit {
  LisCombustibles:any=[];
  LisCombustiblesAux:any=[];
  constructor(private conSer:CombustiblesService,
    public alertController: AlertController,
    public modalController: ModalController,
    public toastController: ToastController) { }

  ngOnInit() {
    this.cargarCombustibles();
  }
  cargarCombustibles(){
    this.conSer.getCombustibles().subscribe(
      res => {
        this.LisCombustibles = res;
        this.LisCombustiblesAux = res;
      },
      err => console.log(err)
    );
}
checkCombustibel($event: KeyboardEvent) {

  this.LisCombustibles=this.LisCombustiblesAux;
  
  let value = (<HTMLInputElement>event.target).value;
  const result = this.LisCombustibles.filter(cli =>cli.Nombre.toUpperCase().search(value.toUpperCase())==0                                         
                                          );
  this.LisCombustibles=result;

}
async MostrarNuevo() {
  const modal = await this.modalController.create({
    component: CombustiblePage,
    componentProps: {
      nuevo: true
    }

  });
  await modal.present();

  const { data } = await modal.onDidDismiss();

  try {

      
    this.cargarCombustibles();


  } catch (error) {
    console.log('error');
  }
}
async EditarCombustible(cli:Combustible){
  const modal = await this.modalController.create({
    component: CombustiblePage,
    componentProps: {
      nuevo: false,
      combustible:cli
    }

  });
  await modal.present();

  const { data } = await modal.onDidDismiss();

  try {

      
    this.cargarCombustibles();


  } catch (error) {
    console.log('error');
  }
}
async eliminarCon(ids:Combustible){
  const alert = await this.alertController.create({
    header: 'Eliminar',
    message: 'Seguro que desea eliminar este Combustible',
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
          this.conSer.eliminarCombustibles(ids).subscribe(
            res => {
              this.cargarCombustibles();
              this.presentToast("Combustible eliminado..!!");
              
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
