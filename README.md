# Monthly Budget Tracker

The Monthly Budget Tracker is a simple web application that allows users to track their income and expenses for the month. It provides a user-friendly interface to input and manage financial entries and calculates the total budget based on the provided data.

## Technologies Used

- HTML
- CSS
- JavaScript
- Express.js
- Axios

## Files and Directories

- `index.html`: The main HTML file that defines the structure of the web page.
- `index.css`: The CSS file that styles the HTML elements of the application.
- `index.js`: The JavaScript file that implements the client-side logic and interactions.
- `server.js`: The server-side file that sets up the Express.js server and API endpoints.
- `controller.js`: The server-side file that contains the logic for handling API requests.
- `README.md`: The README file providing information and instructions about the application.

## Setup and Usage

1. Make sure you have Node.js and npm installed.
2. Download or clone the project repository.
3. Navigate to the project directory.
4. Install the project dependencies by running the following command: npm install
5. Start the server by running the following command: node server.js
6. Access the application by opening a web browser and visiting `http://localhost:4000`.
7. Enter your expenses and income in the input form provided and click the "Add Expense or Income" button to add the entries.

![Alt text](screenshots/Monthly-budget-tracker-main.png)

8. The added entries will be displayed in the output table. You can delete an entry by clicking the "Delete" button next to it.

![Alt text](screenshots/Monthly-budget-tracker-2.png)

9. To calculate the total budget, click the "Get Total" button. The total amount will be displayed in the total table.

![Alt text](screenshots/Monthly-budget-tracker-3.png)