import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {con} from '../Modelos/coneccion';
import { Usuario } from '../Modelos/Usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  ip = con.ipser;
  constructor(private http:HttpClient) { }
  getIslas(id:string){
    return this.http.get(this.ip + 'Usuarios/Islas.php?id='+id)
  }

  
  getRoles(){
    return this.http.get(this.ip + 'Usuarios/Roles.php')
  }
  getMaquinas(id:string){
    return this.http.get(this.ip + 'Usuarios/Maquinas.php?id='+id)
  }
  getDispensador(id:string){
    return this.http.get(this.ip + 'Usuarios/Dispensadores.php?id='+id)
  }
  getUsuarios(){
    return this.http.get(this.ip + 'Usuarios/UsuariosC.php')
  }
  postUsuarios(usr:Usuario){
    return this.http.post<Usuario>(this.ip + 'Usuarios/UsuariosC.php',usr)
  }
  putUsuarios(usr:Usuario){
    return this.http.put<Usuario>(this.ip + 'Usuarios/UsuariosC.php',usr)
  }
  DelUsuarios(usr:Usuario){
    return this.http.delete<Usuario>(this.ip + 'Usuarios/UsuariosC.php?id='+usr.Id)
  }
}
