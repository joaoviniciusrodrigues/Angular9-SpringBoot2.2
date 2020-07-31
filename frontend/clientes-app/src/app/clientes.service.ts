import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  constructor() { }
  
  getCliente(): Cliente{
   
   let cliente: Cliente = new Cliente();
   
   cliente.cpf = '0201212321';
   cliente.nome = 'João Vinicius Rodrigues do Nascimento';
   cliente.id = 1;
   
   return cliente;

  }

 
}
