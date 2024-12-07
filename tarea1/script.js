for (let i=0; i ;i++){//--inicia desde cero y mientras sea menor a 5 acumula y suma--//
    console.log("Interacion numero "+ i); //muestra en la consola
}
let j = 0;//declaramos la variable
while (j < 5){
    console.log ("iteracion con while: " + j);
    j++;//incremento de a uno
}

let edad= 5;//declaramos la variable
if (edad >= 18){
    console.log ("Eres mayor de edad: " );
} else {
    console.log ("Eres menor de edad:" );
}
console.log("--------------------------------");

//operador ternario
let mensaje = edad >= 18 ? "Mayor eres": "menor eres ";
    console.log (mensaje );
    console.log("--------------------------------");


    for (j = 0; j <=10; j++ )//declaramos la variable
    if  ( j % 2 == 0 ){
        console.log ("iteracion con while: " + j);
    } 

    let numeros =[1,2,3,4];
    numeros.push(5)//añade el 5 al final
    console.log(numeros);//[1,2,3,4,5]
