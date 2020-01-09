import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListIslasPage } from './list-islas.page';

const routes: Routes = [
  {
    path: '',
    component: ListIslasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListIslasPageRoutingModule {}
