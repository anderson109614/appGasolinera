import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IslaPage } from './isla.page';

const routes: Routes = [
  {
    path: '',
    component: IslaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IslaPageRoutingModule {}
