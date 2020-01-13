import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditsujeitoPageRoutingModule } from './editsujeito-routing.module';

import { EditsujeitoPage } from './editsujeito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditsujeitoPageRoutingModule
  ],
  declarations: [EditsujeitoPage]
})
export class EditsujeitoPageModule {}
