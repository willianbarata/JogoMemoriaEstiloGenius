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
    }, number - 250);
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
    });

    checkOrder();
}
