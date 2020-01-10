import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
