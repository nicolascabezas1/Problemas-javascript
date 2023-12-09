function celsiusToFahrenheit(celsius) {
  var fahrenheit = (9/5) * celsius + 32;
  return fahrenheit;
}

// Ejemplo de uso
var temperaturaCelsius = 25;
var temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);

console.log(temperaturaCelsius + " grados Celsius equivalen a " + temperaturaFahrenheit + " grados Fahrenheit.");
