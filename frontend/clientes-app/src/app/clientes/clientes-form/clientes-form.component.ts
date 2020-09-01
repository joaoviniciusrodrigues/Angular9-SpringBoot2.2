import { Router, ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Cliente} from '../cliente'
import { ClientesService } from 'src/app/clientes.service';


@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {
  success : boolean; 
  cliente : Cliente;
  errors : String[];
  id: number;

  constructor(private clienteService: ClientesService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.cliente = new Cliente();
    this.success = false;  
  }

  ngOnInit(): void {

    let params = this.activatedRoute.params;
    if(params && params.value && params.value.id){
      this.id = params.value.id;
      this.clienteService.getClienteById(this.id)
      .subscribe(
        response => this.cliente = response,
        errorResposnse => this.cliente = new Cliente()
      )
    }
  }

  onSubmit(){
    
    this.clienteService.salvar(this.cliente).subscribe(response => {
      
      this.success = true;
      this.errors = null;
      this.cliente = response; 
      this.voltar();

    }, erroResponse =>{

      this.errors = erroResponse.error.errors;
      this.success = false;

    }
    
    )
  }

  voltar(){
    this.router.navigate(['/cliente-lista']);
  }

}
