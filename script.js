//FUNCTION
//Assignment # 35-38 JAVASCRIPT


//1. Write a function that displays current date & time in your 
// browser?

function displayDate(){

    let currentDate = new Date();
    let result=document.getElementsByClassName('result')[0];
    result.innerHTML=`Current Date :<b> ${currentDate}</b><br>`;


}

// 2. Write a function that takes first & last name and then it 
// greets the user using his full name

function greeting(){
    const firstName =document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const fullNmae = firstName+" "+ lastName;
    const greet = document.getElementsByClassName('result')[1];
    greet.innerHTML=`hello ${fullNmae} ! How are you?`
}


// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers

function sum(){
    const firstNum =document.getElementById('fNum').value;
    const secondNum = document.getElementById('sNum').value;
    const add = Number(firstNum) + Number(secondNum);
    const sum= document.getElementsByClassName('result')[2];
    sum.innerHTML=`RESULT : Sum of numbers is: ${add} .`;
}

// 4. Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser

function handleCalculation() {
    
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;

    //call the function to show calculation
    calculate(num1, num2, operator);
  }

  function calculate(num1, num2, operator) {
    let result;
    if (operator === '+') {
      result = num1 + num2;
    } 
    else if (operator === '-') {
      result = num1 - num2;
    } 
    else if (operator === '*') {
      result = num1 * num2;
    } 
    else if (operator === '/') {
      
      if (num2 === 0) {
        result = "Error: Division by zero!";
      } else {
        result = num1 / num2;
      }
    } else {
      result = "Error: Invalid operator!";
    }
    document.getElementsByClassName("result")[3].innerHTML = `RESULT : ${result}`;
  }

//   5. Write a function that squares its argument.

function showSquare() {
    const num = parseFloat(document.getElementById("num").value);
    const squared = Number(num)*Number(num);
    document.getElementsByClassName("result")[4].innerHTML = ` RESULT : The square of ${num} is: ${squared}`;
  }


//   6. Write a function that computes factorial of a number.

function calculateFactorial() {
    const num = parseInt(document.getElementById("num").value);
    let result = 1;  

    // Loop from 1 to num and multiply each number to result
    for (let i = 1; i <= num; i++) {
      result *= i;  
    }
    document.getElementsByClassName("result")[5].innerHTML = ` RESULT : The factorial of ${num} is: ${result}`;
  }

//   7. Write a function that take start and end number as inputs 
// & display counting in your browser:

function displayCounting() {
    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);
    let result = '';

    if (start > end) {
      result = "Start number cannot be greater than end number.";
    } else {
      // Loop to create the counting from start to end
      for (let i = start; i <= end; i++) {
        result += i + " "; 
      }
    }
     const counting = document.getElementById("counting-result");
     counting.innerHTML=`RESULT : ${result}`;
  }

//   8. Write a nested function that computes hypotenuse of a 
//   right angle triangle. 
//   Hypotenuse2 = Base2 + Perpendicular2
//   Take base and perpendicular as inputs.
//   Outer function : calculateHypotenuse()
//   Inner function: calculateSquare()


//outer function
  function calculateHypotenuse() {
    const base = parseFloat(document.getElementById("base").value);
    const perpendicular = parseFloat(document.getElementById("perpendicular").value);

    // Inner function: Calculates square of a number
    function calculateSquare(num) {
      return num * num;
    }

    const baseSquare = calculateSquare(base);
    const perpendicularSquare = calculateSquare(perpendicular);
    const hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
    document.getElementsByClassName("result")[6].innerHTML = ` RESULT : The hypotenuse of the triangle is: ${hypotenuse.toFixed(2)}`;
  }

//   9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


function calculateArea() {
   
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const area = width * height;

    const areaResult = document.getElementsByClassName("result")[7];
    areaResult.innerHTML = `RESULT : The area of the rectangle is: ${area}`;
  }


//   10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam.

function checkPalindrome() {
    const str = document.getElementById("String").value;
    
    // Normalize the string by removing non-alphanumeric characters and converting to lowercase
    const normalizedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the string
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    // Check if the string is equal to its reverse
    if (normalizedStr === reversedStr) {
      document.getElementsByClassName("result")[8].innerHTML = `RESULT : "${str}" is a palindrome.`;
    } else {
      document.getElementsByClassName("result")[8].innerHTML = `RESULT : "${str}" is not a palindrome.`;
    }
  }

//   11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
function capitalizeWords(){
const input = document.getElementById('input').value;

let stringInput=input.toLowerCase().split(' ');

for(let i=0 ; i<stringInput.length ; i++){
    stringInput[i]=stringInput[i].charAt(0).toUpperCase()+stringInput[i].slice(1);

}

const res =document.getElementsByClassName('result')[9];
res.innerHTML=`RESULT : ${stringInput.join(' ')}.`;
}


// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development

function findLongestWord() {
    const para= document.getElementById('para').value;

    const words = para.split(' ');
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
      // If the current word's length is greater than the current longest word's length
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
   const answer =  document.getElementsByClassName('result')[10];
  answer .innerHTML = `RESULT : The longest word is: "${longestWord}"`;
  }


//   13. Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of 

// occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'


function countLetter() {
    
    const str = document.getElementById('Str').value;
    const letter = document.getElementById('Letter').value;

    if (letter.length !== 1) {
      document.getElementById('result').innerHTML = 'Please enter a single letter.';
      return;
    }
    let count = 0;

    // Loop through the string and count occurrences of the letter
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() === letter.toLowerCase()) {
        count++;
      }
    }
  const counts =  document.getElementsByClassName('result')[11];
   counts .innerHTML = `RESULT : The letter '${letter}' occurs ${count} times in the string.`;
  }



//   14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using 
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area 
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2


function calcCircumference(radius) {
    return 2 * Math.PI * radius; 
}

// Function to calculate the area of the circle
function calcArea(radius) {
    return Math.PI * radius * radius; 
}

// DISPLAY CALCULATIONS
function calculate() {
    let radius = document.getElementById("radius").value;
    radius = parseFloat(radius); 
   
    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid positive number for the radius.");
        return;
    }

   //CALL FUNCTIONS
    let circumference = calcCircumference(radius);
    let area = calcArea(radius);
    let resultsPara= document.getElementsByClassName("result")[12];
    resultsPara.innerHTML = `
        <strong>The circumference is:</strong> ${circumference.toFixed(2)}<br/>
        <strong>The area is:</strong> ${area.toFixed(2)}<br/>
    `;
}