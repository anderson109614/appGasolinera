import { Component, OnInit } from '@angular/core';
import {CombustiblesService} from '../../Servicios/combustibles.service';
import { ModalController, ToastController } from '@ionic/angular';
import {  IslaPage } from '../../Pages/isla/isla.page';
import  { Isla } from '../../Modelos/Isla';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-list-islas',
  templateUrl: './list-islas.page.html',
  styleUrls: ['./list-islas.page.scss'],
})
export class ListIslasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
