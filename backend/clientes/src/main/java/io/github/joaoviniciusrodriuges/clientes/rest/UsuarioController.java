package io.github.joaoviniciusrodriuges.clientes.rest;

import io.github.joaoviniciusrodriuges.clientes.UsuarioCadastradoException;
import io.github.joaoviniciusrodriuges.clientes.model.entity.Usuario;
import io.github.joaoviniciusrodriuges.clientes.model.repository.UsuarioRepository;
import io.github.joaoviniciusrodriuges.clientes.service.UsuarioService;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/usuarios")
@RequiredArgsConstructor
public class UsuarioController {

    @Autowired
    private UsuarioService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void salvar(@RequestBody @Valid Usuario usuario){

        try{
            service.salvar(usuario);
        }catch (UsuarioCadastradoException e){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }

    }
}
