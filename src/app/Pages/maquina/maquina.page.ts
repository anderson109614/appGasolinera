import { Component, OnInit, Input } from '@angular/core';
import { IslasService } from '../../Servicios/islas.service';
import { ModalController,ToastController, NavParams } from '@ionic/angular';
import {Isla} from '../../Modelos/Isla';
import {Maquina} from '../../Modelos/Maquina';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.page.html',
  styleUrls: ['./maquina.page.scss'],
})
export class MaquinaPage implements OnInit {

  @Input() nuevo: boolean;
  @Input() maquina: Maquina;
  rolSelec:string="";
  listaRoles:any =[];
  listaUSR:any=[];
  constructor(public serCom:IslasService,
    public modalController: ModalController,public serUsr:UsuariosService,
    public toastController: ToastController) { }
    LisIslas:any=[];
  ngOnInit() {
    this.cargarIslas();
    if(this.nuevo){
      console.log('Nuevo');
    }else{
      
      console.log('Actualizar');
      console.log(this.maquina);
      this.cargarMaquina();
    }
  }
  cargarIslas(){
    this.serCom.getIslas().subscribe(
      res => {
        this.LisIslas = res;
        
      },
      err => console.log(err)
    );
}
cargarMaquina(){
  (<HTMLSelectElement>document.getElementById("txtDescripcionN")).value = this.maquina.Descripcion;
  (<HTMLSelectElement>document.getElementById("selIsla")).value=this.maquina.Id_Isla.toString();
  
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
    a=this.maquina.Id_Isla.toString();
  }
  let cli:Maquina={
    Id:this.maquina.Id,
    Descripcion :(<HTMLSelectElement>document.getElementById("txtDescripcionN")).value,
    Id_Isla:Number.parseFloat(a),
    Nombre:""
    
  };
  console.log(cli);
  if(cli.Descripcion.length==0){
    this.presentToast('Ingrese Descripcion');
  }else{
    this.serCom.UptateMAquinas(cli).subscribe(
      res => {
        this.modalController.dismiss({combustible:res});
       
      },
      err =>{ console.log(err);

        this.presentToast('Error al guardar');
      }
      
    );
  }
}
regresarBTN() {
  this.modalController.dismiss();
}
GuardarNuevo(){
  let cli:Maquina={
    Id:0,
    Descripcion :(<HTMLSelectElement>document.getElementById("txtDescripcionN")).value,
    Id_Isla:Number.parseFloat((<HTMLSelectElement>document.getElementById("selIsla")).value),
    Nombre:""
    
  };
  console.log(cli);
  if(cli.Descripcion.length==0){
    this.presentToast('Ingrese Descripcion');
  }else if((<HTMLSelectElement>document.getElementById("selIsla")).value.length==0){
    this.presentToast('Seleccione Usuario');
  }else{
    this.serCom.PostMAquinas(cli).subscribe(
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
