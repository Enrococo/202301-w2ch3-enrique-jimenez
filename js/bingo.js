const bingoCard = [
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    //next line
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
        //next line
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
  ];

  const usedLineNums = [];
  const usedNumbers = [];
  const lin1 = [];
  const lin2 = [];
  const lin3 = [];
  
  let round = 0;
//Función para preguntar el nombre del jugador y saludar
  const askName = () => {
    let userName = prompt('¡Bienvenido a nuestro Bingo! Por favor, introduzca su Nombre');
    while (userName === ''){
        userName = prompt('Por favor, introduzca un nombre válido: ')
    }
    alert(`Hola, ${userName}. A continuación se mostrará en pantalla su cartón de bingo.`);
  }
//Función para generar los números del cartón de forma aleatoria
  const numCarton = () => {
    let randomNumber = Math.ceil(Math.random()*100);
    while(usedLineNums.includes(randomNumber) || randomNumber === 100 ||randomNumber === 0){
      randomNumber = Math.ceil(Math.random()*100);
    }
    
    usedLineNums.push(randomNumber);
    return randomNumber;
  }
 //Almacena los numCarton en bingoCard
  const genCard = () => {
  bingoCard.forEach((bingoCard) => {
    bingoCard.number = numCarton();
  });
  }
 //Ordena bingoCard en lin1, lin2, lin3 (seguro que se puede hacer mejor)
  const sortCard = () => {
    for (let i = 0; i<5; i++){
      lin1.push(bingoCard[i].number)
    }
    for (let i = 5; i<10; i++){
      lin2.push(bingoCard[i].number)
    }
    for (let i = 10; i<15; i++){
      lin3.push(bingoCard[i].number)
    }
  }
  //Muestra el cartón en pantalla
  const showCard = () => {
    console.log(`Linea1: ${lin1.sort(function(a,b){return a - b;})}`);
    console.log(`Linea2: ${lin2.sort(function(a,b){return a - b;})}`);
    console.log(`Linea3: ${lin3.sort(function(a,b){return a - b;})}`);
  }
    //Borra los valores de lin1, lin2, lin3 para que no se sobrescriban
  const deleteCard = () =>{
    lin1.length = 0;
    lin2.length = 0;
    lin3.length = 0;
  }
 //Genera el número del bombo de forma aleatoria
  const numBombo = () => {
    let randomNumber = Math.ceil(Math.random()*100);
    while (usedNumbers.includes(randomNumber)||randomNumber === 0||randomNumber === 100) {
        randomNumber = Math.ceil(Math.random()*100);
    }
    usedNumbers.push(randomNumber);
    round++;
    alert(`Ronda ${round}: Número: ${randomNumber}`)
    return randomNumber;
  }
 
 //Comprueba que el numBombo está en bingoCard, 
 //y en ese caso, cambia los valores number a "X" y matched a TRUE
  const checkNumber = () => {
    const randomNumber = numBombo();
    bingoCard.forEach((bingoCard) => {
        if (bingoCard.number === randomNumber){
            bingoCard.matched = true;
            bingoCard.number = "X";
            alert(`Se ha encontrado el número ${randomNumber}`)
            console.log(`Se ha encontrado el número ${randomNumber}`)
        }
    });

  }
//Genera cartones hasta que el jugador acepta uno con "yes"
  const start = () => {
    let userAccept 
    askName();
    genCard();
    sortCard();
    showCard();
    console.log("###############");
    userAccept = prompt(`¿Te gusta este cartón? (yes/no)`);
    while (userAccept.toLowerCase() != "yes"){
        deleteCard();
        genCard();
        sortCard();
        showCard();
        console.log("###############");
        userAccept = prompt(`¿Te gusta este cartón? (yes/no)`);
    }

  }
//Comprueba los numBombo hasta que se genere una línea
  const linea = () => {
    const isX = (X) => X === "X";
  do{
    deleteCard();
    checkNumber();
    console.log (`#####Ronda ${round}########`)
    sortCard();
    showCard();
    
    
  }while (!lin1.every(isX)&&!lin2.every(isX)&&!lin3.every(isX));
  console.log("¡¡¡Línea!!!Seguimos para BINGO")
}
//Comprueba los numBombo hasta que se canta BINGO
  const bingo = () => {
    let win;
  do {
    deleteCard();
    checkNumber();
    console.log (`#####Ronda ${round}########`)
    sortCard();
    showCard();
    win = bingoCard.every((bingoCard) => bingoCard.matched);
  }
  while (!win)
  console.log(`¡¡¡BINGO!!! Ha sido cantado en la ronda ${round-1}`);
  }

//Juega al bingo
  const playBingo = () =>{
    start();
    linea();
    bingo();

  }

  playBingo();



