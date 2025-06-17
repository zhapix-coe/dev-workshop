// concat() – Join Strings
let firstName = "Abdul";              // Declare first name
let lastName = "kalam";              // Declare last name
let fullName = firstName.concat(" ", lastName); // Combine first and last name
console.log(fullName);                // Print full name

//split() – Split String into Array
let sentence = "Fix Your Mindset"; // Declare sentence
let words = sentence.split(" ");              // Split sentence by spaces
console.log(words);                           // Print array of words

//substr() – Extract Part of String
let userCode = "ADTI2025";         // Declare a code
let prefix = userCode.substr(0, 4); // Get 4 characters starting at index 0
console.log(prefix);               // Print the extracted part

// replace() – Replace Text
let message = "Welcome to JvaScript class";   // Original message with typo
let fixed = message.replace("JvaScript", "JavaScript"); // Fix the typo
console.log(fixed);                           // Print corrected message

// trim() – Remove Extra Spaces
let rawInput = "   Hello, priya  !   ";  // Input with extra spaces
let cleanInput = rawInput.trim();     // Remove spaces from both ends
console.log(cleanInput);              // Print cleaned string

// The basics of arrays and how they're used in CRUD-style logic:
// Simple Number Array
// Create an array of numbers
const numbers = [10, 20, 30, 40, 50];

// Print the entire array to the console
console.log("Numbers:", numbers);

//Array of Strings (Names)
// Create an array of intern student names
const interns = ["Asha", "Vikram", "Neha", "Karan"];

// Print all intern names
console.log("Intern Names:", interns);

//Array of Objects (Intern Data)

// Create an array of objects, each object represents an intern
const internList = [
    { id: 1, name: "Asha", email: "asha@gmail.com" },  // First intern object
    { id: 2, name: "Vikram", email: "vikram@gmail.com" }  // Second intern object
];

// Access and print the name of the first intern
console.log("First Intern Name:", internList[0].name);

//Add and Remove Items (push & pop)
// Create an array with two tasks
const tasks = ["Login", "Fill Form"];

// Add a new task to the end of the array using push()
tasks.push("Submit");

// Show array after adding new task
console.log("After push:", tasks);

// Remove the last task from the array using pop()
tasks.pop();

// Show array after removing last task
console.log("After pop:", tasks);

//Loop Through Array (forEach)
// Create an array of department names
const departments = ["HR", "IT", "Finance"];

// Use forEach to loop through each item in the array
departments.forEach((dept, index) => {
    // Print each department with its number
    console.log(`Dept ${index + 1}: ${dept}`);

    //  map() – Transform Each Item
    // Create an array of intern names
    const interns = ["Asha", "Vikram", "Neha"];

    // Use map() to create a new array with all names in uppercase
    const upperNames = interns.map((name) => {
        return name.toUpperCase(); // Convert each name to uppercase
    });

    // Print original names
    console.log("Original names:", interns);

    // Print new array with uppercase names
    console.log("Uppercase names:", upperNames);

    //filter() – Keep Items That Match a Condition
    // Create an array of intern objects with name and department
    const internDetails = [
        { name: "Asha", dept: "HR" },
        { name: "Neha", dept: "IT" },
        { name: "Vikram", dept: "HR" }
    ];

    // Use filter() to find only HR department interns
    const hrInterns = internDetails.filter((intern) => {
        return intern.dept === "HR"; // Keep only if dept is 'HR'
    });

    // Print the filtered list of HR interns
    console.log("HR Interns:", hrInterns);

    //reduce() – Combine All Items into One Result
    // Create an array of intern marks
const scores = [80, 70, 90, 85];

// Use reduce() to add up all scores into one total
const totalScore = scores.reduce((sum, score) => {
  return sum + score; // Add current score to total sum
}, 0); // Start with 0

// Print the total score
console.log("Total Score:", totalScore);

// Calculate and print average score
console.log("Average Score:", totalScore / scores.length);

// error handling
try {
  // Step 1: Set intern name
  let internName = "Rahul";

  // Step 2: Ask intern to enter their age
  let internAge = prompt("Hi " + internName + "! Enter your age:");

  // Step 3: Convert the input (which is a string) to a number
  let age = Number(internAge);

  // Step 4: Check if the input is not a valid number
  if (isNaN(age)) {
    // If not a number, throw an error
    throw new Error("Please enter a valid number for age.");
  }

  // Step 5: Check if the age is in the valid intern range (18 to 35)
  if (age < 18 || age > 35) {
    // If age is too low or too high, throw another error
    throw new Error("Intern age must be between 18 and 35.");
  }

  // Step 6: If everything is okay, print a success message
  console.log(" Welcome " + internName + "! Your age is " + age + ".");
  
} catch (error) {
  // This block runs ONLY if an error happens above
  // Step 7: Show a friendly error message to the intern
  console.log(" Error: " + error.message);
}

});

