let contador = 2;
let contadorTurno = 1;

let danoSofrido = document.getElementById("danoSofrido");
let danoTotal = document.getElementById("danoTotal");

danoSofrido.addEventListener('keypress', (event) => {
  if (event.key == 'Enter' || event.keyCode == '13') {
    danoTotal.value = parseInt(danoTotal.value) + 
      (isNaN(danoSofrido.valueAsNumber) ? 0 : parseInt(danoSofrido.valueAsNumber));
      danoSofrido.value = "";
  }
})

function adicionarTurno() {
  let turno = document.getElementById("turno");
  contadorTurno++;
  turno.innerHTML = `Turno ${contadorTurno}`;
}

function adicionarPersonagem () {
  let div = document.getElementById("personagem");
  let novoPersonagem = document.createElement("label");
  let novoNome = document.createElement("input");
  let novoInput = document.createElement("input");
  let novaLinha = document.createElement("br");

  div.appendChild(novoPersonagem);
  div.appendChild(novoNome);
  div.appendChild(novoInput);
  div.appendChild(novaLinha);

  novoInput.setAttribute('type', 'number');
}

function adicionarInimigo() {
  let div = document.getElementById("inimigo");
  let novoInimigo = document.createElement("label");
  let novoNome = document.createElement("input")
  let novoInput = document.createElement("input")
  let novaLinha = document.createElement("br");
  
  div.appendChild(novoInimigo);
  div.appendChild(novoNome);
  div.appendChild(novoInput);
  div.appendChild(novaLinha);

  novoInput.setAttribute('type', 'number');
  
  let tbody = document.getElementsByTagName("tbody")[0];
  let tr = document.createElement("tr");
  let tdInimigo = document.createElement("td");
  let tdDanoSofrido = document.createElement("td");
  let tdDanoTotal = document.createElement("td");

  let inputInimigo = document.createElement("input")
  let inputDanoSofrido = document.createElement("input")
  let inputDanoTotal = document.createElement("input")
  
  inputDanoSofrido.setAttribute('type', 'number');
  inputDanoTotal.setAttribute('type', 'number');
  inputDanoTotal.disabled = true;
  inputDanoTotal.value = 0;

  inputDanoSofrido.addEventListener('keypress', (event) => {
    if (event.key == 'Enter' || event.keyCode == '13') {
      inputDanoTotal.value = parseInt(inputDanoTotal.value) + 
        (isNaN(inputDanoSofrido.valueAsNumber) ? 0 : parseInt(inputDanoSofrido.valueAsNumber));
        inputDanoSofrido.value = "";
    }
  })
  
  tbody.appendChild(tr);
  tr.appendChild(tdInimigo);
  tr.appendChild(tdDanoSofrido);
  tr.appendChild(tdDanoTotal);
  tdInimigo.appendChild(inputInimigo);
  tdDanoSofrido.appendChild(inputDanoSofrido);
  tdDanoTotal.appendChild(inputDanoTotal);
}




