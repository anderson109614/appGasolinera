import { Component, OnInit, Input } from '@angular/core';
import { CombustiblesService } from '../../Servicios/combustibles.service';
import { ModalController,ToastController, NavParams } from '@ionic/angular';
import {Combustible} from '../../Modelos/Combustible';

@Component({
  selector: 'app-combustible',
  templateUrl: './combustible.page.html',
  styleUrls: ['./combustible.page.scss'],
})
export class CombustiblePage implements OnInit {
  @Input() nuevo: boolean;
  @Input() combustible: Combustible;
  rolSelec:string="";
  listaRoles:any =[];
  constructor(public serCom:CombustiblesService,
    public modalController: ModalController,
    public toastController: ToastController) { }

  ngOnInit() {
    if(this.nuevo){
      console.log('Nuevo');
    }else{
      
      console.log('Actualizar');
      console.log(this.combustible);
      this.cargarCombustible();
    }
  }
  regresarBTN() {
    this.modalController.dismiss();
  }
  cargarCombustible(){
    (<HTMLSelectElement>document.getElementById("txtNombreN")).value = this.combustible.Nombre;
    (<HTMLSelectElement>document.getElementById("txtPrecioN")).value = this.combustible.Precio.toString() ;
    (<HTMLSelectElement>document.getElementById("txtCantidadN")).value = this.combustible.Cantidad.toString();
    
  }

  GuardarCLI(){
    if (this.nuevo){
      this.GuardarNuevo();
    }else{
      this.GuardarACT();
    }
   
  }

  GuardarACT(){
    let cli:Combustible={
      Id:this.combustible.Id,
      Nombre :(<HTMLSelectElement>document.getElementById("txtNombreN")).value,
      Precio: Number.parseFloat((<HTMLSelectElement>document.getElementById("txtPrecioN")).value),
      Cantidad:Number.parseFloat((<HTMLSelectElement>document.getElementById("txtCantidadN")).value)
      
    };
    console.log(cli);
    if(cli.Nombre.length==0){
      this.presentToast('Ingrese Nombre');
    }else if(cli.Precio.toString().length==0){
      this.presentToast('Ingrese Precio');
    }else if(cli.Cantidad.toString().length==0){
      this.presentToast('Ingrese Cantidad');
    }else{
      this.serCom.UptateCombustibles(cli).subscribe(
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
    let cli:Combustible={
      Id:0,
      Nombre :(<HTMLSelectElement>document.getElementById("txtNombreN")).value,
      Precio: Number.parseFloat((<HTMLSelectElement>document.getElementById("txtPrecioN")).value),
      Cantidad:Number.parseFloat((<HTMLSelectElement>document.getElementById("txtCantidadN")).value)
      
    };
    console.log(cli);
    if(cli.Nombre.length==0){
      this.presentToast('Ingrese Nombre');
    }else if(cli.Precio.toString().length==0){
      this.presentToast('Ingrese Precio');
    }else if(cli.Cantidad.toString().length==0){
      this.presentToast('Ingrese Cantidad');
    }else{
      this.serCom.PostCombustibles(cli).subscribe(
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
