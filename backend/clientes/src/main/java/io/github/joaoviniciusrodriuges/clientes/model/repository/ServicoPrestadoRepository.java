package io.github.joaoviniciusrodriuges.clientes.model.repository;

import io.github.joaoviniciusrodriuges.clientes.model.entity.ServicoPrestado;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicoPrestadoRepository extends JpaRepository<ServicoPrestado, Integer> {
    
}