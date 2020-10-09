package io.github.joaoviniciusrodriuges.clientes.model.repository;

import io.github.joaoviniciusrodriuges.clientes.model.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario,Integer> {
}
