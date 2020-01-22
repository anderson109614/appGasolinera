import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DispensadorPageRoutingModule } from './dispensador-routing.module';

import { DispensadorPage } from './dispensador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DispensadorPageRoutingModule
  ],
  declarations: [DispensadorPage]
})
export class DispensadorPageModule {}
