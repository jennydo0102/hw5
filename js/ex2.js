const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log("Odd Numbers: ", oddNumbers);


const divisibleByTwoOrFive = numbers.filter(number => number % 2 === 0 || number % 5 === 0);
console.log("Divisible by 2 or 5: ", divisibleByTwoOrFive);


const divisibleByThreeSquared = numbers.filter(number => number % 3 === 0).map(number => number ** 2);
console.log("Divisible by 3, Squared: ", divisibleByThreeSquared);


const sumOfSquaresDivisibleByFive = numbers.filter(number => number % 5 === 0).reduce((accumulator, number) => accumulator + (number ** 2), 0);
console.log("Sum of squares of numbers divisible by 5: ", sumOfSquaresDivisibleByFive);
