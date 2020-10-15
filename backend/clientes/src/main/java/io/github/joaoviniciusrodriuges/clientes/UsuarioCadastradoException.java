package io.github.joaoviniciusrodriuges.clientes;

public class UsuarioCadastradoException extends RuntimeException {

    public UsuarioCadastradoException(String login){
        super("Usuário já castrado para o login: " + login);
    }
}
