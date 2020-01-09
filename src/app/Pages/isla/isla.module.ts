import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IslaPageRoutingModule } from './isla-routing.module';

import { IslaPage } from './isla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IslaPageRoutingModule
  ],
  declarations: [IslaPage]
})
export class IslaPageModule {}
