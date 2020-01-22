import { Component, OnInit, Input } from '@angular/core';
import { IslasService } from '../../Servicios/islas.service';
import { ModalController,ToastController, NavParams } from '@ionic/angular';
import {Isla} from '../../Modelos/Isla';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';

@Component({
  selector: 'app-isla',
  templateUrl: './isla.page.html',
  styleUrls: ['./isla.page.scss'],
})
export class IslaPage implements OnInit {
  @Input() nuevo: boolean;
  @Input() isla: Isla;
  rolSelec:string="";
  listaRoles:any =[];
  listaUSR:any=[];
  constructor(public serCom:IslasService,
    public modalController: ModalController,public serUsr:UsuariosService,
    public toastController: ToastController) { }

  ngOnInit() {
    this.cargarUsuarios();
    if(this.nuevo){
      console.log('Nuevo');
    }else{
      
      console.log('Actualizar');
      console.log(this.isla);
      this.cargarCombustible();
    }
  }
  regresarBTN() {
    this.modalController.dismiss();
  }
  IslaSelected() {
  
  }
  cargarUsuarios(){
    this.serUsr.getUsuarios().subscribe(
      res => {
        this.listaUSR = res;
        
      },
      err => console.log(err)
    );
}
  cargarCombustible(){
    (<HTMLSelectElement>document.getElementById("txtDescripcionN")).value = this.isla.Descripcion;
    (<HTMLSelectElement>document.getElementById("selIsla")).value=this.isla.Id_Usuario.toString();
    
  }

  GuardarCLI(){
    if (this.nuevo){
      this.GuardarNuevo();
    }else{
      this.GuardarACT();
    }
   
  }

  GuardarACT(){
    let a:string=(<HTMLSelectElement>document.getElementById("selIsla")).value;
    if(a.length==0){
      a=this.isla.Id_Usuario.toString();
    }

    let cli:Isla={
      Id:this.isla.Id,
      Descripcion :(<HTMLSelectElement>document.getElementById("txtDescripcionN")).value,
      Id_Usuario:Number.parseFloat(a),
      Nombre:""
      
    };
    console.log(cli);
    if(cli.Descripcion.length==0){
      this.presentToast('Ingrese Descripcion');
    }else if(cli.Id_Usuario.toString().length==0){
      this.presentToast('Seleccione Usuario');
    }else{
      this.serCom.UptateIsla(cli).subscribe(
        res => {
          this.modalController.dismiss({combustible:res});
         
        },
        err =>{ console.log(err);

          this.presentToast('Error al guardar');
        }
        
      );
    }
  }
  GuardarNuevo(){
    let cli:Isla={
      Id:0,
      Descripcion :(<HTMLSelectElement>document.getElementById("txtDescripcionN")).value,
      Id_Usuario:Number.parseFloat((<HTMLSelectElement>document.getElementById("selIsla")).value),
      Nombre:""
      
    };
    console.log(cli);
    if(cli.Descripcion.length==0){
      this.presentToast('Ingrese Descripcion');
    }else if((<HTMLSelectElement>document.getElementById("selIsla")).value.length==0){
      this.presentToast('Seleccione Usuario');
    }else{
      this.serCom.PostIsla(cli).subscribe(
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
