const entries = [];
let input;

while (true) {
    input = prompt('Enter text or press cancel/esc to finish:');
    if (input === null) break;
    if (input.trim().toLowerCase() === 'exit') break;
    entries.push(input);
}

function returnString (array) {
    return array.join(', ');
}
alert(returnString(entries));