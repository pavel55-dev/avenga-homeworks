const entries = [];
let input;

while (true) {
    input = prompt('Enter text or press cancel/esc to finish:');
    if (input === null) break;
    if (input.trim().toLowerCase() === 'exit') break;
    entries.push(input);
}

function returnString (array) {
    let result = '';
    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            result += array[i];
        } else {
            result += array[i] + ', ';
        }
    }
    return result;
}
alert(returnString(entries));