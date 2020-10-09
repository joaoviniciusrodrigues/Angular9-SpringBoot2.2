import { Component, OnInit } from '@angular/core';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { ServicoPrestado } from '../servicoPrestado';
import { ServicoPrestadoBusca } from './servicoPrestadoBusca';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: ['./servico-prestado-lista.component.css']
})
export class ServicoPrestadoListaComponent implements OnInit {

  nome: string;
  mes: number;
  meses: number[];
  lista: ServicoPrestadoBusca[];
  servicoPrestadoSelecionado: ServicoPrestadoBusca;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private servicoPrestadoService: ServicoPrestadoService) {
    this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    
  }

  ngOnInit(): void {
    this.consultar();
  }

  consultar(){
    this.servicoPrestadoService
    .buscar(this.nome, this.mes)
    .subscribe(response => this.lista = response);
  }

  deleta() {
    this.servicoPrestadoService.deleteById(this.servicoPrestadoSelecionado).subscribe(
      response => {
        this.mensagemSucesso = "Serviço prestado excluido com sucesso!"
        this.ngOnInit()
      },
      error => this.mensagemErro = "Erro ao excluir serviço prestado"
    );
  }

  carregaServicoPrestadoSelecionado(servicoPrestado: ServicoPrestadoBusca){
    this.servicoPrestadoSelecionado = servicoPrestado;
  }

}
