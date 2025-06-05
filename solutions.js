// Function to check if a number is even
function isEven() {
  const input = document.getElementById("numberInput").value;
  const num = Number(input);

  if (isNaN(num)) {
    alert("Please enter a valid number.");
    return;
  }

  const result = num % 2 === 0 ? "Even" : "Odd";
  alert("The number is " + result);
}

// Function to find the maximum of two numbers
function findMax() {
  const a = Number(document.getElementById("numA").value);
  const b = Number(document.getElementById("numB").value);

  if (isNaN(a) || isNaN(b)) {
    alert("Please enter valid numbers.");
    return;
  }

  const max = a > b ? a : b;
  alert("The larger number is: " + max);
}

//
function swapNumbers() {
  let a = Number(document.getElementById("swapA").value);
  let b = Number(document.getElementById("swapB").value);
  if (isNaN(a) || isNaN(b)) {
    alert("Please enter valid numbers.");
    return;
  }
  //swapping without a thrid variable
  a = a + b;
  b = a - b;
  a = a - b;

  alert("After swap:\nA = " + a + " \nB = " + b);
}
//
function countVowels() {
  const str = document.getElementById("vowelInput").value;
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  alert("Number of vowels:" + count);
}
// reverse 
function reverseString() {
  const str = document.getElementById("reverseInput").value;
  const reversed = str.split("").reverse().join("");
  alert("Reversed string:" + reversed);
}

// When page is loaded, attach click event to the button
  document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("checkBtn").addEventListener("click", isEven);
  document.getElementById("maxBtn").addEventListener("click", findMax);
  document.getElementById("swapBtn").addEventListener("click", swapNumbers);
  document.getElementById("vowelInput").addEventListener("click", countVowels);
  document.getElementById("reverseInput").addEventListener("click", reverseString);
});
