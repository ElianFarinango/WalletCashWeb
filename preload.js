window.addEventListener('DOMContentLoaded', () => {
let balance = 100.00;
let transactionId = 1;

document.getElementById('payButton').addEventListener('click', () => {
    handleTransaction('Pay');
});

document.getElementById('saleButton').addEventListener('click', () => {
    handleTransaction('Sale');
});
function handleTransaction(type) {
    const amountField = document.getElementById('amount');
    const amount = parseFloat(amountField.value);
    if (!isNaN(amount) && amount > 0) {
        if (type === 'Pay' && amount <= balance) {
            balance -= amount;
        } else if (type === 'Sale') {
            balance += amount;
        } else {
            alert('Invalid amount');
            return;
        }

        updateBalance();
        addTransaction(type, amount);
        amountField.value = '';
    } else {
        alert('Please enter a valid amount');
    }
}
function updateBalance() {
    document.getElementById('balance').textContent = `${balance.toFixed(2)}`;
}
function addTransaction(type, amount) {
    const transactionTable = document.getElementById('transactionTable').getElementsByTagName('tbody')[0];
    const newRow = transactionTable.insertRow();

    const idCell = newRow.insertCell(0);
    const typeCell = newRow.insertCell(1);
    const amountCell = newRow.insertCell(2);
    const dateCell = newRow.insertCell(3);

    const now = new Date();
    const formattedDate = now.getFullYear() + '/' +
        String(now.getMonth() + 1).padStart(2, '0') + '/' +
        String(now.getDate()).padStart(2, '0') + ' ' +
        String(now.getHours()).padStart(2, '0') + ':' +
        String(now.getMinutes()).padStart(2, '0');

    idCell.textContent = transactionId++;
    typeCell.textContent = type;
    amountCell.textContent = amount.toFixed(2);
    dateCell.textContent = formattedDate;
}
  })