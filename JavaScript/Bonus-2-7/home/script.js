function getInfo() {
    const userSaldo = prompt("Please enter your saldo:");
    const pullMoney = prompt("How much money do you want to pull?");
    if (isNaN(userSaldo) || isNaN(pullMoney)) {
        alert("Please enter valid numbers.");
        return;
    } else if (Number(pullMoney) > Number(userSaldo)) {
        alert("You do not have enough saldo.");
        return;
    } else {
        const newSaldo = Number(userSaldo) - Number(pullMoney);
        alert(`You have successfully pulled ${pullMoney}. Your new saldo is ${newSaldo}.`);
    } 
}

getInfo();