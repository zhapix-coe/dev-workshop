// Load the built-in 'readline' module for command-line input and output
const readline = require("readline");

// Create a readline interface to read from standard input (keyboard) and write to standard output (console)
const rl = readline.createInterface({
  input: process.stdin,  // Read input from terminal
  output: process.stdout // Write output to terminal
});

// Initialize an empty array to store user data
let users = [];

// Function to show the main menu to the user
function showMenu() {
  console.log("\n=== User CRUD Menu ===");   // Display title
  console.log("1. Create User");             // Option 1: Create a user
  console.log("2. Read Users");              // Option 2: View all users
  console.log("3. Update User");             // Option 3: Update user info
  console.log("4. Delete User");             // Option 4: Delete a user
  console.log("5. Exit");                    // Option 5: Exit program

  // Ask the user to choose one of the options
  rl.question("Choose an option (1-5): ", handleMenu); // Pass input to handleMenu()
}

// Function to handle the menu option selected by the user
function handleMenu(option) {
  switch (option.trim()) { // Remove any extra spaces from input
    case "1":              // If user selects 1
      createUser();        // Call createUser function
      break;

    case "2":              // If user selects 2
      readUsers();         // Call readUsers function
      break;

    case "3":              // If user selects 3
      updateUser();        // Call updateUser function
      break;

    case "4":              // If user selects 4
      deleteUser();        // Call deleteUser function
      break;

    case "5":              // If user selects 5
      rl.close();          // Close the readline interface (triggers exit handler)
      break;

    default:               // For any other invalid input
      console.log("❌ Invalid option."); // Show error message
      showMenu();          // Show menu again
  }
}

// Function to create a new user
function createUser() {
  rl.question("Enter name: ", (name) => {        // Ask for user name
    rl.question("Enter email: ", (email) => {    // Ask for user email
      const id = users.length + 1;               // Generate a new ID (based on array length)
      users.push({ id, name, email });           // Add new user object to the users array
      console.log("✅ User created.");            // Show confirmation
      showMenu();                                // Return to main menu
    });
  });
}

// Function to display all users
function readUsers() {
  console.log("\n=== User List ===");  // Display list title
  console.table(users);                // Print user array as a formatted table
  showMenu();                          // Return to main menu
}

// Function to update an existing user's details
function updateUser() {
  rl.question("Enter user ID to update: ", (idStr) => { // Ask for user ID
    const id = parseInt(idStr);                         // Convert input string to number
    const user = users.find((u) => u.id === id);        // Find user by ID

    if (!user) {                          // If user not found
      console.log("❌ User not found.");  // Show error message
      return showMenu();                 // Return to main menu
    }

    // Ask for new name (blank input means keep existing name)
    rl.question("Enter new name (leave blank to keep current): ", (name) => {
      // Ask for new email (blank input means keep existing email)
      rl.question("Enter new email (leave blank to keep current): ", (email) => {
        if (name) user.name = name;       // Update name if input is provided
        if (email) user.email = email;    // Update email if input is provided
        console.log("✅ User updated.");   // Show success message
        showMenu();                       // Return to main menu
      });
    });
  });
}

// Function to delete a user
function deleteUser() {
  rl.question("Enter user ID to delete: ", (idStr) => { // Ask for user ID
    const id = parseInt(idStr);                         // Convert input to number
    const index = users.findIndex((u) => u.id === id);  // Find index of user in array

    if (index === -1) {                    // If user not found
      console.log("❌ User not found.");   // Show error message
    } else {
      users.splice(index, 1);             // Remove user from array
      console.log("🗑️ User deleted.");    // Show success message
    }
    showMenu();                            // Return to main menu
  });
}

// Initial function call to display the menu when program starts
showMenu();

// Event listener for when the readline interface is closed (i.e., user selects "Exit")
rl.on("close", () => {
  console.log("\n📋 Final Report:"); // Show final report heading
  console.table(users);              // Display remaining users before exiting
  console.log("👋 Exiting program."); // Say goodbye
  process.exit(0);                   // Terminate the Node.js process
});
