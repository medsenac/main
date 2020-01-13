import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPacientePage } from './list-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: ListPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPacientePageRoutingModule {}
