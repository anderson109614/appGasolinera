import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaquinaPageRoutingModule } from './maquina-routing.module';

import { MaquinaPage } from './maquina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaquinaPageRoutingModule
  ],
  declarations: [MaquinaPage]
})
export class MaquinaPageModule {}
