import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListReportesPage } from './list-reportes.page';

const routes: Routes = [
  {
    path: '',
    component: ListReportesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListReportesPageRoutingModule {}
