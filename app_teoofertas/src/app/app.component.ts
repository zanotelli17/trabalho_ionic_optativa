import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Produdos',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Cadastrar por Cod. Barras',
      url: '/cadastrar',
      icon: 'barcode'
    },
    {
      title: 'Cadastrar por Qrcode',
      url: '/cadastrar-qrcode',
      icon: 'qr-scanner'
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
      // set status bar to white
      this.statusBar.backgroundColorByHexString('#848484');
      this.splashScreen.hide();
    });
  }
}
