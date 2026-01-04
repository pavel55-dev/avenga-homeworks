const firstNames =[prompt("Enter first name 1:"), prompt("Enter first name 2:"), prompt("Enter first name 3:")];
const lastNames = [prompt("Enter last name 1:"), prompt("Enter last name 2:"), prompt("Enter last name 3:")];

function combineNames(firstNames, lastNames) {
    const fullNames = [];
    for (let i = 0; i < firstNames.length; i++) {
        fullNames[i] = (i+1) + ". " + firstNames[i] + " " + lastNames[i];
    }
    return fullNames;
}
const combinedNames = combineNames(firstNames, lastNames);
for (i = 0; i < combinedNames.length; i++) {
    console.log(combinedNames[i]);
}