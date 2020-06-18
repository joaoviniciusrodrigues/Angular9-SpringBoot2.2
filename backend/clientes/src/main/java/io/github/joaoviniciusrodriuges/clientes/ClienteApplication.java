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

    @Bean
    public CommandLineRunner run(){
        return args -> {
            Cliente cliente = new Cliente().builder().cpf("06011573118").nome("Fulano").build();
            clienteRepository.save(cliente);

        };
    }

    public static void main(String[] args) {
        SpringApplication.run(ClienteApplication.class, args);
    }
}
