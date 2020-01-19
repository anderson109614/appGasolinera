import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LisClientesNMPageRoutingModule } from './lis-clientes-nm-routing.module';

import { LisClientesNMPage } from './lis-clientes-nm.page';
import {ClientePageModule} from '../../Pages/cliente/cliente.module';
import {ClientePage} from '../../Pages/cliente/cliente.page';
@NgModule({
  entryComponents:[
    ClientePage
  ],
  imports: [
    CommonModule,
    ClientePageModule,
    FormsModule,
    IonicModule,
    LisClientesNMPageRoutingModule
  ],
  declarations: [LisClientesNMPage]
})
export class LisClientesNMPageModule {}
