# Full Stack Lab
 
**Laboratory Components**

## 1. JavaScript Basics

Write a script that logs "Hello, World!" to the console. Create a script that calculates the sum of two numbers and displays the result in an alert box.

## 2. Arrays

Create an array of 5 cities and perform the following operations:

- Log the total number of cities.
- Add a new city at the end.
- Remove the first city.
- Find and log the index of a specific city.

## 3. Strings and Functions

Read a string from the user, Find its length. Extract the word "JavaScript" using substring() or slice(). Replace one word with another word and log the new string.

Write a function isPalindrome(str) that checks if a given string is a palindrome (reads the same backward).

## 4. Objects

Create an object student with properties:

- name (string)
- grade (number)
- subjects (array)
- displayInfo() (method to log the student's details)

Write a script to dynamically add a passed property to the student object, with a value of true or false based on their grade.

Create a loop to log all keys and values of the student object.

## 5. DOM and Events

Create a button in your HTML with the text "Click Me".

Add an event listener to log "Button clicked!" to the console when the button is clicked.

Select an image and add a mouseover event listener to change its border color.

Add an event listener to the document that logs the key pressed by the user.

## 6. React Issue Tracker

Build a React application to track issues. Display a list of issues (use static data). Each issue should have a title, description, and status (e.g., Open/Closed). Render the list using a functional component.

## 7. React Counter

Create a component Counter with a state variable count initialized to 0.

Create buttons to increment and decrement the count.

Simulate fetching initial data for the Counter component using useEffect (functional component) or componentDidMount (class component).

Extend the Counter component to double the count value when a button is clicked.

Reset the count to 0 using another button.

## 8. Express Basic Server

Install Express:

    npm install express

Set up a basic server that responds with "Hello, Express!" at the root endpoint (GET /).

## 9. REST API

Create a REST API.

Implement endpoints for a Product resource:

- GET /products: Returns a list of products.
- POST /products: Adds a new product.
- GET /products/:id: Returns details of a specific product.
- PUT /products/:id: Updates an existing product.
- DELETE /products/:id: Deletes a product.

Add middleware to log requests to the console.

Use express.json() to parse incoming JSON payloads.

## 10. MongoDB Driver

Install the MongoDB driver for Node.js.

Create a Node.js script to connect to the shop database.

Implement insert, find, update, and delete operations using the Node.js MongoDB driver.

## 11. Mongoose

Define a product schema using Mongoose.

Insert data into the products collection using Mongoose.

Create an Express API with a /products endpoint to fetch all products.

## 12. React and Products API

Use fetch in React to call the /products endpoint and display the list of products.

Add a POST /products endpoint in Express to insert a new product.

Update the Product List:

After adding a product, update the list of products displayed in React.

---

