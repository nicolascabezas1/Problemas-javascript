// Función para sumar los elementos de cada fila y columna en una matriz
function sumarFilasYColumnas(matriz) {
  const filas = matriz.length;
  const columnas = matriz[0].length;

  // Sumar los elementos de cada fila y mostrar los resultados
  console.log("Suma de elementos por fila:");
  for (let i = 0; i < filas; i++) {
      const sumaFila = matriz[i].reduce((total, elemento) => total + elemento, 0);
      console.log(`Fila ${i + 1}: ${sumaFila}`);
  }

  // Sumar los elementos de cada columna y mostrar los resultados
  console.log("\nSuma de elementos por columna:");
  for (let j = 0; j < columnas; j++) {
      const sumaColumna = matriz.reduce((total, fila) => total + fila[j], 0);
      console.log(`Columna ${j + 1}: ${sumaColumna}`);
  }
}

// Ejemplo de uso con una matriz 3x4
const matrizEjemplo = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];

// Llamar a la función con la matriz de ejemplo
sumarFilasYColumnas(matrizEjemplo);
