import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCombustiblesPageRoutingModule } from './list-combustibles-routing.module';

import { ListCombustiblesPage } from './list-combustibles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCombustiblesPageRoutingModule
  ],
  declarations: [ListCombustiblesPage]
})
export class ListCombustiblesPageModule {}
