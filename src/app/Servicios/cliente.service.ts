import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {con} from '../Modelos/coneccion';
import { Cliente } from '../Modelos/Cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  ip = con.ipser;
  constructor(private http:HttpClient) { }
  getClientes(){
    return this.http.get(this.ip + 'Clientes/Clientes.php')
  }
  PostClientes(cli:Cliente){
    return this.http.post<Cliente>(this.ip + 'Clientes/Clientes.php',cli)
  }
  getAutos(id:string){
    return this.http.get(this.ip + 'Clientes/Autos.php?id='+id)
  }
  UptateClientes(cli:Cliente){
    return this.http.put<Cliente>(this.ip + 'Clientes/Clientes.php',cli)
  }
  eliminarClientes(cli:Cliente){
    return this.http.delete(this.ip + 'Clientes/Clientes.php?id='+cli.Id)
  }
  

}
