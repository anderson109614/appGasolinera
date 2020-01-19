import { Component, OnInit, Input } from '@angular/core';
import { ClienteService } from '../../Servicios/cliente.service';
import { ModalController,ToastController, NavParams } from '@ionic/angular';
import {Cliente} from '../../Modelos/Cliente';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  @Input() nuevo: boolean;
  @Input() cliente: Cliente;
  constructor(public serCli:ClienteService,
    public modalController: ModalController,
    public toastController: ToastController,
    navParams: NavParams
    ) { 
      //console.log(navParams.get('nuevo'));
    }

  ngOnInit() {
    if(this.nuevo){
      console.log('Nuevo');
    }else{
      
      console.log('Actualizar');
      console.log(this.cliente);
      this.cargarClientes();
    }
  }
  cargarClientes(){
    (<HTMLSelectElement>document.getElementById("txtCedulaN")).value = this.cliente.Cedula;
    (<HTMLSelectElement>document.getElementById("txtNombreN")).value = this.cliente.Nombre ;
    (<HTMLSelectElement>document.getElementById("txtApellidoN")).value = this.cliente.Apellido;
    (<HTMLSelectElement>document.getElementById("txtDireccionN")).value = this.cliente.Direccion;
    (<HTMLSelectElement>document.getElementById("txtTelefonoN")).value = this.cliente.Telefono;
  }
  regresarBTN() {
    this.modalController.dismiss();
  }
  GuardarCLI(){
    if (this.nuevo){
      this.GuardarNuevo();
    }else{
      this.GuardarACT();
    }
    

    
  }
  GuardarACT(){
    let cli:Cliente={
      Id:this.cliente.Id,
      Cedula:(<HTMLSelectElement>document.getElementById("txtCedulaN")).value,
      Nombre:(<HTMLSelectElement>document.getElementById("txtNombreN")).value,
      Apellido:(<HTMLSelectElement>document.getElementById("txtApellidoN")).value,
      Telefono:(<HTMLSelectElement>document.getElementById("txtTelefonoN")).value,
      Direccion:(<HTMLSelectElement>document.getElementById("txtDireccionN")).value      
    };
    console.log(cli);
    if(cli.Cedula.length==0){
      this.presentToast('Ingrese Cedula');
    }else if(cli.Nombre.length==0){
      this.presentToast('Ingrese Nombre');
    }else if(cli.Apellido.length==0){
      this.presentToast('Ingrese Apellido');
    }else if(cli.Telefono.length==0){
      this.presentToast('Ingrese Telefono');
    }else if(cli.Direccion.length==0){
      this.presentToast('Ingrese Direccion');
    }else{
      this.serCli.UptateClientes(cli).subscribe(
        res => {
          this.modalController.dismiss({cliente:res});
         
        },
        err =>{ console.log(err);

          this.presentToast('Error al guardar');
        }
        
      );
    }
  }
  GuardarNuevo(){
    let cli:Cliente={
      Id:0,
      Cedula:(<HTMLSelectElement>document.getElementById("txtCedulaN")).value,
      Nombre:(<HTMLSelectElement>document.getElementById("txtNombreN")).value,
      Apellido:(<HTMLSelectElement>document.getElementById("txtApellidoN")).value,
      Telefono:(<HTMLSelectElement>document.getElementById("txtTelefonoN")).value,
      Direccion:(<HTMLSelectElement>document.getElementById("txtDireccionN")).value      
    };
    console.log(cli);
    if(cli.Cedula.length==0){
      this.presentToast('Ingrese Cedula');
    }else if(cli.Nombre.length==0){
      this.presentToast('Ingrese Nombre');
    }else if(cli.Apellido.length==0){
      this.presentToast('Ingrese Apellido');
    }else if(cli.Telefono.length==0){
      this.presentToast('Ingrese Telefono');
    }else if(cli.Direccion.length==0){
      this.presentToast('Ingrese Direccion');
    }else{
      this.serCli.PostClientes(cli).subscribe(
        res => {
          this.modalController.dismiss({cliente:res});
         
        },
        err =>{ console.log(err);

          this.presentToast('Error al guardar');
        }
        
      );
    }
  }
  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 5000
    });
    toast.present();
  }
}
