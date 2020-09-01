import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteServise: ClientesService, private router: Router) {
  }

  ngOnInit(): void {
    this.clienteServise.getCliente().
    subscribe(resposta => this.clientes = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/cliente-form']);
  }

  

}
