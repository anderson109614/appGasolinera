import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {con} from '../Modelos/coneccion';
import { Combustible } from '../Modelos/Combustible';
@Injectable({
  providedIn: 'root'
})
export class CombustiblesService {

  ip = con.ipser;
  constructor(private http:HttpClient) { }

  getCombustibles(){
    return this.http.get(this.ip + 'Combustibles/Combustibles.php')
  }
  PostCombustibles(cli:Combustible){
    return this.http.post<Combustible>(this.ip + 'Combustibles/Combustibles.php',cli)
  }
  
  UptateCombustibles(cli:Combustible){
    return this.http.put<Combustible>(this.ip + 'Combustibles/Combustibles.php',cli)
  }
  eliminarCombustibles(cli:Combustible){
    return this.http.delete(this.ip + 'Combustibles/Combustibles.php?id='+cli.Id)
  }
}
