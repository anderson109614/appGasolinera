import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {con} from '../Modelos/coneccion';
import { Isla } from '../Modelos/Isla';
@Injectable({
  providedIn: 'root'
})
export class IslasService {

  ip = con.ipser;
  constructor(private http:HttpClient) { }

  getIslas(){
    return this.http.get(this.ip + 'Usuarios/Islas.php')
  }
  PostIsla(cli:Isla){
    return this.http.post<Isla>(this.ip + 'Usuarios/Islas.php',cli)
  }
  
  UptateIsla(cli:Isla){
    return this.http.put<Isla>(this.ip + 'Usuarios/Islas.php',cli)
  }
  eliminarIsla(cli:Isla){
    return this.http.delete(this.ip + 'Usuarios/Islas.php?id='+cli.Id)
  }
}
