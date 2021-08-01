//1-Crear una función flecha que reciba un número y devuelva el doble del mismo.
/*
let numero=prompt("ingresa numero")
const doble= numero=> numero*2;
console.log(doble(numero)) 
*/

//2-Crear una función flecha que reciba dos números y muestre la suma de ellos.
/*
const suma=(n1,n2) =>n1+n2;
alert(suma(3,4))
  */


//3-Crear una función flecha que valide si un número es mayor a otro. Luego mostrar el resultado por consola.
/*
const mayor = (n1,n2)=>{
    if(n1>n2){
         alert(n1)
    }else{
         alert(n2)
    }
}
mayor(22,93)
*/

//4-Mostrar por pantalla uno por uno reccoriéndolo, el siguiente array:

/* let frutas = ["sandía","manzana","damasco","pelón","frambuesa","plátano"]

    frutas.forEach( (valor,index,frutas)=>{document.write('<p style="color:red;font-size:30px;display:inline-block;font-weight:bold">'+valor+'</p>'+","+" ")});
     */

//5-    
/* Mostrar por pantalla las raíces cuadradas de los números del siguiente array:
let numeros = [16,29,120,64,81]
 */
/* let numeros = [16,29,120,64,81]

numeros.forEach(numero=>{document.write('<p>'+"la raiz cuadrada de "+numero+" es "+Math.sqrt(numero).toFixed(2)+'</p>'+'<br>')})

*/

//6-Solicitar al usuario su nombre y su signo del zodíaco y
//devolver un mensaje que devuelva esos mismos datos. 
//Ejemplo: “Su nombre es Fermin y su signo es Escorpio”.

/* let nombre = prompt("Dime tu nombre por favor");
let signo = prompt("de que signo eres?");

const info = (nombre,signo)=>{alert(`tu nombre es  ${nombre}\n y eres del signo de  ${signo}`)}

info(nombre,signo) */
 


//7-Mostrar por pantalla los números mayores a 100 del siguiente array.

/* let numeros = [160,23,120,60,1,-10,8,9483];


document.write('<p>'+numeros.sort((a, b) =>b-a)+'</p>'+'<br>')
     
 */


//8-Generar en base a un array, un nuevo array que tenga todos sus
 /* números consecutivos, y otro con sus números precedentes. 
 (Ejemplo: Si el número es 8 : En el array de consecutivos irá 9 ,
y en el array de precedentes irá 7). Al final mostrar por 
pantalla los tres array formados. */

/* let numeros = [15,28,32,40,11,-3,0,100]
let consecutivos=[];
let anteriores=[];
document.write("original");    // ME LAS ARREGLE ASI, ESTOY EN UNA TRANSICION JAJA PARA UTILIZAR "MAP" Y "FOR-EACH"
document.write("<br>")
for (let i = 0;i < numeros.length;i++) {
     document.write('<p>'+numeros[i]+'</p>');
     
}
document.write('<br>')
for(let i =0;i<numeros.length;i++){
     consecutivos.push(numeros[i]+1);
     
}
for(let i =0;i<numeros.length;i++){
     anteriores.push(numeros[i]-1);
     }
document.write('<br>')
document.write("consecutivos:")
document.write("<br>")
for(let i =0;i<consecutivos.length;i++){
     document.write('<p>'+consecutivos[i]+'</p>');
}

document.write('<br>'+'<br>')
document.write("anteriores");
document.write("<br>")

for(let i = 0;i<anteriores.length;i++){
     document.write('<p>'+anteriores[i]+'</p>');
} */


//9-Crear una función flecha que reciba un parámetro que indique el 
//momento del día: “Mañana, tarde, noche” y en base a eso de un saludo
//personalizado. Ejemplo: “Buenos días, buenas tardes, buenas noches”.

/* let momentoDelDia=prompt("di si es mañana, tarde, o noche por favor")
const saludo=momentoDelDia=>(momentoDelDia==="mañana")?alert("buenos dias"):(momentoDelDia==="tarde")?alert("buenas tardes"):alert("buenas noches")
saludo(momentoDelDia) */

//MIRANDO LAS DIFERENCIAS ENTRE "OPERADOR TERNARIO" Y EL "IF" CONVENCIONAL

/* 
if(momentoDelDia==="mañana"){
     alert("buenos dias");
}else if(momentoDelDia==="tarde"){
     alert("buenas tardes");
}else{
     alert("buenas noches");
} */



//10-Mostrar del siguiente array los nombres que comiencen con “M”.

/* let personas = ["Mario","Santino","Clotilde","Margarita","Sebastian","Melchor","Macarena","Flavio"]
const conEme=document.write(personas.filter(persona=>persona[0]==="M")) */


//11-Transformar las siguientes funciones a ArrowFunctions y aplicar TemplateStrings cuando corresponda:
//a) 
/* let nombre= prompt("ingresa tu nombre")
const despedir= nombre=>{alert(`Adios ${nombre}`); }
despedir(nombre) */
     
//b) 
/* let monto = parseFloat(prompt("ingrese monto"))
let pago = parseFloat(prompt("ingrese pago"))
const cobrar= (monto,pago)=>console.log(`su vuelto es ${pago-monto}`);cobrar(monto,pago)
      */

//console.log("Su vuelto es: " cobrar(monto,pago)

//c) 
 //const saludar =()=>console.log("Hola");saludar()
    