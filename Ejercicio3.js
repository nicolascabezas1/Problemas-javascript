// Inicializar la variable para almacenar la suma
var suma = 0;

// Bucle for para iterar sobre los múltiplos de 3 hasta 100
for (var i = 3; i <= 99; i += 3) {
    // Imprimir el número en la serie
    console.log("Número en la serie: " + i);

    // Sumar el número a la variable suma
    suma += i;

    // Traza para las primeras 5 iteraciones
    if (i <= 15) {
        console.log("Iteración: " + (i / 3));
        console.log("Suma parcial: " + suma);
        console.log("------------");
    }
}

// Imprimir la suma total
console.log("La suma total de la serie es: " + suma);
