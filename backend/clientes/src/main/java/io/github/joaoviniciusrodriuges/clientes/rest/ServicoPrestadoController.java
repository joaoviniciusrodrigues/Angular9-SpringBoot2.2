package io.github.joaoviniciusrodriuges.clientes.rest;

import io.github.joaoviniciusrodriuges.clientes.model.entity.Cliente;
import io.github.joaoviniciusrodriuges.clientes.model.entity.ServicoPrestado;
import io.github.joaoviniciusrodriuges.clientes.model.repository.ClienteRepository;
import io.github.joaoviniciusrodriuges.clientes.model.repository.ServicoPrestadoRepository;
import io.github.joaoviniciusrodriuges.clientes.rest.dto.ServicoPrestadoDTO;
import io.github.joaoviniciusrodriuges.clientes.util.BigDecimalConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/servicos-prestados")
@RequiredArgsConstructor
public class ServicoPrestadoController {


    private final ClienteRepository clienteRepository;
    private final ServicoPrestadoRepository repository;
    private final BigDecimalConverter bigDecimalConverter;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ServicoPrestado salvar(@Valid @RequestBody ServicoPrestadoDTO dto) {

        LocalDate data = LocalDate.parse(dto.getData(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));
        Integer idCliente = dto.getIdCliente();

        Cliente cliente = clienteRepository.findById(idCliente).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente inexistente."));


        ServicoPrestado servicoPrestado = new ServicoPrestado();

        servicoPrestado.setId(dto.getId());
        servicoPrestado.setDescricao(dto.getDescricao());
        servicoPrestado.setData(data);
        servicoPrestado.setCliente(cliente);
        servicoPrestado.setValor(new BigDecimal(dto.getPreco()));

        System.out.println(servicoPrestado.getValor().toString());
        System.out.println(dto.getPreco().toString());

        return repository.save(servicoPrestado);

    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ServicoPrestado> pesquisar(
            @RequestParam(value = "nome", required = false, defaultValue = "")String nome,
            @RequestParam(value = "mes", required = false) Integer mes) {

        if(mes != null){
            return repository.findByNomeClienteAndMes("%" + nome + "%", mes);
        }else {
            return repository.findByNomeClienteAndMes("%" + nome + "%");
        }


    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Integer id){
        repository.findById(id).map(servicoPrestado -> {
            repository.delete(servicoPrestado);
            return Void.TYPE;
        }).orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Serviço não encontrado"));
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ServicoPrestadoDTO acharPorId(@PathVariable Integer id) {

        ServicoPrestado servicoPrestado = repository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Serviço não encrontrado."));

        ServicoPrestadoDTO servicoPrestadoDTO = new ServicoPrestadoDTO();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

        String dataFormatada = servicoPrestado.getData().format(formatter);

        servicoPrestadoDTO.setData(dataFormatada);
        servicoPrestadoDTO.setDescricao(servicoPrestado.getDescricao());
        servicoPrestadoDTO.setIdCliente(servicoPrestado.getCliente().getId());
        servicoPrestadoDTO.setPreco(servicoPrestado.getValor().toString());
        servicoPrestadoDTO.setId(servicoPrestado.getId());

        return servicoPrestadoDTO;
    }

}
