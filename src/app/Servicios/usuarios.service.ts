import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {con} from '../Modelos/coneccion';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  ip = con.ipser;
  constructor(private http:HttpClient) { }
  getIslas(id:string){
    return this.http.get(this.ip + 'Usuarios/Islas.php?id='+id)
  }
  getMaquinas(id:string){
    return this.http.get(this.ip + 'Usuarios/Maquinas.php?id='+id)
  }
  getDispensador(id:string){
    return this.http.get(this.ip + 'Usuarios/Dispensadores.php?id='+id)
  }
}
