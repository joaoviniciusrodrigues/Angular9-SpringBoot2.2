package io.github.joaoviniciusrodriuges.clientes.model.rest;

import io.github.joaoviniciusrodriuges.clientes.model.entity.ServicoPrestado;
import io.github.joaoviniciusrodriuges.clientes.model.rest.dto.ServicoPrestadoDTO;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/servicos-prestados")
public class ServicoPrestadoController {

    @PostMapping
    public ServicoPrestado salvar(@RequestBody ServicoPrestadoDTO dto){
        return null;
    }

}
