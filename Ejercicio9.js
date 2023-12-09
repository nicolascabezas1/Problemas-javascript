// Función para calcular la nota promedio
function calcularPromedio(notas) {
  const suma = notas.reduce((total, nota) => total + nota, 0);
  return suma / notas.length;
}

// Función para obtener la nota más alta
function obtenerNotaMaxima(notas) {
  return Math.max(...notas);
}

// Función para obtener la nota menor
function obtenerNotaMinima(notas) {
  return Math.min(...notas);
}

// Función principal que muestra todas las notas y estadísticas
function mostrarEstadisticas(notas) {
  console.log("Notas obtenidas por el alumno: " + notas.join(", "));
  
  const promedio = calcularPromedio(notas);
  console.log("Nota promedio: " + promedio.toFixed(2));

  const notaMaxima = obtenerNotaMaxima(notas);
  console.log("Nota más alta: " + notaMaxima);

  const notaMinima = obtenerNotaMinima(notas);
  console.log("Nota más baja: " + notaMinima);
}

// Ejemplo de uso
const notasAlumno = [7, 5, 8, 9, 6];
mostrarEstadisticas(notasAlumno);
