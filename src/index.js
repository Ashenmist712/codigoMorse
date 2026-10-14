require('bootstrap/dist/css/bootstrap.min.css');
require('./styles.css');

const codigoMorse = {
  A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.',
  G: '--.', H: '....', I: '..', J: '.---', K: '-.-', L: '.-..',
  M: '--', N: '-.', Ñ: '--.--', O: '---', P: '.--.', Q: '--.-',
  R: '.-.', S: '...', T: '-', U: '..-', V: '...-', W: '.--',
  X: '-..-', Y: '-.--', Z: '--..',
  0: '-----', 1: '.----', 2: '..---', 3: '...--', 4: '....-',
  5: '.....', 6: '-....', 7: '--...', 8: '---..', 9: '----.'
};

const codigoMorseInvertido = {};
Object.keys(codigoMorse).forEach((letra) => {
  codigoMorseInvertido[codigoMorse[letra]] = letra;
});

const selectorTipoConversion = document.querySelector('#TipoConversion');
const campoTextoEntrada = document.querySelector('#input');
const campoTextoResultado = document.querySelector('#salida');
const mensajeError = document.querySelector('#mensajeError');
const botonProcesar = document.querySelector('#procesarBoton');
const botonLimpiar = document.querySelector('#limpiarBoton');

function mostrarError(mensaje) {
  mensajeError.textContent = mensaje;
  mensajeError.hidden = false;
}

function limpiarError() {
  mensajeError.textContent = '';
  mensajeError.hidden = true;
}

function normalizarTexto(texto) {
  return texto
    .toLocaleUpperCase('es')
    .replace(/[ÁÉÍÓÚÜ]/g, (letra) => ({
      Á: 'A', É: 'E', Í: 'I', Ó: 'O', Ú: 'U', Ü: 'U'
    })[letra]);
}

function traducirTextoAMorse(texto) {
  const letras = normalizarTexto(texto.trim().replace(/\s+/g, ' ')).split('');
  const letraDesconocida = letras.find(
    (letra) => letra !== ' ' && !codigoMorse[letra]
  );

  if (letraDesconocida) {
    throw new Error(`El carácter "${letraDesconocida}" no corresponde a una letra,numero..`);
  }

  return letras.map((letra) => letra === ' ' ? '/' : codigoMorse[letra]).join(' ');
}

function traducirMorseATexto(texto) {
  const palabras = texto.trim().split(/\s*\/\s*/);

  return palabras.map((palabra) => {
    const codigos = palabra.trim().split(/\s+/).filter(Boolean);
    const codigoDesconocido = codigos.find(
      (codigo) => !codigoMorseInvertido[codigo]
    );

    if (codigoDesconocido) {
      throw new Error(`La señal "${codigoDesconocido}" no corresponde a un carácter conocido.`);
    }

    return codigos.map((codigo) => codigoMorseInvertido[codigo]).join('');
  }).join(' ');
}

function procesarTexto() {
  limpiarError();
  campoTextoResultado.value = '';

  if (!campoTextoEntrada.value.trim()) {
    mostrarError('Escribe un texto para procesar.');
    campoTextoEntrada.focus();
    return;
  }

  try {
    if (selectorTipoConversion.value === 'morseATexto') {
      campoTextoResultado.value = traducirMorseATexto(campoTextoEntrada.value);
    } else {
      campoTextoResultado.value = traducirTextoAMorse(campoTextoEntrada.value);
    }
  } catch (error) {
    mostrarError(error.message);
  }
}

function limpiarCampos() {
  campoTextoEntrada.value = '';
  campoTextoResultado.value = '';
  limpiarError();
  campoTextoEntrada.focus();
}

botonProcesar.addEventListener('click', procesarTexto);
botonLimpiar.addEventListener('click', limpiarCampos);
