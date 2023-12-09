function verificarCoincidencia(num1, num2, num3) {
  if (num1 === num2 + num3 || num2 === num1 + num3 || num3 === num1 + num2) {
      console.log("¡Coinciden! Uno de los números es igual a la suma de los otros dos.");
  } else {
      console.log("No coinciden. Ninguno de los números es igual a la suma de los otros dos.");
  }
}

// Ejemplo de uso
verificarCoincidencia(2, 3, 5); // No coinciden. Ninguno de los números es igual a la suma de los otros dos.
verificarCoincidencia(4, 2, 2); // ¡Coinciden! Uno de los números es igual a la suma de los otros dos.
