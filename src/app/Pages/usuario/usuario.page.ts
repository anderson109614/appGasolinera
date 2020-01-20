import { Component, OnInit, Input } from '@angular/core';
import { UsuariosService } from '../../Servicios/usuarios.service';
import { ModalController,ToastController, NavParams } from '@ionic/angular';
import {Usuario} from '../../Modelos/Usuario';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  @Input() nuevo: boolean;
  @Input() usuario: Usuario;
  rolSelec:string="";
  listaRoles:any =[];
  constructor(public serUsr:UsuariosService,
    public modalController: ModalController,
    public toastController: ToastController) { }

  ngOnInit() {
    this.cargarRoles();
    if(this.nuevo){
      console.log('Nuevo');
    }else{
      
      console.log('Actualizar');
      console.log(this.usuario);
      this.cargarUsuarios();
    }
  }
  cargarRoles(){
    this.serUsr.getRoles().subscribe(
      res => {
        this.listaRoles=res;
       
      },
      err =>{ console.log(err);

        this.presentToast('Error al roles');
      }
      
    );
  }
  IslaSelected() {
    this.rolSelec = (<HTMLSelectElement>document.getElementById("selRol")).value;
    

  }
  cargarUsuarios(){
    (<HTMLSelectElement>document.getElementById("txtCedulaN")).value = this.usuario.Cedula;
    (<HTMLSelectElement>document.getElementById("txtNombreN")).value = this.usuario.Nombre ;
    (<HTMLSelectElement>document.getElementById("txtApellidoN")).value = this.usuario.Apellido;
    (<HTMLSelectElement>document.getElementById("txtDireccionN")).value = this.usuario.Direccion;
    (<HTMLSelectElement>document.getElementById("txtTelefonoN")).value = this.usuario.Telefono;
    (<HTMLSelectElement>document.getElementById("txtPassN")).value = this.usuario.Telefono;
    (<HTMLSelectElement>document.getElementById("txtTelefonoN")).value = this.usuario.Telefono;
    (<HTMLSelectElement>document.getElementById("selRol")).value=this.usuario.IdRol.toString();
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
    let cli:Usuario={
      Id:this.usuario.Id,
      Cedula:(<HTMLSelectElement>document.getElementById("txtCedulaN")).value,
      Nombre:(<HTMLSelectElement>document.getElementById("txtNombreN")).value,
      Apellido:(<HTMLSelectElement>document.getElementById("txtApellidoN")).value,
      Telefono:(<HTMLSelectElement>document.getElementById("txtTelefonoN")).value,
      Direccion:(<HTMLSelectElement>document.getElementById("txtDireccionN")).value,
      Contraseña:(<HTMLSelectElement>document.getElementById("txtPassN")).value,
      IdRol:Number.parseInt((<HTMLSelectElement>document.getElementById("selRol")).value) ,
      Rol:"" 
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
    }else if(cli.Contraseña.length==0){
      this.presentToast('Ingrese Contrase;a');
    }else if(cli.Id.toString().length==0){
      this.presentToast('Seleccione ROl');
    }else{
      this.serUsr.putUsuarios(cli).subscribe(
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
    let cli:Usuario={
      Id:0,
      Cedula:(<HTMLSelectElement>document.getElementById("txtCedulaN")).value,
      Nombre:(<HTMLSelectElement>document.getElementById("txtNombreN")).value,
      Apellido:(<HTMLSelectElement>document.getElementById("txtApellidoN")).value,
      Telefono:(<HTMLSelectElement>document.getElementById("txtTelefonoN")).value,
      Direccion:(<HTMLSelectElement>document.getElementById("txtDireccionN")).value ,
      Contraseña:(<HTMLSelectElement>document.getElementById("txtPassN")).value,
      IdRol:Number.parseInt((<HTMLSelectElement>document.getElementById("selRol")).value) ,
      Rol:""     
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
    }else if(cli.Contraseña.length==0){
      this.presentToast('Ingrese Contrase;a');
    }else if(cli.Id.toString().length==0){
      this.presentToast('Seleccione ROl');
    }else{
      this.serUsr.postUsuarios(cli).subscribe(
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
