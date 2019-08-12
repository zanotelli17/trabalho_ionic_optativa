import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrarQrcodePage } from './cadastrar-qrcode.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarQrcodePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrarQrcodePage]
})
export class CadastrarQrcodePageModule {}
