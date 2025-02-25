function increaseBet(){
    let bet = document.getElementById("bet");
    let betAmount = parseInt(bet.textContent);
    let total = document.getElementById("total");
    let totalAmount = parseInt(total.textContent);
    if (betAmount < totalAmount){
        bet.textContent = betAmount + 100;
    }
}

function decreaseBet(){
    let bet = document.getElementById("bet");
    let betAmount = parseInt(bet.textContent);
    if (betAmount != 100){
        bet.textContent = betAmount - 100;
    }
}

const symbols = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
]

function generateSymbol(){
    generateFirstSymbol();
    generateSecondSymbol();
    generateThirdSymbol();

    let firstSymbol = document.getElementById("firstSymbol");
    let secondSymbol = document.getElementById("secondSymbol");
    let thirdSymbol = document.getElementById("thirdSymbol");
    
    if (firstSymbol.textContent === secondSymbol.textContent && secondSymbol.textContent === thirdSymbol.textContent){
        addTotal();
    }
}

function generateFirstSymbol(){
    let firstSymbol = document.getElementById("firstSymbol");
    const randomIndex = Math.floor(Math.random() * symbols.length);
    const symbol = symbols[randomIndex];
    firstSymbol.textContent = symbol;
}

function generateSecondSymbol(){
    let secondSymbol = document.getElementById("secondSymbol");
    const randomIndex = Math.floor(Math.random() * symbols.length);
    const symbol = symbols[randomIndex];
    secondSymbol.textContent = symbol;
}

function generateThirdSymbol(){
    let thirdSymbol = document.getElementById("thirdSymbol");
    const randomIndex = Math.floor(Math.random() * symbols.length);
    const symbol = symbols[randomIndex];
    thirdSymbol.textContent = symbol;
}

function addTotal(){
    let total = document.getElementById("total");
    let totalAmount = parseInt(total.textContent);
    let bet = document.getElementById("bet");
    let betAmount = parseInt(bet.textContent);
    total.textContent = totalAmount + betAmount;
}


