import { Component, OnInit } from '@angular/core';
import {Cliente} from '../cliente'
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente : Cliente;

  constructor(clienteService: ClientesService) { 
    this.cliente = clienteService.getCliente();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.cliente);
  }

}
