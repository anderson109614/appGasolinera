import { Component, OnInit } from '@angular/core';
import {ReportePage} from '../reporte/reporte.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-list-reportes',
  templateUrl: './list-reportes.page.html',
  styleUrls: ['./list-reportes.page.scss'],
})
export class ListReportesPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async MostrarReporte(Nombre:string){
    const modal = await this.modalController.create({
      component: ReportePage,
      componentProps: {
        ruta: 'Reportes/'+Nombre
      }
  
    });
    await modal.present();
  
    
  }
}
