import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FuncpamPageRoutingModule } from './funcpam-routing.module';

import { FuncpamPage } from './funcpam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: FuncpamPage }]),
    FuncpamPageRoutingModule
  ],
  declarations: [FuncpamPage]
})
export class FuncpamPageModule {}
