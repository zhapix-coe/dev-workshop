// Function to check if a number is even
function checkSum() {
  // Get the values from input boxes and convert to integers, defaulting to 0 if empty
  const num1 = parseInt(document.getElementById('num1').value) || 0;
  const num2 = parseInt(document.getElementById('num2').value) || 0;

  // Calculate the sum
  const sum = num1 + num2;

  //  // Check if the sum is even or odd using modulo operator
  const result = sum % 2 === 0 ? "even" : "odd";

  //Display the result
  document.getElementById("evenResult").textContent =
    `The sum of ${num1} and ${num2} is ${sum}, which is ${result}. `;
}

// Function to find the maximum of two numbers
function findMax() {
  // Get values from input boxes and convert to numbers
  const a = Number(document.getElementById("numA").value);
  const b = Number(document.getElementById("numB").value);
  // Compare the two values and assign the larger to 'max'
  const max = a > b ? a : b;
  // Display the result in the element with id 'maxResult
  document.getElementById('maxResult').textContent =
    `The Maixmum of a and {b} is ${max} `;
}


// Function to swap two numbers without a third variable
function swapNumbers() {
  // Get the values from the input boxes and convert to numbers
  let a = Number(document.getElementById("swapA").value);
  let b = Number(document.getElementById("swapB").value);
  // Swapping logic would go here (currently not implemented)
  // Example (uncomment to use):

  a = a + b;
  b = a - b;
  a = a - b;
  // Update the input fields with swapped values (if implemented)
  document.getElementById('swapResult').textContent = `After swap: A = ${a}, B = ${b}`;
}
// Function to count the number of vowels in a string
function countVowels() {
  // Get the string input from the element with id 'vowelInput'
  const str = document.getElementById("vowelInput").value;
  // Initialize a counter for vowels
  let count = 0;
  // Define all vowels (both lowercase and uppercase)
  const vowels = "aeiouAEIOU";
  // Loop through each character in the input string
  for (let char of str) {
    // Check if the character is a vowel
    if (vowels.includes(char)) {
      count++; // Increment the vowel count
    }
  }
  // Display the number of vowels in the element with id 'vowelResult'
  document.getElementById('vowelResult').textContent = `Number of vowels: ${count}`;

}
// reverse 
// // Function to reverse a string
function Reverse() {
  // Get the input string from the element with id 'reverseInput'
  const str = document.getElementById("reverseInput").value;
  // Split the string into an array of characters, reverse the array, and join it back into a string
  const reversed = str.split("").reverse().join("");
  // Display the reversed string in the element with id 'reverseResult'
  document.getElementById('reverseResult').textContent = `Reverse String: ${reversed}`;
}

function mergeAndSortUnique(arr1, arr2) {
  // Step 1: Combine both arrays into one
  var combined = arr1.concat(arr2);

  // Step 2: Initialize an empty array to store unique values
  var uniqueArray = [];

  // Step 3: Loop through the combined array
  for (var i = 0; i < combined.length; i++) {
    var current = combined[i];
    if (uniqueArray.indexOf(current) === -1) {
      uniqueArray.push(current);
    }
  }

  // Step 4: Sort the array in ascending order
  uniqueArray.sort(function (a, b) {
    return a - b;
  });

  // Step 5: Return the final sorted array with unique values
  return uniqueArray;
}


// When the page is fully loaded, attach click event listeners to buttons
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("evenBtn").addEventListener("click", checkSum);   // When 'evenBtn' is clicked, call the checkSum function
  document.getElementById("maxBtn").addEventListener("click", findMax);     // When 'maxBtn' is clicked, call the findMax function
  document.getElementById("swapBtn").addEventListener("click", swapNumbers); // when 'swapBtn' is clicked, call the swapNumbers function
  document.getElementById("countBtn").addEventListener("click", countVowels); // when 'countBtn' is clicked, call the countVowels function
  document.getElementById("reverBtn").addEventListener("click", Reverse); // when 'reverBtn' is clicked , call the Reverse function function

});


// Define the function that takes two arrays as input
function mergeAndSortUnique(arr1, arr2) {

  // ----------- STEP 1: COMBINE BOTH ARRAYS -----------
  var combined = []; // Initialize an empty array to hold all elements from both arrays

  // Loop through first array (arr1)
  for (var i = 0; i < arr1.length; i++) {
    combined.push(arr1[i]); // Add each element of arr1 to the combined array
  }

  // Loop through second array (arr2)
  for (var j = 0; j < arr2.length; j++) {
    combined.push(arr2[j]); // Add each element of arr2 to the combined array
  }

  // ----------- STEP 2: REMOVE DUPLICATES -----------
  var uniqueArr = []; // Initialize a new array to store only unique values

  // Loop through each element in the combined array
  for (var k = 0; k < combined.length; k++) {
    var current = combined[k]; // Get the current element
    var isDuplicate = false;   // Flag to track if current element is a duplicate

    // Loop through uniqueArr to check if current element already exists
    for (var m = 0; m < uniqueArr.length; m++) {
      if (uniqueArr[m] === current) {
        isDuplicate = true; // If a match is found, mark as duplicate
        break;              // No need to check further, exit the loop
      }
    }

    // If current element is not a duplicate, add it to uniqueArr
    if (!isDuplicate) {
      uniqueArr.push(current); // Store only non-duplicate values
    }
  }

  // ----------- STEP 3: SORT THE UNIQUE ARRAY (ASCENDING) -----------
  // Use a simple bubble sort algorithm
  for (var x = 0; x < uniqueArr.length - 1; x++) {
    for (var y = x + 1; y < uniqueArr.length; y++) {
      // Compare elements, and swap if they are in the wrong order
      if (uniqueArr[x] > uniqueArr[y]) {
        // Swap values using a temporary variable
        var temp = uniqueArr[x];
        uniqueArr[x] = uniqueArr[y];
        uniqueArr[y] = temp;
      }
    }
  }

  // ----------- STEP 4: RETURN THE FINAL ARRAY -----------
  return uniqueArr; // This array is sorted and contains only unique values
}
//crud operation js
// Load saved interns from localStorage or start with an empty list
let interns = JSON.parse(localStorage.getItem("interns")) || [];

// Function to display all interns in the table
function renderInterns() {
  const tbody = document.getElementById("internTableBody"); // Get table body element
  tbody.innerHTML = ""; // Clear any existing rows

  // Loop through all interns and create a row for each
  interns.forEach((intern) => {
    const row = document.createElement("tr"); // Create a new row

    // Set the inner HTML of the row with intern data and action buttons
    row.innerHTML = `
      <td>${intern.id}</td>
      <td>${intern.name}</td>
      <td>${intern.email}</td>
      <td>${intern.department}</td>
      <td>
        <button onclick="editIntern('${intern.id}')">Edit</button>
        <button onclick="deleteIntern('${intern.id}')">Delete</button>
      </td>
    `;

    tbody.appendChild(row); // Add the row to the table
  });
}

// Save interns array to localStorage
function saveToLocalStorage() {
  localStorage.setItem("interns", JSON.stringify(interns));
}

// Handle form submission (add or update intern)
document.getElementById("internForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  // Get values from the form
  const id = document.getElementById("internId").value.trim();
  const name = document.getElementById("internName").value.trim();
  const email = document.getElementById("internEmail").value.trim();
  const department = document.getElementById("internDept").value.trim();
  const message = document.getElementById("message");

  // Check if intern with same ID already exists
  const existingIndex = interns.findIndex(intern => intern.id === id);

  if (existingIndex !== -1) {
    // Intern exists, so update their info
    interns[existingIndex] = { id, name, email, department };
    message.textContent = `Updated intern ID ${id}`;
    message.style.color = "green";
  } else {
    // New intern, add to the list
    interns.push({ id, name, email, department });
    message.textContent = `Added intern ID ${id}`;
    message.style.color = "blue";
  }

  saveToLocalStorage(); // Save updated list to localStorage
  renderInterns();       // Re-render the intern list
  document.getElementById("internForm").reset(); // Clear the form
});

// Function to delete an intern by ID
function deleteIntern(id) {
  interns = interns.filter(intern => intern.id !== id); // Remove intern with given ID
  saveToLocalStorage(); // Save updated list
  renderInterns();      // Re-render list

  const message = document.getElementById("message");
  message.textContent = `Deleted intern ID ${id}`;
  message.style.color = "red";
}

// Function to fill the form with an intern’s data for editing
function editIntern(id) {
  const intern = interns.find(i => i.id === id); // Find the intern
  if (intern) {
    // Fill form fields with intern's existing data
    document.getElementById("internId").value = intern.id;
    document.getElementById("internName").value = intern.name;
    document.getElementById("internEmail").value = intern.email;
    document.getElementById("internDept").value = intern.department;
  }
}

// Call render function when page loads
renderInterns();
