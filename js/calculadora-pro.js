let nums = [];

function getNumbers() {

  let num1 = prompt('Ingresa un número');
  while (isNaN(num1)){
    alert('ERROR: No has introducido un valor numérico');
    num1 =  prompt('Ingresa un número');
  }
  let num2 = prompt('Ingresa otro número');
  while (isNaN(num2)){
    alert('ERROR: No has introducido un valor numérico');
    num2 =  prompt('Ingresa un número');
  }

 

  nums.push(num1);
  nums.push(num2);

  return nums;}

  
function raiz() {
  if (nums[0] === ""){
    if(!Number.isInteger(Math.sqrt(nums[1]))){
      console.log('La raíz del número introducido es ' + (Math.sqrt(nums[1]).toFixed(3)));
  }
else{
console.log('La raíz del número introducido es '(Math.sqrt(nums[1])));}
}
if (nums[1] === ""){
  if(!Number.isInteger(Math.sqrt(nums[0]))){
    console.log('La raíz del número introducido es ' + (Math.sqrt(nums[0]).toFixed(3)));
}
else{
console.log('La raíz del número introducido es '(Math.sqrt(nums[0])));}
  }
}
function getExtraNumbers(){

  let addNum = confirm('¿Quieres ingresar otro número?');

  while (addNum === true){
    let num = Number(prompt('Ingresa otro número'))
    while (isNaN(num)){
      alert('ERROR: No has introducido un valor numérico');
      num =  Number(prompt('Ingresa un número'));
    }
    nums.push(num);
    addNum = confirm('¿Quieres ingresar otro número?');
  }
  return console.log(nums);}
function Calc2() {

    let sum = 0 ;
    let resta = 0;
    let product = 1;
    let div = 0;

    for (let i = 0; i < nums.length; i++) {
      
        sum += nums[i]; 
      }
      if(!Number.isInteger(sum)){
        sum = sum.toFixed(3);}
      
      
      for (let i = 1; i < nums.length; i++){
        resta -= nums[i];
        resta = nums[0] + resta;  
      }
      if(!Number.isInteger(resta)){
        resta = resta.toFixed(3);
      }
      
      
      for (let i = 0; i < nums.length; i++){
        product = product * nums[i];
      }
      if(!Number.isInteger(product)){
        product = product.toFixed(3);
      }

      for (let i = 1; i < nums.length; i++){
        div = nums[0] /= nums[i];
        }
        if(!Number.isInteger(div)){
          div = div.toFixed(3);
      }
      
      const results = [sum,resta,product,div]
      return results ;
    
}

getNumbers();
if (nums[0] ==="" ||nums[1] === ""){
  raiz();
}

else {
  nums[0] = Number(nums[0]);
  nums[1] = Number(nums[1]);
  getExtraNumbers();
let resultado = Calc2();
console.log(`Los resultados de las operaciones son:`);
    console.log(`Suma: ${resultado[0]}`);
    console.log(`Resta: ${resultado[1]}`);
    console.log(`Producto: ${resultado[2]}`);
    console.log(`División: ${resultado[3]}`);}

let newNums = confirm("¿Introducir Nuevos Valores?");
while (newNums === true){

  for (let i = nums.length; i > 0; i--) {
    nums.pop();
  }  
  getNumbers();
  if (nums[0] ==="" ||nums[1] === ""){
    raiz();
  }
  
  else {
    nums[0] = Number(nums[0]);
    nums[1] = Number(nums[1]);
    getExtraNumbers();
  let resultado = Calc2();
  console.log(`Los resultados de las operaciones son:`);
      console.log(`Suma: ${resultado[0]}`);
      console.log(`Resta: ${resultado[1]}`);
      console.log(`Producto: ${resultado[2]}`);
      console.log(`División: ${resultado[3]}`);}
  
  newNums = confirm("¿Deseas realizar una nueva operación?");}

alert('Thanks and Bye GURRRL!');