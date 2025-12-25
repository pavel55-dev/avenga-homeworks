const pricePerOrder = 35;

const amountOfOrders = prompt("Enter amount of orders:");
if (isNaN(amountOfOrders) || amountOfOrders <= 0 || amountOfOrders > 4 ) {
    alert("Invalid input! Please enter a number between 1 and 4.");
    throw new Error("Program terminated due to invalid input.");
}

let member = prompt("Are you a member? (yes/no)").toLowerCase();
if (member !== "yes" && member !== "no") {
    alert("Invalid input! Please answer with 'yes' or 'no' *lowercase*.");
    throw new Error("Program terminated due to invalid input.");
}

const taxRate = 0.18;
const totalPrice = pricePerOrder * amountOfOrders;
console.log("Total price before tax: " + totalPrice + " USD");

if (member === "yes") {
    const discount = totalPrice * 0.10;
    console.log("Discount for members: " + discount + " USD");
} else {
    console.log("No discount applied.");
    }

const taxAmount = totalPrice * taxRate;
console.log("Tax amount (18%): " + taxAmount + " USD");

if (totalPrice < 100) {
    const shippingFee = 10;
    console.log("Shipping fee: " + shippingFee + " USD");
} else {
    console.log("Free shipping applied.");
}
const finalAmount = totalPrice + taxAmount + (totalPrice < 100 ? 10 : 0) - (member === "yes" ? totalPrice * 0.10 : 0);
console.log("Final amount to be paid: " + finalAmount + " USD");