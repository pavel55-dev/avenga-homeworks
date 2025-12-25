const zodiacSign = "";
const userInput = prompt("Enter a number:");

 function calculateZodiacSign() {
        const zodiacSign = (userInput - 4) % 12;
        if (zodiacSign === 0) {
        return "Rat";
        } else if (zodiacSign === 1) {
        return "Ox";
        } else if (zodiacSign === 2) {
        return "Tiger";
        } else if (zodiacSign === 3) {
        return "Rabbit";
        } else if (zodiacSign === 4) {
        return "Dragon";
        } else if (zodiacSign === 5) {
        return "Snake";
        } else if (zodiacSign === 6) {
        return "Horse";
        } else if (zodiacSign === 7) {
        return "Goat";
        } else if (zodiacSign === 8) {
        return "Monkey";
        } else if (zodiacSign === 9) {
        return "Rooster";
        } else if (zodiacSign === 10) {
        return "Dog";
        } else if (zodiacSign === 11) {
        return "Pig";
        }
    }



if (userInput < 0 || isNaN(userInput)) {
    console.log("You must enter a positive number");
} else {
    console.log(`Your Zodiac Sign is ${calculateZodiacSign()}`);
}

   