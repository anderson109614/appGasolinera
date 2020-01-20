import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../Servicios/usuarios.service';
import { ModalController, ToastController } from '@ionic/angular';
import {  UsuarioPage } from '../../Pages/usuario/usuario.page';
import  { Usuario } from '../../Modelos/Usuario';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.page.html',
  styleUrls: ['./list-usuarios.page.scss'],
})
export class ListUsuariosPage implements OnInit {

  LisUsuarios:any=[];
  LisUsuariosAux:any=[];

  constructor(public alertController: AlertController,
    public serUsr:UsuariosService,
    public modalController: ModalController,
    public toastController: ToastController) { }

  ngOnInit() {
    this.cargarUsuarios();
  }
  cargarUsuarios(){
    this.serUsr.getUsuarios().subscribe(
      res => {
        this.LisUsuarios = res;
        this.LisUsuariosAux = res;
      },
      err => console.log(err)
    );
}
checkUsuarios($event: KeyboardEvent) {

  this.LisUsuarios=this.LisUsuariosAux;
  
  let value = (<HTMLInputElement>event.target).value;
  const result = this.LisUsuarios.filter(cli => cli.Cedula.search(value)==0 
                                         || cli.Nombre.toUpperCase().search(value.toUpperCase())==0 
                                         || cli.Apellido.toUpperCase().search(value.toUpperCase())==0
                                         || cli.Telefono.toUpperCase().search(value.toUpperCase())==0 
                                         || cli.Direccion.toUpperCase().search(value.toUpperCase())== 0
                                          );
  this.LisUsuarios=result;

}
async MostrarNuevo() {
  const modal = await this.modalController.create({
    component: UsuarioPage,
    componentProps: {
      nuevo: true
    }

  });
  await modal.present();

  const { data } = await modal.onDidDismiss();

  try {

      
    this.cargarUsuarios();


  } catch (error) {
    console.log('error');
  }
}

async EditarUsuario(cli:Usuario){
  const modal = await this.modalController.create({
    component: UsuarioPage,
    componentProps: {
      nuevo: false,
      usuario:cli
    }

  });
  await modal.present();

  const { data } = await modal.onDidDismiss();

  try {

      
    this.cargarUsuarios();


  } catch (error) {
    console.log('error');
  }
}
async eliminarUsr(ids:Usuario){
  const alert = await this.alertController.create({
    header: 'Eliminar',
    message: 'Seguro que desea eliminar este usuario',
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
          this.serUsr.DelUsuarios(ids).subscribe(
            res => {
              this.cargarUsuarios();
              this.presentToast("Usuario eliminado..!!");
              
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
