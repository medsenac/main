import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComparativoPage } from './comparativo.page';

const routes: Routes = [
  {
    path: '',
    component: ComparativoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComparativoPageRoutingModule {}
