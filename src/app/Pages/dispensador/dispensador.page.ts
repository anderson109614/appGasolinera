import { Component, OnInit, Input } from '@angular/core';
import { IslasService } from '../../Servicios/islas.service';
import { CombustiblesService } from '../../Servicios/combustibles.service';
import { ModalController,ToastController, NavParams } from '@ionic/angular';
import {DispensadorC} from '../../Modelos/DispensadorC';
import {Maquina} from '../../Modelos/Maquina';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';

@Component({
  selector: 'app-dispensador',
  templateUrl: './dispensador.page.html',
  styleUrls: ['./dispensador.page.scss'],
})
export class DispensadorPage implements OnInit {

  @Input() nuevo: boolean;
  @Input() dispensador: DispensadorC;
  
  listaRoles:any =[];
  listaUSR:any=[];
  constructor(public serCom:IslasService,public combusSer:CombustiblesService,
    public modalController: ModalController,public serUsr:UsuariosService,
    public toastController: ToastController) { }
    ListMAquinas:any=[];
    ListCombustibles:any=[];
  ngOnInit() {
    this.cargarMAquinas();
    this.cargarCombustibles();
    if(this.nuevo){
      console.log('Nuevo');
    }else{
      
      console.log('Actualizar');
      console.log(this.dispensador);
      this.cargarDispensador();
    }
  }
  cargarMAquinas(){
    this.serCom.getMAquinas().subscribe(
      res => {
        this.ListMAquinas = res;
        
      },
      err => console.log(err)
    );
}
cargarCombustibles(){
  this.combusSer.getCombustibles().subscribe(
    res => {
      this.ListCombustibles = res;
      
    },
    err => console.log(err)
  );
}
cargarDispensador(){
  (<HTMLSelectElement>document.getElementById("txtDescripcionN")).value = this.dispensador.Descripcion;
  (<HTMLSelectElement>document.getElementById("selIsla")).value=this.dispensador.IdConbustible.toString();
  (<HTMLSelectElement>document.getElementById("selMaquina")).value=this.dispensador.Id_Maquina.toString();
  
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
    a=this.dispensador.IdConbustible.toString();
  }
  let b:string=(<HTMLSelectElement>document.getElementById("selMaquina")).value;
  if(b.length==0){
    b=this.dispensador.Id_Maquina.toString();
  }
  let cli:DispensadorC={
    Id:this.dispensador.Id,
    Descripcion :(<HTMLSelectElement>document.getElementById("txtDescripcionN")).value,
    IdConbustible:Number.parseFloat(a),
    Id_Maquina:Number.parseFloat(b),
    Nombre:"",
    Combustible:''
    
  };
  console.log(cli);
  if(cli.Descripcion.length==0){
    this.presentToast('Ingrese Descripcion');
  }else{
    this.serCom.UptateDispensadores(cli).subscribe(
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
  let cli:DispensadorC={
    Id:0,
    Descripcion :(<HTMLSelectElement>document.getElementById("txtDescripcionN")).value,
    IdConbustible:Number.parseFloat((<HTMLSelectElement>document.getElementById("selIsla")).value),
    Id_Maquina:Number.parseFloat((<HTMLSelectElement>document.getElementById("selMaquina")).value),
    Nombre:"",
    Combustible:''
  };
  console.log(cli);
  if(cli.Descripcion.length==0){
    this.presentToast('Ingrese Descripcion');
  }else if((<HTMLSelectElement>document.getElementById("selIsla")).value.length==0){
    this.presentToast('Seleccione Combustible');
  }else if((<HTMLSelectElement>document.getElementById("selMaquina")).value.length==0){
    this.presentToast('Seleccione Maquina');
  }else{
    this.serCom.PostDispensadores(cli).subscribe(
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
