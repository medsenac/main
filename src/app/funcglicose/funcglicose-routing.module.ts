import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncglicosePage } from './funcglicose.page';

const routes: Routes = [
  {
    path: '',
    component: FuncglicosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncglicosePageRoutingModule {}
