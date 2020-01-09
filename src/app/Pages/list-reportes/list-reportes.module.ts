import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListReportesPageRoutingModule } from './list-reportes-routing.module';

import { ListReportesPage } from './list-reportes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListReportesPageRoutingModule
  ],
  declarations: [ListReportesPage]
})
export class ListReportesPageModule {}
