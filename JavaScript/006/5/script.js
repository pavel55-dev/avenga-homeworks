const userInput = [prompt("Enter a number: ")];

while (true) {
    userInput.push(prompt("Enter another number (or type 'stop' to finish): "));
    if (userInput[userInput.length - 1].toLowerCase() === 'stop') {
        userInput.pop(); // Remove the 'stop' entry
        break;
    }
}

const listHTML = document.getElementById('user-inputs-list');
userInput.forEach(input => {
    const listItem = document.createElement('li');
    listItem.textContent = input;
    listHTML.appendChild(listItem);
});

function calculateSum(inputs) {
    let sum = 0;
    for (let i = 0; i < inputs.length; i++) {
        sum += Number(inputs[i]);
    }
    return sum;
}
const totalSum = calculateSum(userInput);

const sumDisplay = document.getElementById('output');
sumDisplay.innerText = `The sum of the entered numbers is: ${totalSum}`;
