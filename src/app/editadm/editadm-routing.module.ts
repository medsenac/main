import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditadmPage } from './editadm.page';

const routes: Routes = [
  {
    path: '',
    component: EditadmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditadmPageRoutingModule {}
