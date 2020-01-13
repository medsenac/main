import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientedetalhePageRoutingModule } from './pacientedetalhe-routing.module';

import { PacientedetalhePage } from './pacientedetalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacientedetalhePageRoutingModule
  ],
  declarations: [PacientedetalhePage]
})
export class PacientedetalhePageModule {}
