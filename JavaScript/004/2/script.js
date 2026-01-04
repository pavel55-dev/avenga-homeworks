const inputFiveNumbers = [
  prompt("Enter number 1:"),
  prompt("Enter number 2:"),
  prompt("Enter number 3:"),
  prompt("Enter number 4:"),
  prompt("Enter number 5:"),
];

function validateNumber(number) {
  if (isNaN(number) || number === "" || number === null) {
    return false;
  }
  return true;
}

function sumTheNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const validation = validateNumber(numbers[i]);
    if (validation == true) sum = sum + Number(numbers[i]);
    else {
      alert("Invalid input. Please enter a valid number.");
      return;
    }
  }
  alert("The total sum is: " + sum);
}
sumTheNumbers(inputFiveNumbers);
