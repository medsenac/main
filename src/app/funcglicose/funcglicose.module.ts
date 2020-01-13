import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FuncglicosePageRoutingModule } from './funcglicose-routing.module';

import { FuncglicosePage } from './funcglicose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: FuncglicosePage }]),
    FuncglicosePageRoutingModule

  ],
  declarations: [FuncglicosePage]
})
export class FuncglicosePageModule {}
