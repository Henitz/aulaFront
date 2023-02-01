import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clientes } from './clientes';



@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private baseClienteUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.baseClienteUrl + `/clientes/`)
  }

  save(Clientes: Clientes) {
    return this.http.post<Clientes>(this.baseClienteUrl + `/clientes`, Clientes)
  }

  getOne(id: number) {
    return this.http.get<Clientes>(this.baseClienteUrl + `/clientes/${id}`)
  }

  delete(id: number) : Observable<any> {
    return this.http.delete<any>(this.baseClienteUrl + `/clientes/${id}`)
  }

  changeAtivo(id: number) : Observable<any> {
    return this.http.patch<any>(this.baseClienteUrl + `/clientes/${id}` + "/ativo", null)
  }

  update(id: number, Clientes: Clientes) {
    return this.http.put(this.baseClienteUrl + `/clientes/${id}`, Clientes)
  }
}
