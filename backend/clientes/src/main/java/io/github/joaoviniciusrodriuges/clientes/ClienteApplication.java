package io.github.joaoviniciusrodriuges.clientes;
import io.github.joaoviniciusrodriuges.clientes.model.entity.Cliente;
import io.github.joaoviniciusrodriuges.clientes.model.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class ClienteApplication {

    @Autowired
    ClienteRepository clienteRepository;

    public static void main(String[] args) {

        SpringApplication.run(ClienteApplication.class, args);
    }
}
