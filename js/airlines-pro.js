const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
  ];

  function askUserName() {
    let userName = prompt('¡Bienvenido a nuestra Aerolínea! Por favor, introduza su Usuario');
    while (userName === ''){
        userName = prompt('Por favor, introduzca un nombre de usuario: ')
    }
    alert(`Gracias por confiar en nosotros, ${userName}. A continuación se mostrarán la información de nuestros vuelos.`);
  }

  function infoVuelos() {

    let hoy = new Date();
    console.log (`Los vuelos programados para hoy ${hoy} son:`);
    flights.forEach((flight) => {
        console.log(`El vuelo: ${flight.id} con origen ${flight.from} y destino ${flight.to} tiene un coste de ${flight.cost}€`);
        if (flight.scale === true){
            console.log('Este vuelo realiza escala');
        }
        else {
            console.log('Este vuelo es directo');
        }
    })

    console.log ('###############################');

    let total = flights[0].cost;
    for (let i = 1; i < flights.length; i++){
        total = total += flights[i].cost;
    }
    const average = total / flights.length;

    console.log (`El coste medio de los vuelos de hoy es de ${average} €`);
    console.log ('###############################');

    let cont = 0;

    flights.forEach((flight) => {
        if (flight.scale === true){
            cont += 1;
        }
    })

    console.log (`Un total de ${cont} vuelos realizan escala hoy`);
    console.log ('###############################');

    console.log ('Los cinco últimos destinos del día son:');
    for (let i = (flights.length - 5); i < flights.length; i++){
        console.log(flights[i].to);
    }
    
    console.log ('###############################');
  }

  function credential() {
    let rol = prompt("Introduzca su rol: (USER/ADMIN)");

    if (rol === null){
        credential();
    }
    else if (rol.toUpperCase() !== "USER" && rol.toUpperCase() !== "ADMIN") {
        credential();}
    else {
        return rol.toUpperCase();
    }
    }
    function toDo(){
        const action = prompt('¿Qué desea hacer? (CREAR/BORRAR)');
        if (action === null) {
            toDo();
        }
        else if (action.toUpperCase() !== "CREAR" && action.toUpperCase() !== "BORRAR"){
            toDo();
        }
        else {
            return action.toUpperCase();
        }
    }

//INFO nuevos vuelos

    function askFrom(){
        const flightFrom = prompt("Origen del vuelo:");
        if (flightFrom === null || flightFrom === ""){
            alert("Debe introducir un origen");
            askFrom();
        }
        return flightFrom;
    }

    function askTo(){
        const flightTo = prompt("Destino del vuelo:");
        if (flightTo === null || flightTo === ""){
            alert("Debe introducir un destino");
            askTo();
        }
        return flightTo;
    }    
    function askCost(){
        const flightCost = prompt("Coste del vuelo:");
        if (flightCost === null || flightCost === ""){
            alert("Debe introducir un coste");
            askCost();
        }
        if (isNaN(flightCost)){
            alert("Debe introducir un valor numérico");
            askCost();
        }
        return Number(flightCost);
    }
    function askScale(){
        const flightScale = prompt("¿Realiza escala este vuelo?(true/false)");
        if (flightScale === null || flightScale === ""){
            alert("Debe informar de si hay escala");
            askScale();
        }
        if (flightScale.toLowerCase() !== "true" && flightScale.toLowerCase() !== "false"){
            alert("Debe responder true/false");
            askScale();
        }
        return flightScale.toLowerCase();
    }
// Administrar INFO nuevos vuelos
    function adminToDo(){
        const actToDo = toDo();
        if (actToDo === "CREAR"){
            for (let i = 0; i<15; i++){
            const newFlight = {};
            newFlight.id = flights.length;
            newFlight.to = askTo();
            newFlight.from = askFrom();
            newFlight.cost = askCost();
            newFlight.scale = askScale();
            flights.push(newFlight);
            const add = prompt("¿Desea añadir otro vuelo? S/N")
        if (add.toUpperCase() === 'N'){
            alert("Ya puede ver la información de vuelos actualizada")
            break;
        }
        if (i === 14){
            alert("Ha alcanzado el máximo de vuelos creados. A continuación verá la información actualizada:")
        }
    }

            let hoy = new Date();
            console.log (`Los vuelos programados para hoy ${hoy} son:`);
            flights.forEach((flight) => {
            console.log(`El vuelo: ${flight.id} con origen ${flight.from} y destino ${flight.to} tiene un coste de ${flight.cost}€`);
            if (flight.scale === true){
            console.log('Este vuelo realiza escala');
            }
            else {
            console.log('Este vuelo es directo');
            }
    })

    console.log ('###############################');

        }
        else {
            const idBorrar = +prompt("ID a borrar:");
            flights.splice(idBorrar,1);

            let hoy = new Date();
            console.log (`Los vuelos programados para hoy ${hoy} son:`);
            flights.forEach((flight) => {
            console.log(`El vuelo: ${flight.id} con origen ${flight.from} y destino ${flight.to} tiene un coste de ${flight.cost}€`);
            if (flight.scale === true){
            console.log('Este vuelo realiza escala');
            }
            else {
            console.log('Este vuelo es directo');
            }
    })

    console.log ('###############################');
        }
    }

// Buscador Usuario

function search(){
    const searchCost = prompt("¡Busque vuelos más baratos. Introduzca su budget:");
    console.log("Los vuelos con un precio inferior son:"); 
    for (let j = 0; j<flights.length-1; j++){
            if(flights[j].cost <= searchCost){
    console.log(`El vuelo: ${flights[j].id} con origen ${flights[j].from} y destino ${flights[j].to} tiene un coste de ${flights[j].cost}€`);}
            }       
}

//Funciones ACCION

  askUserName();
  infoVuelos();

  const permiso = credential();
  
  if (permiso === "ADMIN"){
    adminToDo();
  }
  else {
    search();
  }
 