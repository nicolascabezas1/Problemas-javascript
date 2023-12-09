function convertirHora(hora24) {
  // Verificar si la hora está en el rango válido (0 a 23)
  if (hora24 >= 0 && hora24 <= 23) {
      // Determinar si es AM o PM
      var periodo = hora24 < 12 ? "a.m." : "p.m.";

      // Convertir la hora a notación de 12 horas
      var hora12 = hora24 % 12 === 0 ? 12 : hora24 % 12;

      // Mostrar el resultado
      console.log("La hora en notación de 12 horas es: " + hora12 + " " + periodo);
  } else {
      console.log("La hora ingresada no es válida. Por favor, ingresa una hora en el rango de 0 a 23.");
  }
}

// Ejemplo de uso
convertirHora(13); // La hora en notación de 12 horas es: 1 p.m.
convertirHora(8);  // La hora en notación de 12 horas es: 8 a.m.
convertirHora(20); // La hora en notación de 12 horas es: 8 p.m.
