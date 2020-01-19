import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../../Servicios/cliente.service';
import { ModalController, ToastController } from '@ionic/angular';
import { ClientePage } from '../../Pages/cliente/cliente.page';
import  { Cliente } from '../../Modelos/Cliente';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-lis-clientes-nm',
  templateUrl: './lis-clientes-nm.page.html',
  styleUrls: ['./lis-clientes-nm.page.scss'],
})
export class LisClientesNMPage implements OnInit {
  LisClientes:any=[];
  LisClientesAux:any=[];
  constructor(public alertController: AlertController,
    public serCli:ClienteService,
    public modalController: ModalController,
    public toastController: ToastController,) { }

  ngOnInit() {
    this.cargarCietes();
  }
  cargarCietes(){
    this.serCli.getClientes().subscribe(
      res => {
        this.LisClientes = res;
        this.LisClientesAux = res;
      },
      err => console.log(err)
    );
}
async MostrarNuevo() {
  const modal = await this.modalController.create({
    component: ClientePage,
    componentProps: {
      nuevo: true
    }

  });
  await modal.present();

  const { data } = await modal.onDidDismiss();

  try {

      
    this.cargarCietes();


  } catch (error) {
    console.log('error');
  }
}
checkCliente($event: KeyboardEvent) {

  this.LisClientes=this.LisClientesAux;
  
  let value = (<HTMLInputElement>event.target).value;
  const result = this.LisClientes.filter(cli => cli.Cedula.search(value)==0 
                                         || cli.Nombre.toUpperCase().search(value.toUpperCase())==0 
                                         || cli.Apellido.toUpperCase().search(value.toUpperCase())==0
                                         || cli.Telefono.toUpperCase().search(value.toUpperCase())==0 
                                         || cli.Direccion.toUpperCase().search(value.toUpperCase())== 0
                                          );
  this.LisClientes=result;

}

async EditarCliente(cli:Cliente){
  const modal = await this.modalController.create({
    component: ClientePage,
    componentProps: {
      nuevo: false,
      cliente:cli
    }

  });
  await modal.present();

  const { data } = await modal.onDidDismiss();

  try {

      
    this.cargarCietes();


  } catch (error) {
    console.log('error');
  }
}
async eliminarClie(ids:Cliente){
  const alert = await this.alertController.create({
    header: 'Eliminar',
    message: 'Seguro que desea eliminar este cliente',
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
          this.serCli.eliminarClientes(ids).subscribe(
            res => {
              this.cargarCietes();
              this.presentToast("Cliente eliminado..!!");
              
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
