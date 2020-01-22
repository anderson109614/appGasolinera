import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListIslasPageRoutingModule } from './list-islas-routing.module';

import { ListIslasPage } from './list-islas.page';
import {IslaPage} from '../isla/isla.page';
import {IslaPageModule} from '../isla/isla.module';
@NgModule({
  entryComponents:[IslaPage],
  imports: [
    IslaPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ListIslasPageRoutingModule
  ],
  declarations: [ListIslasPage]
})
export class ListIslasPageModule {}
