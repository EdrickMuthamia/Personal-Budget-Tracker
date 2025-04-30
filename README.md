# Personal Budget Tracker

## Project Description
The **Personal Budget Tracker** is a web application designed to help users manage their finances effectively. It allows users to track their income and expenses, view a summary of their financial status, and maintain a history of transactions. The application also includes user authentication, ensuring that only registered users can access their personal budget data. The project is built with a focus on simplicity, usability, and responsiveness.

---

## Features
### Core Features:
- **User Authentication**:
  - Users can register with a username and password.
  - Login functionality ensures only authenticated users can access the application.
  - Logout functionality to securely end the session.

- **Budget Overview**:
  - Displays the total income, total expenses, and remaining budget dynamically.

- **Add Transactions**:
  - Users can add income or expense transactions with a category and amount.
  - Transactions are stored in the browser's `localStorage` for persistence.

- **Transaction History**:
  - Displays a list of all transactions with their type, amount, and category.
  - Includes a delete button to remove specific transactions.

### Additional Features:
- **Responsive Design**:
  - The application is fully responsive and works seamlessly on mobile, tablet, and desktop devices.

- **Dynamic Updates**:
  - The budget overview and transaction history are updated in real-time as users add or delete transactions.

- **Error Handling**:
  - Alerts users if required fields are missing during form submission.
  - Prevents duplicate usernames during registration.

---

## Technologies Used
- **HTML**: For structuring the web pages.
- **CSS**: For styling and responsive design.
- **JavaScript**: For dynamic updates, user authentication, and data management using `localStorage`.

---

## How It Works
### 1. **Registration**:
   - Users can register by providing a unique username and password.
   - The credentials are stored in `localStorage`.

### 2. **Login**:
   - Users log in with their credentials.
   - Login status is saved in `localStorage` to allow access to the application.

### 3. **Protected Pages**:
   - The home page (`index.html`) is protected and redirects users to the login page if they are not logged in.

### 4. **Add Transactions**:
   - Users can add income or expense transactions by filling out a form.
   - Transactions are saved in `localStorage` and displayed in the transaction history.

### 5. **View and Delete Transactions**:
   - Users can view a list of all transactions.
   - Each transaction has a delete button to remove it from the list and update the budget overview.

### 6. **Logout**:
   - Users can log out, which clears their login status and redirects them to the login page.

---

### 6. **Known Issues
 **No Password Encryption:**
  - Passwords are stored in plain text in localStorage. For production use, implement      password hashing and a secure backend.
**No Multi-User Support:** 
 - The application does not support multiple users accessing the same browser.
**No Edit Functionality:** 
 - Transactions cannot be edited once added.


 ---

## License
This project is licensed under the MIT License. Feel free to use and modify it as needed.


---   

## Contact
For any questions or feedback, feel free to reach out:
- Email: edrickmuthamia05@gmail.com
- Phone: 011745920
- Address: 123 Budget Street, Finance City, 45678


