import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente'
import { ClientesService } from 'src/app/clientes.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {
  success: boolean;
  cliente: Cliente;
  errors: String[];
  id: number;

  constructor(private clienteService: ClientesService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.cliente = new Cliente();
    this.success = false;
  }

  ngOnInit(): void {

    let params: Observable<Params> = this.activatedRoute.params;

    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.clienteService.getClienteById(this.id)
          .subscribe(
            response => this.cliente = response,
            errorResposnse => this.cliente = new Cliente()
          )
      }
    })
  
  }

  onSubmit() {

    if (this.cliente.id) {
      this.clienteService.atualizar(this.cliente).subscribe(response => {

        this.success = true;
        this.errors = null;

      }, erroResponse => {

        this.errors = ['Erro ao atulaizar cliente.'];
        this.success = false;

      })
    } else {
      this.clienteService.salvar(this.cliente).subscribe(response => {

        this.success = true;
        this.errors = null;
        this.cliente = response;

      }, erroResponse => {

        this.errors = erroResponse.error.errors;
        this.success = false;

      })
    }





  }

  voltar() {
    this.router.navigate(['/cliente-lista']);
  }


}
