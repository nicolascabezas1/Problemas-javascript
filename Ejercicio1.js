function calcularResultado(num1, num2, num3) {
  if (num1 > 0) {
      // Si el primer número es positivo, calcula el producto de los otros dos
      var producto = num2 * num3;
      console.log("El producto de los dos últimos números es: " + producto);
  } else {
      // En otro caso, calcula la suma de los dos últimos números
      var suma = num2 + num3;
      console.log("La suma de los dos últimos números es: " + suma);
  }
}

// Ejemplo de uso
calcularResultado(3, 4, 5); // El primer número es positivo, se calcula el producto: 4 * 5 = 20
calcularResultado(-2, 8, 3); // El primer número no es positivo, se calcula la suma: 8 + 3 = 11