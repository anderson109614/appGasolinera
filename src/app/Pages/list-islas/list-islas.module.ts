import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListIslasPageRoutingModule } from './list-islas-routing.module';

import { ListIslasPage } from './list-islas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListIslasPageRoutingModule
  ],
  declarations: [ListIslasPage]
})
export class ListIslasPageModule {}
