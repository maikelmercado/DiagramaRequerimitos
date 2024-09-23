//CONDICIONALES DENTRO DE UN BLOQUE IF, es necesario poner varios if


let  edad = parseInt(prompt("ingresa tu edad"));
let respuesta = prompt("Quieres estudiar en desafio latam? Si o No");

if((edad>=18) && (respuesta =="Si" || respuesta == "SI" || respuesta == "sI" || respuesta == "si" )){
    alert("Excelente Bienvenido");
}
else if((edad <18) && (respuesta =="Si" || respuesta == "SI" || respuesta == "sI" || respuesta == "si")){

    alert("pero eres menor de edad");

}else if(respuesta =="No" || respuesta == "NO" || respuesta == "nO" || respuesta == "no"){

    alert("Que lastima te esperamos pronto");

}



