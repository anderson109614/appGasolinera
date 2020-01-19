import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LisClientesNMPage } from './lis-clientes-nm.page';

const routes: Routes = [
  {
    path: '',
    component: LisClientesNMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LisClientesNMPageRoutingModule {}
