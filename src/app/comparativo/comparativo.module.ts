import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComparativoPageRoutingModule } from './comparativo-routing.module';

import { ComparativoPage } from './comparativo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComparativoPageRoutingModule
  ],
  declarations: [ComparativoPage]
})
export class ComparativoPageModule {}
