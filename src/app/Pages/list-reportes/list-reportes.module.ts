import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListReportesPageRoutingModule } from './list-reportes-routing.module';

import { ListReportesPage } from './list-reportes.page';
import {ReportePageModule} from '../reporte/reporte.module';
import {ReportePage} from '../reporte/reporte.page';
@NgModule({
  entryComponents:[ReportePage],
  imports: [
    ReportePageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ListReportesPageRoutingModule
  ],
  declarations: [ListReportesPage]
})
export class ListReportesPageModule {}
