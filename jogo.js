const p1 = "X";
const p2 = "O";
var playTime = p1;
var gameOver = false;
//var cpu = document.getElementById('cpu').checked;


atualizaMostrador();
inicializaEspacos();

function atualizaMostrador(){
    if (gameOver) { return; }

    if (playTime == p1) {
        var p = document.querySelectorAll("div#mostrador img") [0];
        p.setAttribute("src", "img/x.png");
    } else {
        var p = document.querySelectorAll("div#mostrador img") [0];
        p.setAttribute("src", "img/o.png");
    }
}

function inicializaEspacos() {

    var espacos = document.getElementsByClassName("espaco");
    
    for (var i = 0; i < espacos.length; i++) {
        
        espacos[i].addEventListener("click", function(){

            if (gameOver) {return;}

            if (this.getElementsByTagName("img").length == 0){
                if (playTime == p1) {
                    this.innerHTML = "<img src='img/x.png' border='0' height='55'>";
                    this.setAttribute("jogada", p1);
                    playTime = p2;
                } else {
                    this.innerHTML = "<img src='img/o.png' border='0' height='59'>";
                    this.setAttribute("jogada", p2);
                    playTime = p1;
                }
                atualizaMostrador();
                verificaVencedor();
            }
        });
    }
}

/* if (cpu && p2) {
    inicializaEspacos(jogadaDoCPU());
}

function jogadaDoCPU() {
    return 
} */

async function verificaVencedor() {

    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");
    
    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");

    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    var vencedor = "";
    var Velha  = "velha";


    if((a1 == b1 && a1 == c1 && a1 != "" ) || (a1 == a2 && a1 == a3 && a1 != "" ) || (a1 == b2 && a1 == c3 && a1 != "")){
        vencedor = a1;

    }else if((b2 == b1 && b2 == b3 && b2 != "" ) || (b2 == a2 && b2 == c2 && b2 != "" ) || (b2 == a3 && b2 == c1 && b2 != ""))
    {
        vencedor = b2;

    } else if(((c3 == c2 && c3 == c1)|| (c3 == a3 && c3 == b3)) && c3 != "") 
    {
        vencedor = c3;

    } else if (a1 && a2 && a3 && b1 && b2 && b3 && c1 && c2 && c3 != "")
    {
        vencedor = Velha;
    }


    if (vencedor != "") {
        gameOver = true;

        await sleep(50);

        if (vencedor == Velha) {
        alert("O jogo deu velha. A partida será reiniciada!");
            location.reload();
        } else if (vencedor != Velha) {
    
        alert("O GANHADOR É O: '" + vencedor + "'");
            location.reload();
        }
    }
}


function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}