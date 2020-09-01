import { Router } from '@angular/router';
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

  constructor(private clienteService: ClientesService, private router: Router) { 
    this.cliente = new Cliente();
    this.success = false;  
  }

  ngOnInit(): void {
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
