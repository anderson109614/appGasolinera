import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LisDispensadorPage } from './lis-dispensador.page';

const routes: Routes = [
  {
    path: '',
    component: LisDispensadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LisDispensadorPageRoutingModule {}
