const jogadorAtual = document.getElementById("jogador_atual");

let selecionar;
let jogador = "X";

let posiçoes = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
];

function inicial() {
    selecionar = [];

    jogadorAtual.innerHTML = `JOGADOR DA VEZ: ${jogador}`;

    document.querySelectorAll(".jogo button").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", newMove);
    })
}

inicial()

function newMove(e) {
    const index = e.target.getAttribute("data-i");
    e.target.innerHTML = jogador;
    e.target.removeEventListener("click", newMove);
    selecionar [index] = jogador;

    setTimeout(() => {
        check();
    }, 100);

    jogador = jogador === "X" ? "O" : "X";
    jogadorAtual.innerHTML = `JOGADOR DA VEZ: ${jogador}`;
}

function check() {
    let ultimoJogador = jogador === "X" ? "O" : "X";

    const itens = selecionar
    .map((item, i) => [item, i])
    .filter((item) => item[0] === ultimoJogador)
    .map((item) => item[1])

    for (pos of posiçoes) {
        if(pos.every((item) => itens.includes(item))) {
            alert(`O JOGADOR ${ultimoJogador} VENCEU!!`)
            inicial();
            return;
        }
    }

    if (selecionar.filter((item) => item).length === 9) {
        alert("O JOGO EMPATOU!!");
        inicial();
        return;
    }
}