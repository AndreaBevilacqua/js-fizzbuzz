/* 
  1 - Definiamo la variabile i e diamo il valore 1
  2 - Ciclo for, si ripete fino a quando i é minore o uguale a 100
  3 - Verifica condizione FizzBuzz, se il numero é un multipo sia di 3 che di 5
  4 - Verifica condizione Fizz, se il numero é multiplo di 3
  5 - Verifica condizione Buzz, se il numero é multiplo di 5
  6 - Se non é multiplo di 3 e 5 stampa il numero stesso in console
*/

console.log('JS OK')


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}