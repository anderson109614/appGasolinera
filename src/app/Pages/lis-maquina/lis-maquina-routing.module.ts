import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LisMaquinaPage } from './lis-maquina.page';

import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: LisMaquinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LisMaquinaPageRoutingModule {}
