// Inicializar la variable para la potencia de 2
var potenciaDeDos = 1;

// Inicializar la variable para contar las iteraciones
var iteracion = 1;

// Bucle while para generar las potencias de 2 menores o iguales a 100
while (potenciaDeDos <= 100) {
    // Imprimir la potencia de 2
    console.log("2^" + (iteracion - 1) + " = " + potenciaDeDos);

    // Incrementar la potencia de 2 para la próxima iteración
    potenciaDeDos *= 2;

    // Traza para las primeras 5 iteraciones
    if (iteracion <= 5) {
        console.log("Iteración: " + (iteracion - 1));
        console.log("Potencia de 2: " + (potenciaDeDos / 2));
        console.log("------------");
    }

    // Incrementar el contador de iteraciones
    iteracion++;
}
