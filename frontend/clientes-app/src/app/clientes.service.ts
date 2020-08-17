import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  constructor(private http : HttpClient) { }

  getCliente(): Cliente {

    let cliente: Cliente = new Cliente();

    cliente.cpf = '0201212321';
    cliente.nome = 'João Vinicius Rodrigues do Nascimento';
    cliente.id = 1;
    cliente.dataCadastro = '10-02-1998';

    return cliente;

  }


}
