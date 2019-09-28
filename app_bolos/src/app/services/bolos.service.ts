import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BolosService {

  bolos: any[] = [
    {
      id: 1,
      tipo: 'Bolo de cenoura',
      descricao: 'Bolo simples de cenoura',
      valor: '10.00',
      imagem: 'assets/img/usuario-1898-9dfefeddb69b421fc18bc216ea20c05b.jpg'
    },
    {
      id: 2,
      tipo: 'Bolo de cenoura',
      descricao: 'Bolo simples de cenoura com cobertura de chocolate',
      valor: '15.00',
      imagem: 'assets/img/recipe-bolo-cenoura-formigueiro.jpg'
    },
    {
      id: 3,
      tipo: 'Bolo de cenoura com nozes',
      descricao: 'Bolo simples de cenoura com nozes',
      valor: '20.00',
      imagem: 'assets/img/bolo-de-cenoura-com-nozes.jpg'
    }
  ];
  constructor() { }

  getBolos(){
    return this.bolos;
  }

  getBoloId(){
    return this.bolos[1];
  }
}
