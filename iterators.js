// .forEach method

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function(fruitItem) {
  console.log('I want to eat a ' + fruitItem)
}
)



// .map method

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0]
});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => {
  return num/100
})
console.log(smallNumbers)



// .filter method

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
  return num < 250
})


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7
})



// .findIndex() method
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animalia => {
  return animalia === 'elephant'
})

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's'
})
console.log(startsWithS)



// the .reduce() method
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
}, 10) // here 10 acts as a second argument

console.log(newSum)



// the .some() method

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// the .some() method checks that at least one element passes the condition

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => {
  return word.length > 5
})



// the .every() method

// .every() method checks all elements pass the condition
console.log(interestingWords.every((word) => { 
  return word.length > 5
} ));