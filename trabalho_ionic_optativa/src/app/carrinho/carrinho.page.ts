import { Component, OnInit } from '@angular/core';
import { BolosService } from '../services/bolos.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  bolo: any;
  idBolo: number;
  constructor(
    private boloService: BolosService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private route: ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
    this.idBolo = parseInt(this.route.snapshot.paramMap.get('idBolo'));
    if( this.idBolo != null ) {
      this.boloService.getBoloId(this.idBolo)
        .subscribe ( res => {
          this.bolo = res;
        })
    }

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
