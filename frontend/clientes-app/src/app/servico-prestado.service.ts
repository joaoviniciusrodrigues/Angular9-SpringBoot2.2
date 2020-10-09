import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import {environment} from '../environments/environment';
import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-lista/servicoPrestadoBusca';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiURL + '/api/servicos-prestados';

  constructor(private http: HttpClient) {}

  salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado>{
    console.log(servicoPrestado);
    return this.http.post<ServicoPrestado>(this.apiURL, servicoPrestado);
  }

  buscar(nome: string, mes: number): Observable<ServicoPrestadoBusca[]>{
   
    const httpParams = new HttpParams().set("nome", nome ? nome : "").set("mes", mes ? mes.toString() : "");
        
    const url = this.apiURL + "?" + httpParams.toString();

    return this.http.get<any>(url);

  }

  deleteById(servicoPrestado: ServicoPrestadoBusca): Observable<any>{    
    return this.http.delete<any>(`${this.apiURL}/${servicoPrestado.id}`);    
  }

  getServicoPrestadoById(id:number): Observable<ServicoPrestado>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }
  
}
