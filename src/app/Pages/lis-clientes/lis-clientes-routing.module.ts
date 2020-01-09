import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LisClientesPage } from './lis-clientes.page';

const routes: Routes = [
  {
    path: '',
    component: LisClientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LisClientesPageRoutingModule {}
