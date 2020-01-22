import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaquinaPage } from './maquina.page';

const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaquinaPageRoutingModule {}
