// Function to update budget overview
function updateBudgetOverview() {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const totalIncome = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
    const totalExpenses = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);

    document.getElementById('total-income').innerText = `$${totalIncome}`;
    document.getElementById('total-expenses').innerText = `$${totalExpenses}`;
    document.getElementById('remaining-budget').innerText = `$${totalIncome - totalExpenses}`;
}

// Function to display transaction history
function displayTransactionHistory() {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = '';

    transactions.forEach((transaction, index) => {
        const li = document.createElement('li');
        li.innerText = `${transaction.type === 'income' ? 'Income' : 'Expense'}: $${transaction.amount} - ${transaction.category}`;
        transactionList.appendChild(li);
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const type = document.getElementById('type').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    if (!amount || !category) {
        alert('Please fill out all fields.');
        return;
    }

    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push({ type, amount, category });
    localStorage.setItem('transactions', JSON.stringify(transactions));

    updateBudgetOverview();
    displayTransactionHistory();

    document.getElementById('transaction-form').reset();
}

// Add event listener to the form
document.getElementById('transaction-form').addEventListener('submit', handleFormSubmit);

// Call functions on page load
if (document.getElementById('total-income')) {
    updateBudgetOverview();
}

if (document.getElementById('transaction-list')) {
    displayTransactionHistory();
}