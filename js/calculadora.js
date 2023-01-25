let result
//Función para establecer el valor mostrado
const setResult = (value) => {
    document.getElementById('result').innerHTML = value;
    return value
}
//Función para leer el valor mostrado
const  getResult = () => {
    return(document.getElementById('result').innerHTML);
}
//Función para añadir los botones a la expresión
const add = (key) => { 
    const result = getResult();
    if (result!='0' || isNaN(key)) setResult(result + key);
    else setResult(key);}
//Función Raíz Cuadrada
const squareRoot = () => {
        const result = eval(getResult()); 
        const squareRoot = Math.sqrt(result);
        setResult(squareRoot);
    }
 //Función calculadora   
const calculator = () => {
        const result = eval(getResult()); 
        setResult(result);
    }
//Función Resetear pantalla
const dElete = () => { 
        setResult(0);
    }
//Introducir expresiones por teclado
    document.addEventListener('keydown', (event) => {
       let keyB = event.key;
    result = getResult();
    if (keyB === "Enter"){
            calculator()
        }
    else if (keyB === "Delete"){
            dElete()
        }
    
    else if (keyB === "Backspace"){
            setResult(result.slice(0,-1));
        }
    
    else if (result!='0' && !isNaN(parseInt(keyB)) || keyB === "+" ||  keyB === "-" || keyB === "*" || keyB === "/" || keyB === "." || keyB === "(" || keyB === ")"){
         setResult(result + (keyB));}
    else if (isNaN(parseInt(keyB))) {setResult(result);}
    else {setResult(keyB);
    console.log(parseInt(keyB));}
      }, false);
    
    

