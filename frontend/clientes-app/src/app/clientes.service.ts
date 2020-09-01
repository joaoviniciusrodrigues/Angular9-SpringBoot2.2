import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  constructor(private http: HttpClient) { }

  getCliente(): Observable<Cliente[]> {

    return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');

  }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }


}
