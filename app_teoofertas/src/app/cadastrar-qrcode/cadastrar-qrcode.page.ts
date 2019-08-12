import { Component, OnInit } from '@angular/core';
import { BarcodeScannerOptions, BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-cadastrar-qrcode',
  templateUrl: './cadastrar-qrcode.page.html',
  styleUrls: ['./cadastrar-qrcode.page.scss'],
})
export class CadastrarQrcodePage implements OnInit {
  
  retorno: any;
  scannedData: {};
  code:string;
  barcodeScannerOptions: BarcodeScannerOptions;
  constructor(public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner,
    private toast: ToastController,
    private http: HttpClient,
    private router: Router,
    public loadingController: LoadingController) { 

      this.barcodeScannerOptions = {
        showTorchButton: true,
        showFlipCameraButton: true
      };

      this.scanCode();
     
  }
  
  ngOnInit() {
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Ta quase la!',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  async presentToast(mensagem:string) {
    const toast = await this.toast.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }
  navigate(){
    this.router.navigate(['/list'])
  }

  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        this.scannedData = barcodeData;
        this.code = barcodeData['text'];
        let url = "http://appteoofertas.klouro.com.br/api/nfce.php?"+
        "url="+this.code;
        let data:Observable<any>;
        data = this.http.get(url);
        this.presentLoading();
        data.subscribe(result => {
          this.presentToast('Nota cadastrada!');
          this.navigate();
        },err => {
          this.presentToast('Nota ja cadastrada!');
          this.navigate();
        });
        
        // console.log(this.retorno);
      })
      .catch(err => {
        console.log("Error", err);
        
    });
    
  }
}
