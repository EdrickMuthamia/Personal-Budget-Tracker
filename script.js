// Function to update budget overview
function updateBudgetOverview() {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const totalIncome = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
    const totalExpenses = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
    
    document.getElementById('total-income').innerText = `$${totalIncome}`;
    document.getElementById('total-expenses').innerText = `$$
{totalExpenses}`;
    document.getElementById('remaining-budget').innerText = `$${totalIncome - totalExpenses}`;
}

// Function to add transaction
document.getElementById('transaction-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const type = amount >= 0 ? 'income' : 'expense';

    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push({ amount: Math.abs(amount), category, type });
    localStorage.setItem('transactions', JSON.stringify(transactions));

    document.getElementById('transaction-form').reset();
    updateBudgetOverview();
});

// Function to display transaction history
function displayTransactionHistory() {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = '';

    transactions.forEach((transaction, index) => {
        const li = document.createElement('li');
        li.innerText = `${transaction.type === 'income' ? 'Income' : 'Expense'}: $$
{transaction.amount} - ${transaction.category}`;
        transactionList.appendChild(li);
    });
}

// Call functions on page load
if (document.getElementById('total-income')) {
    updateBudgetOverview();
}

if (document.getElementById('transaction-list')) {
    displayTransactionHistory();
}