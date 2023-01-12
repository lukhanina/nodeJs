import colors from 'colors'

const args = process.argv.slice(2);
const firstN = +args[0];
const secondN = +args[1]

const colorize = (arr) => {
  for (let idx = 0; idx < arr.length; ) {
    console.log(colors.green(arr[idx]));
    arr[idx + 1] ? console.log(colors.yellow(arr[idx + 1])) : '';
    arr[idx + 2] ? console.log(colors.red(arr[idx + 2])) : '';
    idx += 3
   } 
}

const getPrimeNumbers = (a, b) => {
    if (!isNaN(a) && !isNaN(b) && a < b) {
        const primeNumbers = [];
        for (a >= 0 ? a : a = 0; a <= b; a++) {
            if (a === 1 || a === 3 || a === 5 || a === 7 ) {
                primeNumbers.push(a)
            } 
            else if (a % 2 !== 0 && a % 3 !== 0 && a % 5 !== 0 && a % 7 !== 0) {
                primeNumbers.push(a)
            } 
        }
        primeNumbers.length ? colorize(primeNumbers) : console.log(colors.red('Error - no prime numbers'))
    } else console.log(colors.red("There aren't numbers or first number bigger then second"))
} 

getPrimeNumbers(Math.ceil(firstN), Math.floor(secondN))