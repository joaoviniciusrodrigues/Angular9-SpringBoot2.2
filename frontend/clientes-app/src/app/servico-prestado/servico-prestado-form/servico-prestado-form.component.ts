import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import { ClientesService } from '../../clientes.service';
import { ServicoPrestado } from '../servicoPrestado';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

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
  id: number;

  constructor(private clienteService: ClientesService, private servicoPrestadoService: ServicoPrestadoService, private activatedRoute: ActivatedRoute) {
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {    
    this.clienteService
      .getClientes()
      .subscribe(response => this.clientes = response);

    let params: Observable<Params> = this.activatedRoute.params;

    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.servicoPrestadoService.getServicoPrestadoById(this.id)
          .subscribe(
            response => {
              this.servico = response;              
            },
            errorResposnse => this.servico = new ServicoPrestado()
          )
      }
    })
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

  }

}
