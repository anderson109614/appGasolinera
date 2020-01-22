import { Component, OnInit, Input } from '@angular/core';
import {con} from '../../Modelos/coneccion';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.page.html',
  styleUrls: ['./reporte.page.scss'],
})
export class ReportePage implements OnInit {
  @Input() ruta: string;
  constructor(public modalController: ModalController) { }
  ip = con.ipser;
  ngOnInit() {
    var iframe=<HTMLIFrameElement>document.getElementById('FrameReporte');
    console.log(this.ip+this.ruta);  
    iframe.src=this.ip+this.ruta;



  }
  regresarBTN() {
    this.modalController.dismiss();
  }

}
