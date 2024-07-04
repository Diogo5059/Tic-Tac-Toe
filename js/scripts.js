// Code Made By Diogo Amaral

var tabuleiro = ['1', '2', '3', '4', '5', '6', '7', '8', '9']; // Initialize tabuleiro
var jogador = 1; // move this variable to the top level
document.getElementById("labelPlayer").innerText = "Jogador X";
desenharTabuleiro(tabuleiro);

function desenharTabuleiro(tabuleiro) {
    console.clear();
    console.log("   ", tabuleiro[0], "   |   ", tabuleiro[1], "   |   ", tabuleiro[2], "   ");
    console.log("-----------------------------");
    console.log("   ", tabuleiro[3], "   |   ", tabuleiro[4], "   |   ", tabuleiro[5], "   ");
    console.log("-----------------------------");
    console.log("   ", tabuleiro[6], "   |   ", tabuleiro[7], "   |   ", tabuleiro[8], "   ");
}


function verificarVitoria(jogador, index) {

    var vitoria = false;

    if ((tabuleiro[0] == (jogador == 0? 'O' : 'X') && tabuleiro[1] == (jogador == 0? 'O' : 'X') && tabuleiro[2] == (jogador == 0? 'O' : 'X'))){
        
        document.getElementById("botao" + 0).style.backgroundColor = "red";
        document.getElementById("botao" + 1).style.backgroundColor = "red";
        document.getElementById("botao" + 2).style.backgroundColor = "red";

        vitoria = true;

    }

    if ((tabuleiro[3] == (jogador == 0? 'O' : 'X') && tabuleiro[4] == (jogador == 0? 'O' : 'X') && tabuleiro[5] == (jogador == 0? 'O' : 'X'))){
        
        document.getElementById("botao" + 3).style.backgroundColor = "red";
        document.getElementById("botao" + 4).style.backgroundColor = "red";
        document.getElementById("botao" + 5).style.backgroundColor = "red";

        vitoria = true;

    }

    if ((tabuleiro[6] == (jogador == 0? 'O' : 'X') && tabuleiro[7] == (jogador == 0? 'O' : 'X') && tabuleiro[8] == (jogador == 0? 'O' : 'X'))){
        
        document.getElementById("botao" + 6).style.backgroundColor = "red";
        document.getElementById("botao" + 7).style.backgroundColor = "red";
        document.getElementById("botao" + 8).style.backgroundColor = "red";

        vitoria = true;

    }

    if ((tabuleiro[0] == (jogador == 0? 'O' : 'X') && tabuleiro[3] == (jogador == 0? 'O' : 'X') && tabuleiro[6] == (jogador == 0? 'O' : 'X'))){
        
        document.getElementById("botao" + 0).style.backgroundColor = "red";
        document.getElementById("botao" + 3).style.backgroundColor = "red";
        document.getElementById("botao" + 6).style.backgroundColor = "red";

        vitoria = true;

    }

    if ((tabuleiro[1] == (jogador == 0? 'O' : 'X') && tabuleiro[4] == (jogador == 0? 'O' : 'X') && tabuleiro[7] == (jogador == 0? 'O' : 'X'))){
        
        document.getElementById("botao" + 1).style.backgroundColor = "red";
        document.getElementById("botao" + 4).style.backgroundColor = "red";
        document.getElementById("botao" + 7).style.backgroundColor = "red";

        vitoria = true;

    }

    if ((tabuleiro[2] == (jogador == 0? 'O' : 'X') && tabuleiro[5] == (jogador == 0? 'O' : 'X') && tabuleiro[8] == (jogador == 0? 'O' : 'X'))){
        
        document.getElementById("botao" + 2).style.backgroundColor = "red";
        document.getElementById("botao" + 5).style.backgroundColor = "red";
        document.getElementById("botao" + 8).style.backgroundColor = "red";

        vitoria = true;

    }

    if ((tabuleiro[0] == (jogador == 0? 'O' : 'X') && tabuleiro[4] == (jogador == 0? 'O' : 'X') && tabuleiro[8] == (jogador == 0? 'O' : 'X'))){
        
        document.getElementById("botao" + 0).style.backgroundColor = "red";
        document.getElementById("botao" + 4).style.backgroundColor = "red";
        document.getElementById("botao" + 8).style.backgroundColor = "red";

        vitoria = true;

    }

    if ((tabuleiro[2] == (jogador == 0? 'O' : 'X') && tabuleiro[4] == (jogador == 0? 'O' : 'X') && tabuleiro[6] == (jogador == 0? 'O' : 'X'))){
        
        document.getElementById("botao" + 2).style.backgroundColor = "red";
        document.getElementById("botao" + 4).style.backgroundColor = "red";
        document.getElementById("botao" + 6).style.backgroundColor = "red";

        vitoria = true;

    }
    return vitoria;
}

function verificarEmpate() {
    var empate = true;
    for (var i = 0; i < 9; i++) {
        if (tabuleiro[i]!= 'X' && tabuleiro[i]!= 'O') {
            empate = false;
            break;
        }
    }

    return empate;
}

function botaoPressionado(index) {
    if (tabuleiro[index] != 'X' && tabuleiro[index] != 'O') {
        if (jogador == 0) {
            tabuleiro[index] = 'O';
        } else {
            tabuleiro[index] = 'X';
        }
        desenharTabuleiro(tabuleiro);
        if (jogador == 0) {
            document.getElementById("botao" + index).innerText = "O";
            document.getElementById("labelPlayer").innerText = "Jogador X";
        } else {
            document.getElementById("botao" + index).innerText = "X";
            document.getElementById("labelPlayer").innerText = "Jogador O";
        }

        if (verificarVitoria(jogador, index) == true && verificarEmpate() == true) {
            alert("Jogador " + (jogador == 0? 'O' : 'X') + " venceu!");
            window.location.reload();
            return;
        }

        if (verificarVitoria(jogador, index) == true) {
            alert("Jogador " + (jogador == 0? 'O' : 'X') + " venceu!");
            window.location.reload();
        }
        
        if (verificarEmpate() == true) {
            document.getElementById("botao" + 0).style.backgroundColor = "red";
            document.getElementById("botao" + 1).style.backgroundColor = "red";
            document.getElementById("botao" + 2).style.backgroundColor = "red";
            document.getElementById("botao" + 3).style.backgroundColor = "red";
            document.getElementById("botao" + 4).style.backgroundColor = "red";
            document.getElementById("botao" + 5).style.backgroundColor = "red";
            document.getElementById("botao" + 6).style.backgroundColor = "red";
            document.getElementById("botao" + 7).style.backgroundColor = "red";
            document.getElementById("botao" + 8).style.backgroundColor = "red";
            alert("Empate!");
            window.location.reload();
        }


        jogador = 1 - jogador; // toggle jogador
    }else{
        alert("Célula já preenchida!");
    }
}
