// deben sumar solamente los numeros impares entre el 1 y el 50.
//INDICAR CUANTO FUE LA SEMNA Y A SU VEZ CUANTOS NUMEROS SE SUMARON 

let contador = 0;
let acumulador = 0;


for (let i = 0; i<50; i++){
    //comprobar que si i es  impar, atraves del resto
    if (i % 2 !=0){
        contador++;
        acumulador += i;

    }

}
alert(`Hay ${contador} numero imparres entre el 1 y el 50 
    y la suma suma de ellos es ${acumulador} `);