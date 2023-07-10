/* import { usuarios } from "../constantes/users.js"; */
import { informaçõesDeReserva } from "../constantes/users.js";


const buttonLogout = document.getElementById('logout')

let dadosReservaClientes = [...informaçõesDeReserva]

buttonLogout.addEventListener("click", () =>{
  window.location.href = "./login.html"
})

function criarLinhasTabela() {
  informaçõesDeReserva.map((dadosClientes) => {
    const tr = document.createElement('tr');

    

    document.getElementById("informacoes-clientes").appendChild(tr);

    const tdNumeroQuarto = document.createElement('td');
    tdNumeroQuarto.innerHTML = `${dadosClientes.numeroQuarto}`;
    tr.appendChild(tdNumeroQuarto);

    const nomeCliente = document.createElement('td');
    nomeCliente.innerHTML = `${dadosClientes.nome}`;
    tr.appendChild(nomeCliente);

    const cpfCliente = document.createElement('td');
    cpfCliente.innerHTML = `${dadosClientes.cpf}`;
    tr.appendChild(cpfCliente);

    const periodoEstadia = document.createElement('td');
    periodoEstadia.innerHTML = `${dadosClientes.inicio} - `+ `${dadosClientes.fim}`;
    tr.appendChild(periodoEstadia);

    const cancelarReserva = document.createElement('button');
    cancelarReserva.innerHTML = "Deletar Reserva"

    cancelarReserva.addEventListener("click", () => deletarReserva(dadosClientes.numeroQuarto))

    const acaoBotao = document.createElement('td');
    acaoBotao.appendChild(cancelarReserva);

    tr.appendChild(acaoBotao);



  });
}

function deletarReserva(numeroQuarto){
  const reservasDeletadas = dadosReservaClientes.filter(dadosReserva => dadosReserva.numeroQuarto !== numeroQuarto);

  document.getElementById("informacoes-clientes").innerHTML = "";

  dadosReservaClientes = reservasDeletadas;

  reservasDeletadas.map((dadosClientes) => {
    const tr = document.createElement('tr');

    

    document.getElementById("informacoes-clientes").appendChild(tr);

    const tdNumeroQuarto = document.createElement('td');
    tdNumeroQuarto.innerHTML = `${dadosClientes.numeroQuarto}`;
    tr.appendChild(tdNumeroQuarto);

    const nomeCliente = document.createElement('td');
    nomeCliente.innerHTML = `${dadosClientes.nome}`;
    tr.appendChild(nomeCliente);

    const cpfCliente = document.createElement('td');
    cpfCliente.innerHTML = `${dadosClientes.cpf}`;
    tr.appendChild(cpfCliente);

    const periodoEstadia = document.createElement('td');
    periodoEstadia.innerHTML = `${dadosClientes.inicio} - `+ `${dadosClientes.fim}`;
    tr.appendChild(periodoEstadia);

    const cancelarReserva = document.createElement('button');
    cancelarReserva.innerHTML = "Deletar Reserva"

    cancelarReserva.addEventListener("click", () => deletarReserva(dadosClientes.numeroQuarto))

    const acaoBotao = document.createElement('td');
    acaoBotao.appendChild(cancelarReserva);

    tr.appendChild(acaoBotao);



  });

  
}

window.onload = criarLinhasTabela;


