import { Component , Inject , Injectable} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Login} from './Modelos/Login';
import {LoginService} from './servicios/login.service';
import {LocalStorageService} from 'ngx-webstorage';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Facturacion',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Clientes',
      url: '/clientes',
      icon: 'list'
    },
    {
      title: 'Combustibles',
      url: '/list-combustibles',
      icon: 'list'
    },
    {
      title: 'Islas',
      url: '/list-islas',
      icon: 'list'
    },
    {
      title: 'Usuarios',
      url: '/list-usuarios',
      icon: 'list'
    },
    {
      title: 'Reportes',
      url: '/list-reportes',
      icon: 'list'
    }

  ];

  constructor(
    private storage:LocalStorageService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginService: LoginService,
    
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
    
  }
  ngOnInit() {
    let lg:Login=this.storage.retrieve('Usuario');
    if(lg!=null){
      this.MostrarLogin(false);
    }else{
      this.MostrarLogin(true);
    }
    
  }
  MostrarLogin(estado:boolean){
    console.log('entro');
    if(estado){
      (<HTMLDivElement>document.getElementById('DivPagina')).style.display='none';
    (<HTMLDivElement>document.getElementById('DivLogin')).style.display='block';
    }else{
      (<HTMLDivElement>document.getElementById('DivPagina')).style.display='block';
      (<HTMLDivElement>document.getElementById('DivLogin')).style.display='none';
      
    }
    
  }
  onClickLogin(){
    
    var usr= (<HTMLInputElement>document.getElementById("txt-login-username")).value;
    var cont= (<HTMLInputElement>document.getElementById("txt-login-password")).value;
    let log:Login={
      Id:0,
      Cedula:usr,
      Nombre:'',
      Apellido:'',
      Telefono:'',
      Direccion:'',
      Contraseña:cont,
      Rol:''

    }
    this.loginService.GenerarLogin(log).subscribe(
      res => {
        try {
          if(res[0].id!=0){
            this.MostrarLogin(false);
           this.storage.store('Usuario',res[0]);
            this.mostrarMenu(res[0]);
          //this.router.navigateByUrl('/home');
          } 
        }
        catch(e) {
          (<HTMLLabelElement>document.getElementById('lbl_error')).style.display='block';
          (<HTMLLabelElement>document.getElementById('lbl_error')).textContent="Error.... Ingrese un usuario y contraseña validos!!";

        }


        
      },
      err => console.log(err)
    );
  }
  mostrarMenu(res:Login){
    if(res.Rol='Administrador'){
     this.appPages = [
        {
          title: 'Facturacion',
          url: '/home',
          icon: 'home'
        },
        {
          title: 'Clientes',
          url: '/clientes',
          icon: 'list'
        },
        {
          title: 'Combustibles',
          url: '/list-combustibles',
          icon: 'list'
        },
        {
          title: 'Islas',
          url: '/list-islas',
          icon: 'list'
        },
        {
          title: 'Usuarios',
          url: '/list-usuarios',
          icon: 'list'
        },
        {
          title: 'Reportes',
          url: '/list-reportes',
          icon: 'list'
        }
    
      ];
    }else{
      this.appPages = [
        {
          title: 'Facturacion',
          url: '/home',
          icon: 'home'
        },
        {
          title: 'Clientes',
          url: '/clientes',
          icon: 'list'
        }
    
      ];
    }
  }
}
