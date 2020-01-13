import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditsujeitoPage } from './editsujeito.page';

const routes: Routes = [
  {
    path: '',
    component: EditsujeitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditsujeitoPageRoutingModule {}
