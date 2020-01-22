import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LisMaquinaPageRoutingModule } from './lis-maquina-routing.module';

import { LisMaquinaPage } from './lis-maquina.page';
import {MaquinaPage} from '../maquina/maquina.page';
import {MaquinaPageModule} from '../maquina/maquina.module';
@NgModule({
  entryComponents:[MaquinaPage],
  imports: [
    MaquinaPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    LisMaquinaPageRoutingModule
  ],
  declarations: [LisMaquinaPage]
})
export class LisMaquinaPageModule {}
