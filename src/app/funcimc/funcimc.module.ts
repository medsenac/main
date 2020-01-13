import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FuncimcPageRoutingModule } from './funcimc-routing.module';

import { FuncimcPage } from './funcimc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: FuncimcPage }]),
    FuncimcPageRoutingModule
  ],
  declarations: [FuncimcPage]
})
export class FuncimcPageModule {}
