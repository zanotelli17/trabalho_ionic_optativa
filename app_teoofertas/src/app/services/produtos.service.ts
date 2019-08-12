import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto.model';

import { delay } from 'rxjs/operators'

import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
 
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: Produto[];

  constructor( private http: HttpClient,private apollo: Apollo) { }

  getProdutos(){
    this.apollo
      .watchQuery<Produto[]>({
        query: gql`
          {
            allOfertas {
              id_oferta,
              descricao_oferta,
              valor_oferta
              empresa_id {
                nome_fantasia
              }
            }
          }
        `,
      })
      .valueChanges.subscribe(result => {
        this.produtos = result.data['allOfertas'];
        // this.produtos = result.data && result.data.produtos;
      });

      return this.produtos;

    // return  this.http.get<Produto[]>('http://appteoofertas.klouro.com.br/api/loadProdutos.php')
    //   .pipe(
    //     delay( 2500 )
    //   );
  }
}
