import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {con} from '../Modelos/coneccion';
import {Venta  } from '../Modelos/Venta';
@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  ip = con.ipser;
  constructor(private http:HttpClient) { }

  PostFactura(cli:Venta){
    return this.http.post<Venta>(this.ip + 'Paquetes/Venta.php',cli)
  }





}
