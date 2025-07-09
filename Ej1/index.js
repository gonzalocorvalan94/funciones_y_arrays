import promptSync from 'prompt-sync';
const prompt = promptSync();

function ingresarTemperaturas() {
  let temperaturas = [];
  for (let i = 0; i < 7; i++) {
    temperaturas[i] = Number(prompt('Ingresa la temperatura del día ${i+1}: '));
    if (
      isNaN(temperaturas[i]) ||
      temperaturas[i] > 60 ||
      temperaturas[i] < -100
    ) {
      console.log('Temperatura inválida');
      i--;
    }
  }
  mostrarTemperaturas(temperaturas);
}

function mostrarTemperaturas(temperaturas) {
  console.log(
    `Las temperaturas de los 7 dia fueron ${temperaturas.join(' - ')}`
  );

  let tMAX = temperaturas[0];
  let tMIN = temperaturas[0];
  for (let i = 0; i < 7; i++) {
    if (tMAX < temperaturas[i]) {
      tMAX = temperaturas[i];
    }
  }

  for (let i = 0; i < 7; i++) {
    if (tMIN > temperaturas[i]) {
      tMIN = temperaturas[i];
    }
  }

  console.log(
    `La temperatura máxima fue ${tMAX}° y la mínima fue de ${tMIN}° grados`
  );
  promedios(temperaturas);
}

function promedios(temperaturas) {
  let suma = 0;
  for (let i = 0; i < 7; i++) {
    suma = suma + temperaturas[i];
  }

  let promedio = suma / 7;

  console.log(`El promedio de temperatura fue de ${promedio.toFixed(2)}`);

  if (promedio >= 30) {
    console.log('Semana calurosa');
  } else if (promedio >= 15 && promedio < 30) {
    console.log('Temperaturas agradables');
  } else {
    console.log('Semana fría');
  }
}

ingresarTemperaturas();
