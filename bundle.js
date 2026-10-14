/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{__webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n__webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\nconst codigoMorse = {\n  A: '.-',\n  B: '-...',\n  C: '-.-.',\n  D: '-..',\n  E: '.',\n  F: '..-.',\n  G: '--.',\n  H: '....',\n  I: '..',\n  J: '.---',\n  K: '-.-',\n  L: '.-..',\n  M: '--',\n  N: '-.',\n  Ñ: '--.--',\n  O: '---',\n  P: '.--.',\n  Q: '--.-',\n  R: '.-.',\n  S: '...',\n  T: '-',\n  U: '..-',\n  V: '...-',\n  W: '.--',\n  X: '-..-',\n  Y: '-.--',\n  Z: '--..',\n  0: '-----',\n  1: '.----',\n  2: '..---',\n  3: '...--',\n  4: '....-',\n  5: '.....',\n  6: '-....',\n  7: '--...',\n  8: '---..',\n  9: '----.'\n};\nconst codigoMorseInvertido = {};\nObject.keys(codigoMorse).forEach(letra => {\n  codigoMorseInvertido[codigoMorse[letra]] = letra;\n});\nconst selectorTipoConversion = document.querySelector('#TipoConversion');\nconst campoTextoEntrada = document.querySelector('#input');\nconst campoTextoResultado = document.querySelector('#salida');\nconst mensajeError = document.querySelector('#mensajeError');\nconst botonProcesar = document.querySelector('#procesarBoton');\nconst botonLimpiar = document.querySelector('#limpiarBoton');\nfunction mostrarError(mensaje) {\n  mensajeError.textContent = mensaje;\n  mensajeError.hidden = false;\n}\nfunction limpiarError() {\n  mensajeError.textContent = '';\n  mensajeError.hidden = true;\n}\nfunction normalizarTexto(texto) {\n  return texto.toLocaleUpperCase('es').replace(/[ÁÉÍÓÚÜ]/g, letra => ({\n    Á: 'A',\n    É: 'E',\n    Í: 'I',\n    Ó: 'O',\n    Ú: 'U',\n    Ü: 'U'\n  })[letra]);\n}\nfunction traducirTextoAMorse(texto) {\n  const letras = normalizarTexto(texto.trim().replace(/\\s+/g, ' ')).split('');\n  const letraDesconocida = letras.find(letra => letra !== ' ' && !codigoMorse[letra]);\n  if (letraDesconocida) {\n    throw new Error(`El carácter \"${letraDesconocida}\" no corresponde a una letra,numero..`);\n  }\n  return letras.map(letra => letra === ' ' ? '/' : codigoMorse[letra]).join(' ');\n}\nfunction traducirMorseATexto(texto) {\n  const palabras = texto.trim().split(/\\s*\\/\\s*/);\n  return palabras.map(palabra => {\n    const codigos = palabra.trim().split(/\\s+/).filter(Boolean);\n    const codigoDesconocido = codigos.find(codigo => !codigoMorseInvertido[codigo]);\n    if (codigoDesconocido) {\n      throw new Error(`La señal \"${codigoDesconocido}\" no corresponde a un carácter conocido.`);\n    }\n    return codigos.map(codigo => codigoMorseInvertido[codigo]).join('');\n  }).join(' ');\n}\nfunction procesarTexto() {\n  limpiarError();\n  campoTextoResultado.value = '';\n  if (!campoTextoEntrada.value.trim()) {\n    mostrarError('Escribe un texto para procesar.');\n    campoTextoEntrada.focus();\n    return;\n  }\n  try {\n    if (selectorTipoConversion.value === 'morseATexto') {\n      campoTextoResultado.value = traducirMorseATexto(campoTextoEntrada.value);\n    } else {\n      campoTextoResultado.value = traducirTextoAMorse(campoTextoEntrada.value);\n    }\n  } catch (error) {\n    mostrarError(error.message);\n  }\n}\nfunction limpiarCampos() {\n  campoTextoEntrada.value = '';\n  campoTextoResultado.value = '';\n  limpiarError();\n  campoTextoEntrada.focus();\n}\nbotonProcesar.addEventListener('click', procesarTexto);\nbotonLimpiar.addEventListener('click', limpiarCampos);\n\n//# sourceURL=webpack://plantilla/./src/index.js?\n}");

/***/ },

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css"
/*!***************************************************************!*\
  !*** css ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***************************************************************/
() {

"use strict";
eval("{\n\n\n//# sourceURL=webpack://plantilla/./node_modules/bootstrap/dist/css/bootstrap.min.css?\n}");

/***/ },

/***/ "./src/styles.css"
/*!****************************!*\
  !*** css ./src/styles.css ***!
  \****************************/
() {

"use strict";
eval("{\n\n\n//# sourceURL=webpack://plantilla/./src/styles.css?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;