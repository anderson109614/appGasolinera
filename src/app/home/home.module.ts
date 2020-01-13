import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {LisClientesPageModule} from '../Pages/lis-clientes/lis-clientes.module';
import {LisClientesPage} from '../Pages/lis-clientes/lis-clientes.page';
import {ClientePageModule} from '../Pages/cliente/cliente.module';
import {ClientePage} from '../Pages/cliente/cliente.page';
@NgModule({
  entryComponents:[LisClientesPage,ClientePage],
  imports: [
    ClientePageModule,
    LisClientesPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
