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
  clienteSelecionado: Cliente;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private clienteServise: ClientesService, private router: Router) {
  }

  ngOnInit(): void {
    this.clienteServise.getClientes().
      subscribe(resposta => this.clientes = resposta);
  }

  novoCadastro() {
    this.router.navigate(['/clientes/form']);
  }

  deleta() {
    this.clienteServise.deleteById(this.clienteSelecionado).subscribe(
      response => {
        this.mensagemSucesso = "Cliente excluido com sucesso!"
        this.ngOnInit()
      },
      error => this.mensagemErro = "Erro ao excluir cliente"
    );
  }

  carregaClienteSelecionado(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  }



}
