// Declare a global variable that can be used anywhere
let userName = "John";

// Define a function called greetUser
function greetUser() {

  // Inside the function: declare a variable (function scope)
  let greeting = "Hello";

  // Start error handling using try block
  try {
    // Print a welcome message using global and function variables
    console.log(greeting + ", " + userName); // Output: Hello, John

    // Try to print a variable that does NOT exist (this will cause an error)
    console.log(nonExistingVariable); //  This line causes an error

  // If any error happens in the try block, it comes here
  } catch (error) {
    // Show a simple message to the user when an error happens
    console.log(" Oops! Something went wrong.");

    // Print the actual error message for debugging
    console.log("Error message:", error.message);
  }

  // Block scope example: this variable exists only inside this if block
  if (true) {
    let mood = "happy"; // mood is only available inside this block
    console.log("User is", mood); // Output: User is happy
  }

  // console.log(mood); // Error: mood is not defined outside the block
}

// Call the function to run all the code above
greetUser(); // This runs the greetUser function

