const readline = require('readline');

// Crear una interfaz de lectura para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para leer un elemento desde la consola
function leerElemento(pregunta) {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
        });
    });
}

// Función para leer un vector de cadenas desde el teclado
async function leerVector() {
    let vector = [];

    for (let i = 1; i <= 5; i++) {
        const elemento = await leerElemento(`Ingresa el elemento ${i}: `);
        vector.push(elemento);
    }

    return vector;
}

// Función para copiar un vector en orden inverso
function copiarEnOrdenInverso(original) {
    return [...original].reverse();
}

// Función principal que ejecuta el código
async function main() {
    try {
        // Leer el vector desde el teclado
        const vectorOriginal = await leerVector();

        // Copiar el vector en orden inverso
        const vectorInverso = copiarEnOrdenInverso(vectorOriginal);

        // Mostrar los vectores
        console.log('Vector Original:', vectorOriginal);
        console.log('Vector en Orden Inverso:', vectorInverso);
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        // Cerrar la interfaz de lectura
        rl.close();
    }
}

// Ejecutar la función principal
main();
