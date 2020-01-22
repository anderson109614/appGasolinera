import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {con} from '../Modelos/coneccion';
import { Isla } from '../Modelos/Isla';
import { Maquina } from '../Modelos/Maquina';
import { DispensadorC } from '../Modelos/DispensadorC';
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
  ////////
  getMAquinas(){
    return this.http.get(this.ip + 'Usuarios/Maquinas.php')
  }
  PostMAquinas(cli:Maquina){
    return this.http.post<Maquina>(this.ip + 'Usuarios/Maquinas.php',cli)
  }
  
  UptateMAquinas(cli:Maquina){
    return this.http.put<Maquina>(this.ip + 'Usuarios/Maquinas.php',cli)
  }
  eliminarMAquinas(cli:Maquina){
    return this.http.delete(this.ip + 'Usuarios/Maquinas.php?id='+cli.Id)
  }
  ////////
  getDispensadores(){
    return this.http.get(this.ip + 'Usuarios/Dispensadores.php')
  }
  PostDispensadores(cli:DispensadorC){
    return this.http.post<DispensadorC>(this.ip + 'Usuarios/Dispensadores.php',cli)
  }
  
  UptateDispensadores(cli:DispensadorC){
    return this.http.put<DispensadorC>(this.ip + 'Usuarios/Dispensadores.php',cli)
  }
  eliminarDispensadores(cli:DispensadorC){
    return this.http.delete(this.ip + 'Usuarios/Dispensadores.php?id='+cli.Id)
  }
}
