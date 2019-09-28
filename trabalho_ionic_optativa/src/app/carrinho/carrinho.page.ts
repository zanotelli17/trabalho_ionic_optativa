import { Component, OnInit } from '@angular/core';
import { BolosService } from '../services/bolos.service';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  bolo: any;
  constructor(
    private boloService: BolosService,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) { 
    this.bolo = boloService.getBoloId();
  }

  ngOnInit() {
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Quase la...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    this.presentAlert();
  } 

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Pedido confirmado',
      message: 'Jajá estará ai...',
      buttons: ['OK']
    });

    await alert.present();
  }
}
