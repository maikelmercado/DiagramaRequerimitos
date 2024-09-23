var num1;
var num2;


//Mayor que
if(num1 >= num2){
    alert("el numero que ingresaste es mayor al primer segundo numero ");
}
//Menor que
if(num1 <= 10){
    alert("el primer numero que ingresaste es menor a 10");
}

//Diferente a que 
//si num1 es distinto de cero o mayor a cero, basta que uno de las dos cumpla la condicion para que se ejecute
if (num1 !=0 || num1 < 0 ){
    alert("el numero que ingresaste es distinto a 0");
}

//se tienen que complir las las dos condiciones para ejecutar
if (num1 !=0 && num1 < 0 ){
    alert("el numero que ingresaste es distinto a 0");
}


//SI UNA CONDICION SE CUMPLE SE HACE SI NO NO SE HACE
//

var edad;

edad = prompt("ingresa tu edad:");

if (edad >= 18){
    alert("eres mayor de edad ");
}
else{
    alert("todavia eres menor de edad");

}

//Tambien se puede hacer con cadenas de texto cadena de texto

var nombre = prompt("ingresa tu nombre completo");

if(nombre = ""){
    alert("aun no has escrito tu nombre");

}
else{
    alert("tu nombre ha sido ingresado correctamente");

}

//se parte con la negacion
let respuesta = prompt("estas listo para salvar el mundo (si o no)");

if (respuesta == "Si" || respuesta == "Si" || respuesta == "Si"){
    alert("Bienvenido al equipo, nos vemos mas tarde");

} 
else{
    alert("Lastima ....  si cambias de opinion ingresa nuevamente")
}


//funcion que pase a minuscula

let respuesta2 = prompt("estas listo para para cambiar a minuscula (si o no)").toLowercase();

if (respuesta2 == "Si" || respuesta2 == "si" || respuesta2 == "Si"){
    alert("Bienvenido al equipo, nos vemos mas tarde");

} 
else{
    alert("Lastima ....  si cambias de opinion ingresa nuevamente")
}

