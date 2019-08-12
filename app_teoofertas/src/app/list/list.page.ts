import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NavController, Platform, IonRouterOutlet, ToastController } from '@ionic/angular';
import { ProdutosService } from '../services/produtos.service';
import { Produto } from '../models/produto.model';


import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
  backButtonSubscription; 
  produtos: Produto[] = [];
  terxtoBuscar = '';
  public data = new Date();
  isSearchbar = false;

  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  constructor(public navCtrl: NavController, 
    private toast: ToastController,
    private produtosService: ProdutosService,
    private platform: Platform,
    private apollo: Apollo
    ){

      
      
      this.data;
  }

  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: ModalFilterPage
  //   });
    
  //   return await modal.present();
    
  // }
  buscarProduto( event){
    const texto = event.target.value;
    this.terxtoBuscar = texto;
  }
  ionViewWillEnter() {
    
  }
  doRefresh(event) {
    this.produtos = [];
    setTimeout(() => {
      this.reloadData();
      event.target.complete();
    }, 2000);
  }

  reloadData(){
    this.terxtoBuscar = '';
    this.getProdutos();
    // this.produtos = this.produtosService.getProdutos()
  }
  ngOnInit() {

    // this.produtos = this.produtosService.getProdutos()
    this.getProdutos();
    // console.log(this.produtos);
      //   .subscribe( resp => this.produtos = resp
      // );
  }
  async presentToast(mensagem:string) {
    const toast = await this.toast.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }
 
  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }


  getProdutos(){
    this.produtos = [];
    this.apollo
      .watchQuery<Produto[]>({
        query: gql`
          {
            allOfertas {
              id_oferta,
              descricao_oferta,
              valor_oferta,
              imagem_oferta,
              empresa_id {
                nome_fantasia,
                imagem
              }
            }
          }
        `,
      })
      .valueChanges.subscribe(result => {
        this.produtos = result.data['allOfertas'];
        // this.produtos = result.data && result.data.produtos;
      });

    // return  this.http.get<Produto[]>('http://appteoofertas.klouro.com.br/api/loadProdutos.php')
    //   .pipe(
    //     delay( 2500 )
    //   );
  }
}
