const { checkInventory } = require('./library.js'); // include the function checkInventory() from library.js

const order = [
    ['sunglasses', 1],
    ['bags', 2]
];

// Write your code below:
const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
}
const handleFailure = (rejectionReason) => {
    console.log(rejectionReason)
}

checkInventory(order).then(handleSuccess, handleFailure)