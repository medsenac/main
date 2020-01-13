import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditadmPageRoutingModule } from './editadm-routing.module';

import { EditadmPage } from './editadm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditadmPageRoutingModule
  ],
  declarations: [EditadmPage]
})
export class EditadmPageModule {}
