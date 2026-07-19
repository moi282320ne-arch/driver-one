// Dados do dia
let ganhos = 0;
let corridas = 0;
let km = 0;
let combustivel = 0;

// Registrar corrida
function registrarCorrida(valor, distancia) {
    ganhos += Number(valor);
    corridas++;
    km += Number(distancia);

    salvarDados();
}

// Salvar dados
function salvarDados() {
    localStorage.setItem("ganhos", ganhos);
    localStorage.setItem("corridas", corridas);
    localStorage.setItem("km", km);
}

// Carregar dados
function carregarDados() {
    ganhos = Number(localStorage.getItem("ganhos")) || 0;
    corridas = Number(localStorage.getItem("corridas")) || 0;
    km = Number(localStorage.getItem("km")) || 0;
}

carregarDados();
