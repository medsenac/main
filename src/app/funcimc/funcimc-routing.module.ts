import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncimcPage } from './funcimc.page';

const routes: Routes = [
  {
    path: '',
    component: FuncimcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncimcPageRoutingModule {}
