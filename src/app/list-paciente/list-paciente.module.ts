import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPacientePageRoutingModule } from './list-paciente-routing.module';

import { ListPacientePage } from './list-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPacientePageRoutingModule
  ],
  declarations: [ListPacientePage]
})
export class ListPacientePageModule {}
