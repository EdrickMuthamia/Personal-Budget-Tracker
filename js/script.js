// Redirect to login page if not logged in
if (localStorage.getItem('isLoggedIn') !== 'true') {
    alert('You must log in to access this page.');
    window.location.href = 'login.html';
}

// Display the logged-in user's username
const loggedInUser = localStorage.getItem('loggedInUser');
if (loggedInUser) {
    const welcomeMessage = document.createElement('h2');
    welcomeMessage.id = 'welcome-message';
    welcomeMessage.innerText = `Welcome, ${loggedInUser}!`;
    document.body.insertBefore(welcomeMessage, document.body.firstChild);
}

// Function to update budget overview
function updateBudgetOverview() {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const totalIncome = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
    const totalExpenses = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);

    document.getElementById('total-income').innerText = `Ksh${totalIncome}`;
    document.getElementById('total-expenses').innerText = `Ksh${totalExpenses}`;
    document.getElementById('remaining-budget').innerText = `Ksh${totalIncome - totalExpenses}`;
}

// Function to display transaction history with optional filtering
function displayTransactionHistory(filter = 'all') {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = '';

    // Filter transactions based on the selected filter
    const filteredTransactions = transactions.filter(transaction => {
        if (filter === 'all') return true;
        return transaction.type === filter;
    });

    filteredTransactions.forEach((transaction, index) => {
        const li = document.createElement('li');
        li.innerText = `${transaction.type === 'income' ? 'Income' : 'Expense'}: Ksh${transaction.amount} - ${transaction.category} (${transaction.date})`;

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.style.marginLeft = '10px';
        deleteButton.addEventListener('click', function () {
            transactions.splice(index, 1); // Remove the transaction
            localStorage.setItem('transactions', JSON.stringify(transactions));
            updateBudgetOverview();
            displayTransactionHistory(filter);
        });

        li.appendChild(deleteButton);
        transactionList.appendChild(li);
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const type = document.getElementById('type').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const dateInput = document.getElementById('date').value;

    if (!amount || !category || !dateInput) {
        alert('Please fill out all fields.');
        return;
    }

    // Format the date to include the day of the week
    const dateObject = new Date(dateInput);
    const formattedDate = dateObject.toLocaleDateString('en-US', {
        weekday: 'long', // Full day name (e.g., Tuesday)
        year: 'numeric',
        month: 'long', // Full month name (e.g., May)
        day: 'numeric',
    });

    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push({ type, amount, category, date: formattedDate });
    localStorage.setItem('transactions', JSON.stringify(transactions));

    updateBudgetOverview();
    displayTransactionHistory();

    document.getElementById('transaction-form').reset();
}

// Handle logout
document.getElementById('logout-button')?.addEventListener('click', function () {
    localStorage.removeItem('isLoggedIn'); // Clear login status
    localStorage.removeItem('loggedInUser'); // Clear logged-in user
    alert('You have been logged out.');
    window.location.href = 'login.html'; // Redirect to the login page
});

// Add event listener to the form
document.getElementById('transaction-form').addEventListener('submit', handleFormSubmit);

// Add event listener to the filter dropdown
document.getElementById('filter').addEventListener('change', function () {
    const filter = this.value;
    displayTransactionHistory(filter);
});

// Call functions on page load
updateBudgetOverview();
displayTransactionHistory();