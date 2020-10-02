import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import { ClientesService } from '../../clientes.service';
import { ServicoPrestado } from '../servicoPrestado';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {
  success: boolean;
  errors: String[];
  clientes: Cliente[] = [];
  servico: ServicoPrestado;

  constructor(private clienteService: ClientesService, private servicoPrestadoService: ServicoPrestadoService) {
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService
      .getClientes()
      .subscribe(response => this.clientes = response);
  }

  onSubmit() {
    this.servicoPrestadoService
      .salvar(this.servico)
      .subscribe(response => {
        
        this.success = true;
        this.errors = null;
        this.servico = new ServicoPrestado();

      }, erroResponse => {
        
        this.errors = erroResponse.error.errors;
        this.success = false;

      }
      );

    console.log(this.servico);
  }

}
