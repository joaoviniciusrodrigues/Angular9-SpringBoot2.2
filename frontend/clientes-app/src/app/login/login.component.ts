import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loginError: boolean;
  cadastrando: boolean;
  mensagemSucesso: string;
  errors: string[];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService
          .tentarLogar(this.username, this.password)
          .subscribe(response =>{
            const acess_token = JSON.stringify(response);
            localStorage.setItem('access_token', acess_token);
            this.router.navigate(["/home"]);
          },errorReponse =>{
            this.errors = ['Usuário e/ou senha incorreto(s)']
          })
      
  }

  preparaCadastro(event){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.password = this.password;
    usuario.username = this.username;

    this.authService
          .salvar(usuario)
          .subscribe(response => {
              this.mensagemSucesso = "Cadastro realizado com sucesso. Realize o login.";
              this.loginError = false;
              this.errors = null;
              this.cadastrando = false;
              this.username = "";
              this.password = "";
          }, erroResponse =>{
            this.loginError = false;
            this.mensagemSucesso = null;                        
            this.errors = erroResponse.error.errors;
          })
  }

}
