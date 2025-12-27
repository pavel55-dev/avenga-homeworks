// IronBank Legacy Terminal
// Constraints: No loops, no classes, no DOM APIs. Interaction strictly via dialogs.

const bankData = {
    "admin": { pin: "0000", balance: 1000000, history: [] },
    "user1": { pin: "1234", balance: 500, history: [] },
    "user2": { pin: "9999", balance: 10, history: [] }
};

const currencySymbol = "$";

startIronBankTerminal();

function startIronBankTerminal() {
    alert("Welcome to the IronBank Legacy Terminal.\nPlease use the prompts to navigate.");
    showMainMenu();
}

function showMainMenu() {
    const choice = getTrimmedPrompt(
        "=== IronBank Main Menu ===\n" +
        "1. Login\n" +
        "2. Exit\n" +
        "Enter option number:"
    );

    if (choice === null) {
        confirmExit();
        return;
    }

    if (choice === "1") {
        loginFlow();
    } else if (choice === "2") {
        confirmExit();
    } else {
        alert("Invalid choice. Please try again.");
        showMainMenu();
    }
}

function confirmExit() {
    const shouldExit = confirm("Exit IronBank terminal?");
    if (shouldExit) {
        alert("Session ended. Goodbye.");
    } else {
        showMainMenu();
    }
}

function loginFlow() {
    const usernameInput = getTrimmedPrompt("Enter username (Cancel to return):");

    if (usernameInput === null) {
        showMainMenu();
        return;
    }

    if (!userExists(usernameInput)) {
        alert("User not found. Please try again.");
        loginFlow();
        return;
    }

    const userRecord = bankData[usernameInput];
    const pinInput = getTrimmedPrompt("Enter PIN for " + usernameInput + " (Cancel to return):");

    if (pinInput === null) {
        showMainMenu();
        return;
    }

    if (pinInput !== userRecord.pin) {
        alert("Incorrect PIN. Please try again.");
        loginFlow();
        return;
    }

    alert("Welcome, " + usernameInput + ".");
    showDashboard(usernameInput);
}

function showDashboard(username) {
    const userRecord = bankData[username];
    const choice = getTrimmedPrompt(
        "=== IronBank Dashboard ===\n" +
        "Logged in as: " + username + "\n" +
        "Current Balance: " + formatCurrency(userRecord.balance) + "\n\n" +
        "1. Check Balance\n" +
        "2. Deposit Funds\n" +
        "3. Withdraw Funds\n" +
        "4. Transfer Money\n" +
        "5. View Transaction History\n" +
        "6. Change PIN\n" +
        "7. Logout\n" +
        "Enter option number:"
    );

    if (choice === null) {
        const shouldLogout = confirm("Logout and return to main menu?");
        if (shouldLogout) {
            showMainMenu();
        } else {
            showDashboard(username);
        }
        return;
    }

    if (choice === "1") {
        alert("Your balance is " + formatCurrency(userRecord.balance) + ".");
        showDashboard(username);
        return;
    }

    if (choice === "2") {
        handleDeposit(username);
        return;
    }

    if (choice === "3") {
        handleWithdrawal(username);
        return;
    }

    if (choice === "4") {
        handleTransfer(username);
        return;
    }

    if (choice === "5") {
        handleHistoryView(username);
        return;
    }

    if (choice === "6") {
        handlePinChange(username);
        return;
    }

    if (choice === "7") {
        const confirmed = confirm("Confirm logout?");
        if (confirmed) {
            alert("Logged out.");
            showMainMenu();
        } else {
            showDashboard(username);
        }
        return;
    }

    alert("Invalid dashboard option. Try again.");
    showDashboard(username);
}

function handleDeposit(username) {
    const amountInput = getTrimmedPrompt("Enter deposit amount:");

    if (amountInput === null) {
        showDashboard(username);
        return;
    }

    const amount = parseAmount(amountInput);
    if (amount === null || amount <= 0) {
        alert("Deposit must be a positive number.");
        handleDeposit(username);
        return;
    }

    const userRecord = bankData[username];
    userRecord.balance += amount;
    addHistoryEntry(username, "Deposited " + formatCurrency(amount) + " on " + getTimestamp());
    alert("Deposit successful. New balance: " + formatCurrency(userRecord.balance) + ".");
    showDashboard(username);
}

function handleWithdrawal(username) {
    const amountInput = getTrimmedPrompt("Enter withdrawal amount:");

    if (amountInput === null) {
        showDashboard(username);
        return;
    }

    const amount = parseAmount(amountInput);
    if (amount === null || amount <= 0) {
        alert("Withdrawal must be a positive number.");
        handleWithdrawal(username);
        return;
    }

    const userRecord = bankData[username];
    if (amount > userRecord.balance) {
        alert("Insufficient funds. Current balance: " + formatCurrency(userRecord.balance) + ".");
        handleWithdrawal(username);
        return;
    }

    const confirmed = confirm("Confirm withdrawal of " + formatCurrency(amount) + "?");
    if (!confirmed) {
        alert("Withdrawal canceled.");
        showDashboard(username);
        return;
    }

    userRecord.balance -= amount;
    addHistoryEntry(username, "Withdrew " + formatCurrency(amount) + " on " + getTimestamp());
    alert("Withdrawal successful. New balance: " + formatCurrency(userRecord.balance) + ".");
    showDashboard(username);
}

function handleTransfer(username) {
    const recipientInput = getTrimmedPrompt("Enter recipient username:");

    if (recipientInput === null) {
        showDashboard(username);
        return;
    }

    if (!userExists(recipientInput)) {
        alert("Recipient not found.");
        handleTransfer(username);
        return;
    }

    if (recipientInput === username) {
        alert("Cannot transfer to yourself.");
        handleTransfer(username);
        return;
    }

    const amountInput = getTrimmedPrompt("Enter amount to transfer:");

    if (amountInput === null) {
        showDashboard(username);
        return;
    }

    const amount = parseAmount(amountInput);
    if (amount === null || amount <= 0) {
        alert("Transfer amount must be positive.");
        handleTransfer(username);
        return;
    }

    const senderRecord = bankData[username];
    const recipientRecord = bankData[recipientInput];

    if (amount > senderRecord.balance) {
        alert("Insufficient funds. Current balance: " + formatCurrency(senderRecord.balance) + ".");
        handleTransfer(username);
        return;
    }

    senderRecord.balance -= amount;
    recipientRecord.balance += amount;

    addHistoryEntry(username, "Sent " + formatCurrency(amount) + " to " + recipientInput + " on " + getTimestamp());
    addHistoryEntry(recipientInput, "Received " + formatCurrency(amount) + " from " + username + " on " + getTimestamp());

    alert("Transfer complete. New balance: " + formatCurrency(senderRecord.balance) + ".");
    showDashboard(username);
}

function handleHistoryView(username) {
    const history = bankData[username].history;
    if (!history || history.length === 0) {
        alert("No transactions yet.");
        showDashboard(username);
        return;
    }

    const historyString = buildHistoryString(history, 0);
    alert("=== Transaction History ===\n" + historyString);
    showDashboard(username);
}

function buildHistoryString(entries, index) {
    if (!entries || index >= entries.length) {
        return "";
    }

    const currentEntry = (index + 1) + ". " + entries[index];
    const remainder = buildHistoryString(entries, index + 1);

    if (remainder === "") {
        return currentEntry;
    }

    return currentEntry + "\n" + remainder;
}

function handlePinChange(username) {
    const currentPinInput = getTrimmedPrompt("Enter current PIN:");

    if (currentPinInput === null) {
        showDashboard(username);
        return;
    }

    if (currentPinInput !== bankData[username].pin) {
        alert("Current PIN incorrect.");
        handlePinChange(username);
        return;
    }

    const newPinInput = getTrimmedPrompt("Enter new 4-digit PIN:");

    if (newPinInput === null) {
        showDashboard(username);
        return;
    }

    if (!isFourDigitPin(newPinInput)) {
        alert("PIN must be exactly 4 digits.");
        handlePinChange(username);
        return;
    }

    const confirmPinInput = getTrimmedPrompt("Confirm new PIN:");

    if (confirmPinInput === null) {
        showDashboard(username);
        return;
    }

    if (confirmPinInput !== newPinInput) {
        alert("PIN confirmation mismatch.");
        handlePinChange(username);
        return;
    }

    bankData[username].pin = newPinInput;
    addHistoryEntry(username, "Changed PIN on " + getTimestamp());
    alert("PIN updated successfully.");
    showDashboard(username);
}

function addHistoryEntry(username, entry) {
    bankData[username].history.push(entry);
}

function userExists(username) {
    return Object.prototype.hasOwnProperty.call(bankData, username);
}

function parseAmount(rawValue) {
    if (rawValue === "") {
        return null;
    }

    const amount = parseFloat(rawValue);
    if (!Number.isFinite(amount)) {
        return null;
    }

    return amount;
}

function isFourDigitPin(pinValue) {
    if (!pinValue) {
        return false;
    }

    if (!/^\d{4}$/.test(pinValue)) {
        return false;
    }

    if (pinValue === "0000") {
        return confirm("PIN 0000 is insecure. Use anyway?");
    }

    return true;
}

function getTrimmedPrompt(message) {
    const response = prompt(message);
    if (response === null) {
        return null;
    }
    return response.trim();
}

function formatCurrency(amount) {
    const safeAmount = typeof amount === "number" ? amount : 0;
    return currencySymbol + safeAmount.toFixed(2);
}

function getTimestamp() {
    return new Date().toLocaleString();
}
