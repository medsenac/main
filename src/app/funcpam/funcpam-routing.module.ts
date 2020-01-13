import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncpamPage } from './funcpam.page';

const routes: Routes = [
  {
    path: '',
    component: FuncpamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncpamPageRoutingModule {}
