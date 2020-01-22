import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LisDispensadorPageRoutingModule } from './lis-dispensador-routing.module';

import { LisDispensadorPage } from './lis-dispensador.page';
import {DispensadorPage} from '../dispensador/dispensador.page';
import {DispensadorPageModule} from '../dispensador/dispensador.module';
@NgModule({
  entryComponents:[DispensadorPage],
  imports: [
    DispensadorPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    LisDispensadorPageRoutingModule
  ],
  declarations: [LisDispensadorPage]
})
export class LisDispensadorPageModule {}
