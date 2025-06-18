// 1 CONCAT — Join two strings (first name + last name)
function concatName(firstName, lastName) {
  return firstName + " " + lastName; // Combine with space
}
const fullName = concatName("Aarthi", "Gopal"); // Full name created
console.log("1 Full Name (Concat):", fullName); // Output: "Aarthi Gopal"


//  Interns Data - Array of intern objects
const interns = [
  { name: fullName, phoneNo: 994454533 },           // Use the full name from concat result
  { name: "John Doe", phoneNo: 9876543210 },
  { name: "Jane Smith", phoneNo: 9123456789 }
];


//  Function: Get all phone numbers from interns
function getPhoneNumbers(internsList) {
  return internsList.map(i => i.phoneNo); // Extract phone numbers
}

//  Function: Get all intern names
function getInternNames(internsList) {
  return internsList.map(i => i.name); // Extract names
}

// Function: Return all intern objects as-is
function getAllInterns(internsList) {
  return internsList; // No transformation
}

//  Function: Display all results in the console
function displayResults() {
  const phoneNumbers = getPhoneNumbers(interns);  // Get phone numbers
  const names = getInternNames(interns);          // Get names
  const allDetails = getAllInterns(interns);      // Get full objects

  console.log(" Phone Numbers:", phoneNumbers); // Show phone numbers
  console.log(" Intern Names:", names);         // Show names
  console.table(allDetails);                     // Show full table in console
}

//  Execute the display function
displayResults();


// 2 SPLIT — Get first name from full name
function getFirstName(fullName) {
  const parts = fullName.split(" ");  // Split full name → ["Aarthi", "Gopal"]
  return parts[0];                    // Return first part only
}
const firstName = getFirstName(fullName);         // "Aarthi"
console.log("2 First Name (Split):", firstName);


// 3 SUBSTR — Extract specific word from sentence
function extractModule(courseTitle) {
  return courseTitle.substr(11, 7);   // Extract "Testing" from index 11
}
const moduleName = extractModule("Automation Testing Internship");
console.log("3 Extracted Module (Substr):", moduleName);


// 4 REPLACE — Replace a word in a sentence
function replaceWord(sentence, target, replacement) {
  return sentence.replace(target, replacement);   // Replace word
}
const replacedText = replaceWord("Intern is working on project", "Intern", "Trainee");
console.log("4 Replaced Text:", replacedText);


// 5 TRIM — Remove spaces from a string
function trimString(rawString) {
  return rawString.trim();        // Remove leading & trailing spaces
}
const cleanedString = trimString("   Aarthi Gopal   ");
console.log("5 Trimmed String:", `"${cleanedString}"`);



