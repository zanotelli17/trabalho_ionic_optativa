import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from '../models/produto.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( produtos: Produto[], texto: string): Produto[] {
    
    if( texto.length === 0 ) { return produtos; }

    texto = texto.toLocaleLowerCase();

    return produtos.filter( produto => {
      return produto.descricao_oferta.toLocaleLowerCase().includes(texto)
      || produto.empresa_id.nome_fantasia.toLocaleLowerCase().includes(texto);
    });
            // || produto.nomeSupermercado.toLocaleLowerCase().includes(texto);
  }

}
