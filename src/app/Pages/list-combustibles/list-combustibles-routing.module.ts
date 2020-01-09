import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCombustiblesPage } from './list-combustibles.page';

const routes: Routes = [
  {
    path: '',
    component: ListCombustiblesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCombustiblesPageRoutingModule {}
