let humanWeight = prompt ("Enter your weight in kilograms:");

function weightInChickens(weightKg) {
    const chickenWeightKg = 0.5;
    const chickenWeight = chickenWeightKg * weightKg;
    return chickenWeight;
}
let chickensEquivalent = weightInChickens(humanWeight);

let message = document.getElementById("result");
message.innerHTML = `Your weight is equivalent to ${chickensEquivalent} chickens.`;