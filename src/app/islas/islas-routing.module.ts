import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IslasPage } from './islas.page';

const routes: Routes = [
  {
    path: '',
    component: IslasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IslasPageRoutingModule {}
