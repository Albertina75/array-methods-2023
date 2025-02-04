/**
 * Dado el siguiente array de números, aplica adecuadamente cada uno de los métodos de array obteenr la información requerida
 *
 * Resultado esperado: https://oscarm.tinytake.com/msc/ODg4NjgxMF8yMjM0MDYyNg
 */

const numbers = [-5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

/**
 * Utiliza la método forEach para mostrar cada número por consola
 */
numbers.forEach((number) => {
    console.log(number);
})
/**
 * Utiliza el método find para encontrar el primer número mayor de 10
 */
const firstNumberGreaterThan10 = numbers.find((number) => number > 10);
console.log('Primer número mayor de 10 es:', firstNumberGreaterThan10);
/**
 * Utliza el método some para saber si existe un número mayor de 20
 */
const isAnyNumberGreaterThan20 = numbers.some((number) => number > 20);
console.log('Existe algún número mayor de 20?', isAnyNumberGreaterThan20);
/**
 * Utiliza el método every para comprobar si todos los números de este array son impares
 */
const areAllNumbersOdd = numbers.every((number) => number % 2 !== 0 )
console.log('Son todos los números impares?', areAllNumbersOdd);
/**
 * Utiliza el método filter para obtener un nuevo array con todos los números que son mayores de 3 pero menores de 9
 */
const filteredNumbers = numbers.filter((number) => number >3 && number < 9);
console.log('Nuevos números filtrados:', filteredNumbers);
/**
 * Utiliza el método map para obtener otro array donde, para cada posición, ontengamos un -1 si el número que ocupaba aquella posición es negativo, y un +1 si el nuemero es positivo
 * [-1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
 */

const mappedNumbers = numbers.map((number) => (number < 0 ? -1 :1));
console.log('Nuevos números mapeados:', mappedNumbers);