import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCombustiblesPageRoutingModule } from './list-combustibles-routing.module';

import { ListCombustiblesPage } from './list-combustibles.page';
import {CombustiblePage} from '../combustible/combustible.page';
import {CombustiblePageModule} from '../combustible/combustible.module';
@NgModule({
  entryComponents:[CombustiblePage],
  imports: [
    CombustiblePageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ListCombustiblesPageRoutingModule
  ],
  declarations: [ListCombustiblesPage]
})
export class ListCombustiblesPageModule {}
