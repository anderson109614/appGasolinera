import { Component } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { ModalController } from '@ionic/angular';
import { LisClientesPage } from '../Pages/lis-clientes/lis-clientes.page';
import { ClientePage } from '../Pages/cliente/cliente.page';
import { Cliente } from '../Modelos/Cliente';
import { ToastController } from '@ionic/angular';
import { ClienteService } from '../Servicios/cliente.service';
import {UsuariosService} from '../Servicios/usuarios.service';
import { Login } from '../Modelos/Login';
import { Dispensador } from '../Modelos/Dispensador';
import {Venta} from '../Modelos/Venta';
import {FacturaService }from '../Servicios/factura.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ClienteUso: Cliente;
  listaPlacas: any = [];
  idPlaca: number = 0;
  listaIslas: any = [];
  UsuarioUso:Login;
  listaMaquinas:any=[];
  listaDispensadores:any=[];
  dispensadorUso:Dispensador;
  calculos:string='Galones';
  etiqCantodad='Cantidad:';
  etiqTotal='Total:';
  cantidad:number=0;
  total:number=0;
  constructor(private usrService:UsuariosService,
    public serCli: ClienteService, 
    private storage: LocalStorageService,
     public modalController: ModalController,
    private serFactura:FacturaService,
      public toastController: ToastController) { }
  ngOnInit() {
    
    this.UsuarioUso= this.storage.retrieve('Usuario');

    this.cargarIslas();
  }
  cargarIslas() {
    console.log(this.UsuarioUso);
    this.usrService.getIslas(this.UsuarioUso.Id.toString()).subscribe(
      res => {
        console.log(res);
        this.listaIslas = res;
       
      },
      err => {
        console.log(err);

        // this.presentToast('Error al guardar');
      }

    );
  }
  IslaSelected() {
    var est = (<HTMLSelectElement>document.getElementById("selIsla")).value;
    (<HTMLSelectElement>document.getElementById("selMaquina")).value='';
    (<HTMLSelectElement>document.getElementById("selDispesador")).value='';
    this.usrService.getMaquinas(est).subscribe(
      res => {
        console.log(res);
        this.listaMaquinas = res;
       
      },
      err => {
        console.log(err);

        // this.presentToast('Error al guardar');
      }

    );

  }
  MaquinaSelected(){
    var est = (<HTMLSelectElement>document.getElementById("selMaquina")).value;
     (<HTMLSelectElement>document.getElementById("selDispesador")).value='';
    this.usrService.getDispensador(est).subscribe(
      res => {
        console.log(res);
        this.listaDispensadores = res;
       
      },
      err => {
        console.log(err);

        // this.presentToast('Error al guardar');
      }

    );
  }
  DispensadorSelected(){
  var idDis=(<HTMLSelectElement>document.getElementById("selDispesador")).value;
  for(var i=0;i<this.listaDispensadores.length;i++){
    if(idDis==this.listaDispensadores[i]){
      this.dispensadorUso=this.listaDispensadores[i];
    }
  }
  console.log(this.dispensadorUso);
  }
  Salir() {
    this.storage.store('Usuario', null);
  }
  async selCliente() {
    const modal = await this.modalController.create({
      component: LisClientesPage

    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    //conectado: con, conectado 1 desconectado 0
    //idUsuario:idu
    try {
      if (data.nuevo == 0) {
        console.log(data.cliente);
        this.ClienteUso = data.cliente;
        this.cargarCliente();

      } else {
        this.MostrarNuevo();
      }

    } catch (error) {
      console.log('error');
    }

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

      console.log(data.cliente);
      this.ClienteUso = data.cliente;
      this.cargarCliente();


    } catch (error) {
      console.log('error');
    }
  }
  cargarCliente() {
    (<HTMLSelectElement>document.getElementById("txtCedula")).value = this.ClienteUso.Cedula;
    (<HTMLSelectElement>document.getElementById("txtNombre")).value = this.ClienteUso.Nombre + ' ' + this.ClienteUso.Apellido;
    (<HTMLSelectElement>document.getElementById("txtDireccion")).value = this.ClienteUso.Direccion;
    (<HTMLSelectElement>document.getElementById("txtTelefono")).value = this.ClienteUso.Telefono;
    this.serCli.getAutos(this.ClienteUso.Id.toString()).subscribe(
      res => {
        this.listaPlacas = res;
        (<HTMLSelectElement>document.getElementById("selPlaca")).value = '';
        this.idPlaca = 0;
      },
      err => {
        console.log(err);

        // this.presentToast('Error al guardar');
      }

    );


  }
  PlacaSelected() {
    var est = (<HTMLSelectElement>document.getElementById("selPlaca")).value;
    this.idPlaca =Number.parseFloat(est);
    console.log(this.idPlaca);
  }
  segmentChanged(ev: any) {
    console.log( ev.detail.value);
    this.calculos=ev.detail.value;
    if(this.calculos=='Galones'){
     this.etiqCantodad='Cantidad: GL';
     this.etiqTotal='Total: $';
      (<HTMLSelectElement>document.getElementById("txtCantidad")).value='';
      (<HTMLSelectElement>document.getElementById("txtTotal")).value='';
    }else{
      this.etiqCantodad='Cantidad: $';
      this.etiqTotal='Total: GL';
      (<HTMLSelectElement>document.getElementById("txtCantidad")).value='';
      (<HTMLSelectElement>document.getElementById("txtTotal")).value='';
    }
    this.cantidad=0;
    this.total=0;
  }
  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 5000
    });
    toast.present();
  }
  checkCantidad($event: KeyboardEvent) {
    let value:number ;
    
    let valueAux:string=(<HTMLInputElement>event.target).value;
    if(valueAux.length==0){
      value=0;
    }else{
      value=Number.parseFloat(valueAux);
    }
    
    console.log(value)
    if(this.calculos=='Galones'){
      let total:number=value*this.dispensadorUso.Precio;
      console.log(total);
      if(value<this.dispensadorUso.Cant_Disponible){
        this.cantidad=value;
        this.total=total;
        (<HTMLSelectElement>document.getElementById("txtTotal")).value=total.toString()+" $";
      }else{
        this.cantidad=this.dispensadorUso.Cant_Disponible;
        this.total=this.dispensadorUso.Cant_Disponible*this.dispensadorUso.Precio;
        (<HTMLSelectElement>document.getElementById("txtCantidad")).value=this.dispensadorUso.Cant_Disponible.toString();
        (<HTMLSelectElement>document.getElementById("txtTotal")).value=(this.dispensadorUso.Cant_Disponible*this.dispensadorUso.Precio).toString()+" $";
      }
    
    }else{
      let total:number=value/this.dispensadorUso.Precio;
      console.log(total);
      if(total<this.dispensadorUso.Cant_Disponible){
        this.cantidad=total;
        this.total=value;
        (<HTMLSelectElement>document.getElementById("txtTotal")).value=total.toString()+" GL";
      }else{
        this.cantidad=this.dispensadorUso.Cant_Disponible;
        this.total=this.dispensadorUso.Cant_Disponible*this.dispensadorUso.Precio;
        (<HTMLSelectElement>document.getElementById("txtCantidad")).value=(this.dispensadorUso.Cant_Disponible*this.dispensadorUso.Precio).toString();
        (<HTMLSelectElement>document.getElementById("txtTotal")).value=this.dispensadorUso.Cant_Disponible.toString()+" GL";
      }
      //(<HTMLSelectElement>document.getElementById("txtTotal")).value='';
    }
  }
  GuardarFac(){
    let ven:Venta={
      Id:0,
      Fecha:'',
      Cantidad:this.cantidad,
      ID_Dispensador:this.dispensadorUso.Id,
      ID_Placa:this.idPlaca,
      Total:this.total,
      IdCombustible:this.dispensadorUso.IdConbustible,
      NuevaCant:this.dispensadorUso.Cant_Disponible-this.cantidad
    }
    if(ven.ID_Placa==0){
      this.presentToast('No se a seleccionado ningun auto');
    }else if(ven.ID_Dispensador==0){
      this.presentToast('No se a seleccionado ningun dispensaor');
    }else if(ven.Cantidad==0){
      this.presentToast('No se a ingresado una cantidad');
    }else{
      this.serFactura.PostFactura(ven).subscribe(
        res => {
          console.log(res);
          this.Limpiar();
         
        },
        err => {
          console.log(err);
  
         this.presentToast('Error al guardar');
        }
  
      );



    }
  }
  Limpiar(){
    this.ClienteUso=undefined;
    this.idPlaca=0;
    this.dispensadorUso=undefined;
    this.cantidad=0;
    this.total=0;
    this.listaPlacas=[];
    //this.cargarCliente();
    (<HTMLSelectElement>document.getElementById("txtCedula")).value = '';
    (<HTMLSelectElement>document.getElementById("txtNombre")).value = '';
    (<HTMLSelectElement>document.getElementById("txtDireccion")).value ='';
    (<HTMLSelectElement>document.getElementById("txtTelefono")).value = '';
    (<HTMLSelectElement>document.getElementById("selPlaca")).value='';
    (<HTMLSelectElement>document.getElementById("selMaquina")).value='';
    (<HTMLSelectElement>document.getElementById("selDispesador")).value='';
    (<HTMLSelectElement>document.getElementById("txtCantidad")).value='';
    (<HTMLSelectElement>document.getElementById("txtTotal")).value='';
    
  }
}
