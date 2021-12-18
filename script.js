let order = [];

let clickedOrder = [];

let score = 0;

//0 = verde 
//1 = vermelho 
//2 = amarelo
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//order aleatória
let shuffleOrder = () => {
    //guardar número aleatório a cada rodada
    let colorOrder = Math.floor(Math.random() * 4);
    //atribuindo para o próximo número
    order[order.length] = colorOrder;

    clickedOrder = [];

    //acender a cor referente ao número sorteado
    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }

    
}

//próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
        setTimeout(()=> {
            element.classList.remove('selected');
        }, number - 200);
    }, number - 350);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//botões são os mesmo da ordem do jogo
let checkOrder = () => {
    
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score} 
                \n Você Acertou! Iniciando próximo nível`);

        nextLevel();
    }
}

//função do click
let click = (color) => {
    
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

    
}

//função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    }
}

//função para o próximo nível do jogo
let nextLevel = () =>{
    score++;
    shuffleOrder();
}

//função jogador perdedor
let lose = () =>{
    alert(`Pontuação: ${score} \n
          Você perdeu o jogo!! \n
          Clique em ok para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    inicio();
}

let inicio = () => {
    alert(`Bem vindo ao Gênesis! Iníciando novo Jogo`);
    score = 0;

    nextLevel();
}



inicio();