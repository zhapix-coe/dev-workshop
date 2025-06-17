// --------------------- STRING OPERATIONS ---------------------

let firstName = "Aarthi";                      // define intern’s first name
let lastName = "Gopal";                        // define intern’s last name

let fullName = firstName.concat(" ", lastName); // combine names with a space in between
console.log("Full Name:", fullName);           // print: Full Name: Aarthi Gopal

let nameParts = fullName.split(" ");           // split full name into ["Aarthi", "Gopal"]
let firstOnly = nameParts[0];                  // take first element: "Aarthi"
console.log("First Name:", firstOnly);         // print: First Name: Aarthi

let courseTitle = "Automation Testing Internship";       // define a course title
let moduleName = courseTitle.substr(11, 7);  // extract 7 chars starting at index 11 ("Testing")
console.log("Module Name:", moduleName);     // print: Module Name: Testing

let updatedCourse = courseTitle.replace("Testing", "Development"); // change Testing → Development
console.log("Updated Course Title:", updatedCourse); 
// print: Updated Course Title: Automation Development Internship

let rawInput = "   Aarthi Gopal   ";          // simulate user input with extra spaces
let trimmedInput = rawInput.trim();           // remove leading/trailing spaces
console.log("Trimmed Input:", trimmedInput);  // print: Trimmed Input: Aarthi Gopal

// --------------------- ARRAY OPERATIONS ---------------------

let interns = [                               // define sample data
  { name: "Aarthi Gopal", phoneNo: 9944545331 },
  { name: "Karan Das",     phoneNo: 9876543210 },
  { name: "Meena Raj",     phoneNo: 9123456789 }
];

let phoneNumbers = [];                        // array to hold phone numbers
for (let i = 0; i < interns.length; i++) {    // loop through each intern
  phoneNumbers.push(interns[i].phoneNo);      // add phone number to array
}
console.log("Phone Numbers:", phoneNumbers);  // print array of numbers

let internNames = [];                         // array to hold names
for (let i = 0; i < interns.length; i++) {
  internNames.push(interns[i].name);         // add name to array
}
console.log("Intern Names:", internNames);    // print array of names

let internList = [];                          // array to hold full intern objects
for (let i = 0; i < interns.length; i++) {
  let internObj = {                          // build a new object for each intern
    name: interns[i].name,
    phoneNo: interns[i].phoneNo
  };
  internList.push(internObj);                // add it to internList array
}
console.log("Intern Details:", internList);   // print full details array
