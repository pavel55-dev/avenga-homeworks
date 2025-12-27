const dogAge = prompt("How old are you dog?");
const humanAge = prompt("And how old are you human?");

const dogToHumanAge = dogAge * 7;
const humanToDogAge = humanAge / 7;

function calculateDogHumanAge () {
    if (isNaN(dogAge) || isNaN(humanAge)) {
        alert("Please enter valid numbers for ages.");
        return;
    }
    alert(`Dog you are ${dogToHumanAge} years old in human years. And human, you are ${humanToDogAge.toFixed(2)} years old in dog years.`);
}
calculateDogHumanAge();
// Namerno go napraviv realistichno :)