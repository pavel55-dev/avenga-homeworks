const tenNumbers = [prompt("Enter number 1:"), prompt("Enter number 2:"), prompt("Enter number 3:"), prompt("Enter number 4:"), prompt("Enter number 5:"), prompt("Enter number 6:"), prompt("Enter number 7:"), prompt("Enter number 8:"), prompt("Enter number 9:"), prompt("Enter number 10:")];

function findMaxMinSum(array) {
    let max = Number(array[0]);
    let min = Number(array[0]);
    let sum = 0;
    for (let i = 0; i <array.length; i++) {
        let num = Number(array[i]);
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
        sum = max + min;
    }
    return { max, min, sum };
}
const result = findMaxMinSum(tenNumbers);
console.log(`Maximum: ${result.max}`);
console.log(`Minimum: ${result.min}`);
console.log(`Sum of max and min: ${result.sum}`);