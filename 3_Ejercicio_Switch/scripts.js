//ESTRUCTURA DE CONDICION
//EVALUAR UNA VARIABLE CON VARIAS OPCIONES, PARA NO HACER TANTO IF

let num =  prompt("Escribe un numero del 1 al 7 y veras que dia de la semanas es:");

switch(num){
    case "1":
    //ejecutar el codigo
    alert("el dua de la semana es lunes");
    break;
    case "2":
        alert("el dia de la semana es Martes");
    break;
    case "3":
        alert("el dia de la semana es Miercoles");
    break;
    case "4":
        alert("el dia de la semana es jueves");
    break;
    case "5":
        alert("el dia de la semana es Viernes");
    break;
    case "6":
        alert("el dia de la semana es Sabado");
    break;
    case "7":
        alert("el dia de la semana es Domingo");
    break;
    default:
        alert("debes ingresar un numero del 1 al 7");
}