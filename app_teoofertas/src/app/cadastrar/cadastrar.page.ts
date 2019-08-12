import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  encodeData: any;
  public items: any;
  scannedData: {};
  public produto = {
    codigo: '',
    supermecado: '',
    dataTermino: '',
    valor: ''
  };
  code:string;
  barcodeScannerOptions: BarcodeScannerOptions;
  
  constructor(public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner,
    private toast: ToastController,
    private http: HttpClient,
    private router: Router
    ) {
      this.loadSupermecados();
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
      
    }

    navigate(){
      this.router.navigate(['/list'])
    }
    ngOnInit(): void {
    
    }

    loadSupermecados(){
      let data:Observable<any>;
      data = this.http.get('http://appteoofertas.klouro.com.br/api/loadSupermercados.php');
      data.subscribe(result => {
        this.items = result;
      });
    }
  async presentToast(mensagem:string) {
    const toast = await this.toast.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }
  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        this.scannedData = barcodeData;
        this.code = barcodeData['text'];
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  cadastrar(form) {
    console.log(form.value.codigo)
    this.produto.codigo = form.value.codigo;
    this.produto.supermecado = form.value.supermecado;
    this.produto.dataTermino = form.value.dataTermino;
    this.produto.valor = form.value.valor;

    let url = "http://appteoofertas.klouro.com.br/api/cadProduto.php?"+
      "cod_barra="+form.value.codigo+"&supermercado="+form.value.supermecado+"&"+
      "fim="+form.value.dataTermino+"&preco="+form.value.valor;
      console.log(url);
    let data:Observable<any>;
    data = this.http.get(url);
    data.subscribe(result => {
      console.log(url);
      this.presentToast('Produto cadastrado');
      this.navigate();
    });

  }
}
