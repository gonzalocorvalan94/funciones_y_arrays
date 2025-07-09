import PromptSync from 'prompt-sync';

const prompt = PromptSync();

function numeroDeAlumnos() {
  let cantidad = Math.floor(
    Number(prompt('¿Qué cantidad de alumnos desea ingresar?'))
  );

  if (isNaN(cantidad) || cantidad <= 0) {
    console.log('El número ingresado es inválido');
    return numeroDeAlumnos();
  }

  ingresarAlumnos(cantidad);
}

function ingresarAlumnos(cantidad) {
  let alumnos = [];
  for (let i = 0; i < cantidad; i++) {
    const nombre = prompt(`Ingrese el nombre del alumno ${i + 1}:`);

    let edad = parseInt(prompt(`Ingrese la edad del alumno:`));
    while (edad < 6 || edad > 80 || isNaN(edad)) {
      console.log('Ha ingresado una edad inválida');
      edad = parseInt(prompt('Ingrese nuevamente la edad del alumno:'));
    }

    let nota = parseInt(prompt(`Ingrese la nota del alumno:`));
    while (nota < 0 || nota > 10 || isNaN(nota)) {
      console.log('Ha ingresado una nota inválida');
      nota = parseInt(prompt('Ingrese nuevamente la nota del alumno:'));
    }

    alumnos.push({ nombre, edad, nota });
  }

  mostrarDatos(alumnos, cantidad);
}

function mostrarDatos(alumnos, cantidad) {
  console.log(alumnos);

  let notaMax = alumnos[0].nota;
  let notaMin = alumnos[0].nota;

  for (let i = 0; i < cantidad; i++) {
    if (notaMax < alumnos[i].nota) {
      notaMax = alumnos[i].nota;
    }
    if (notaMin > alumnos[i].nota) {
      notaMin = alumnos[i].nota;
    }
  }

  let indicesMax = [];
  let indicesMin = [];

  for (let i = 0; i < cantidad; i++) {
    if (alumnos[i].nota == notaMax) {
      indicesMax.push(i);
    }

    if (alumnos[i].nota == notaMin) {
      indicesMin.push(i);
    }
  }

  if (indicesMax.length == 1) {
    console.log(
      `La mejor nota la tuvo el alumno ${
        alumnos[indicesMax[0]].nombre
      } y fue de ${alumnos[indicesMax[0]].nota}`
    );
  } else {
    console.log(`Las mejores notas fueron de `);
    for (let i = 0; i < indicesMax.length; i++) {
      console.log(
        `${alumnos[indicesMax[i]].nombre}: ${alumnos[indicesMax[i]].nota}`
      );
    }
  }

  if (indicesMin.length == 1) {
    console.log(
      `La peor nota la tuvo el alumno ${
        alumnos[indicesMin[0]].nombre
      } y fue de ${alumnos[indicesMin[0]].nota}`
    );
  } else {
    console.log(`Las peores notas fueron de `);
    for (let i = 0; i < indicesMin.length; i++) {
      console.log(
        `${alumnos[indicesMin[i]].nombre}: ${alumnos[indicesMin[i]].nota}`
      );
    }
  }

  promedios(alumnos, cantidad);
}

function promedios(alumnos, cantidad) {
  let suma = 0;

  for (let i = 0; i < cantidad; i++) {
    suma = suma + alumnos[i].nota;
  }

  let promedio = suma / cantidad;

  if (promedio >= 7) {
    console.log(
      `El promedio fue de ${promedio.toFixed(2)}. Excelente rendimiento grupal`
    );
  } else if (promedio > 4 && promedio < 7) {
    console.log(
      `El promedio fue de ${promedio.toFixed(2)}. Promedio aceptable`
    );
  } else {
    console.log(`El promedio fue de ${promedio.toFixed(2)}. Bajo rendimiento`);
  }
}

numeroDeAlumnos();
