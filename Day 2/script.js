//             Welcome Day 2 

// first pdf ( Day 1 task 1 2 )

//Task 1: Using console.log() and Variables
//1. Create variables of different data types
let myName = "Noureldin"; 
let age = 20;            
let isStudent = true;    
let car = null;          
let address;             

//2.printing them 
console.log(myName);
console.log(age);
console.log(isStudent);
console.log(car);
console.log(address);

//3. Use typeof to check the type of each variable and display it using console.log
console.log(typeof myName);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof car);
console.log(typeof address);

//4. Create two string variables (firstName and lastName) and concatenate them
    // 1. old way 
    let firstName = "Noureldin";
    let lastName = "Mohamed";
    let fullName1 = firstName + " " + lastName;
    console.log(fullName1);

    // 2. Using the modern approach 
    let fullName2 = `${firstName} ${lastName}`;
    console.log(fullName2);



// Task 2: Working with Data and Basic Validation
let username = "Noureldin";
let password = "12345678";

if (username === "") {
    alert("Username is required");
}
if ( password.length < 8){
    alert("Password must be at least 8 characters");
}

if (username !== "" && password.length >= 8) {
    console.log("Username:", username);
    console.log("Password:", password);  }

// Second pdf ( task 2)

//1. Gather Employee Data: 
let employeeName =prompt("Enter employee name:");
let age2 = Number(prompt("Enter employee age:"));
let experience = Number(prompt("Enter years of experience:"));
let rating = Number(prompt("Rate yourself from 1 to 10:"));

//2. Determine Job Category:
let category;
if (experience < 2) {
    category = "Junior";
}
else if (experience <= 5) {
    category = "Mid-Level";
}
else if (experience <= 10) {
    category = "Senior";
}
else {
    category = "Expert";
}

//3. Check Performance Level: 
let performance;
switch (true) {
    case rating >= 9:
        performance = "Excellent";
        break;

    case rating >= 7:
        performance = "Good";
        break;

    case rating >= 5:
        performance = "Average";
        break;

    default:
        performance = "Needs Improvement";
}

//4. bonus calculation 
let baseSalary = Number(prompt("Enter base salary:"));
let bonusPercent;
if (experience <= 2) {
    bonusPercent = 10;
}
else if (experience <= 5) {
    bonusPercent = 15;
}
else {
    bonusPercent = 20;
}
let bonus = baseSalary * bonusPercent / 100;

// 5. final salary calculation
let finalSalary = baseSalary + bonus;
console.log(finalSalary);


// 6. Work Shift Time Calculation: 
let currentHour = Number( prompt("Enter the current hour in 24-hour format ") );
let shift;
if (currentHour < 0 || currentHour > 23) {
    alert("Please enter a valid hour between 0 and 23");
}
else if (currentHour >= 9 && currentHour < 18) {
    shift = "Day Shift";
}
else {
    shift = "Night Shift";
}

// 7. Display the results
    // a.console 
    console.log("Employee Report");
    console.log("Name:", employeeName);
    console.log("Age:", age2);
    console.log("Experience:", experience);
    console.log("Category:", category);
    console.log("Performance:", performance);
    console.log("Base Salary:", baseSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
    console.log("Shift:", shift);

    // b.alert 
    alert(
    `    Employee: ${employeeName}
    Category: ${category}
    Performance: ${performance}
    Final Salary: ${finalSalary}
    Shift: ${shift}`);

    // c.DOM
    document.getElementById("result").innerHTML =
    `
    <h2>Employee Report</h2>

    <p><b>Name:</b> ${employeeName}</p>
    <p><b>Age:</b> ${age2}</p>
    <p><b>Experience:</b> ${experience}</p>
    <p><b>Category:</b> ${category}</p>
    <p><b>Performance:</b> ${performance}</p>
    <p><b>Base Salary:</b> ${baseSalary}</p>
    <p><b>Bonus:</b> ${bonus}</p>
    <p><b>Final Salary:</b> ${finalSalary}</p>
    <p><b>Shift:</b> ${shift}</p>
    `;


// pdf 3 ( Day 2 | JavaScript Practice Tasks )    

//t1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//t2
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

//t3
let sum;
for( let i=1;i <15 ; i++ ){
    sum+=i;
}
console.log("Total sum = " , sum);

//t4 
let ticket = 1;
while (ticket <= 7) {
    console.log("Ticket #" + ticket);
    ticket++;
}

//t5 
let countdown = 8;
while (countdown >= 1) {
    console.log(countdown);
    countdown--;
}
console.log("Rocket Launched!");


//t6
let login =1;
do {
    console.log(login);
    login++;
}
while (login <= 5);


//t7 
var itemsInCart = 10;

while (itemsInCart < 5) {
    console.log("Start Shopping"); }
// no output as condition is wrong 

do {
console.log("Start Shopping"); }
while (itemsInCart < 5);
// we enters the loop once although the condition is wrong 


//t8 
let userName = "Ali";
let userAge = 22;
let isStudent2 = true;

console.log(userName);
console.log(typeof userName);

console.log(userAge);
console.log(typeof userAge);

console.log(isStudent2);
console.log(typeof isStudent2);


//t9 
let dbPrice = 10;
let inputPrice = "10";

console.log(dbPrice == inputPrice);
console.log(dbPrice === inputPrice);


//t10
let userName2 = prompt("Enter your name:");
let message2 = `Welcome, ${userName2}`;
alert(message2);
console.log(message2);


//t11
let quantity = prompt("Enter quantity:");

let quantity1 = Number(quantity);
let quantity2 = parseInt(quantity);
let quantity3 = +quantity;
console.log(quantity1, typeof quantity1);
console.log(quantity2, typeof quantity2);
console.log(quantity3, typeof quantity3);


//t12 
let a = 10;
let b = 3;
console.log("Addition =", a + b);
console.log("Subtraction =", a - b);
console.log("Multiplication =", a * b);
console.log("Division =", a / b);
console.log("Remainder =", a % b);
console.log("Power =", a ** b);


//t13 
let age3 = Number(prompt("Enter your age"));
if (age3 >= 18) {
    console.log("You can enter");
} else {
    console.log("Sorry, underage");
}


//t14 
let grade = Number(prompt("Enter your grade"));
if (grade >= 90) {
    console.log("A");
}
else if (grade >= 80) {
    console.log("B");
}
else if (grade >= 70) {
    console.log("C");
}
else {
    console.log("F");
}


//t15
let age4 = Number(prompt("Enter your age:"));
let result = (age4 >= 18) ? "Adult" : "Minor";
console.log(result);


//t16
let day3= prompt("Enter a day:");
switch (day3) {
    case "Monday":
        console.log("Start of the work week");
        break;
    case "Friday":
        console.log("Last workday");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;
    default:
        console.log("Normal workday");
}

//t17
let price3 = Number(prompt("Enter unit price:"));
for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${price3} = ${i * price3}`);
}


//t18 
let fileSize = Number(prompt("Enter file size:"));
if (fileSize > 0) {
    for (let i = 1; i <= fileSize; i++) {
        console.log(i);
    }
}
else {
    console.log("Invalid file size");
}


//t19
let start1= Number(prompt("Enter start number:"));
let end1= Number(prompt("Enter end number:"));
for (let i = start1; i <= end1; i++) {
    if (i % 2 === 0) {
        console.log(i + " : express"); }
    else {
        console.log(i + " : normal"); }
}


//t20
let students =["Ahmed", "Sara", "Ali", "Mona"];
for (let i = 0; i < students.length; i++) {
    console.log(`Student ${i + 1}: ${students[i]}`);
}


//t21
let total = 0;
for (let i = 1; i <= 5; i++) {
    let expense = Number(prompt(`Enter expense for day ${i}`));
    total += expense;
}
let average = total / 5;
console.log("Total =", total);
console.log("Average =", average);


//t22
let correctPin = "1234";
let attempts = 0;
while (attempts < 3) {
    let pin = prompt("Enter PIN");
    if (pin === correctPin) {
        console.log("Login Successful");
        break;
    }
    attempts++;
}


//t23
let hasAccount = true;
let isVerified = false;

console.log(hasAccount && isVerified);
console.log(hasAccount || isVerified);
console.log(!isVerified);
if (hasAccount && isVerified) {
    console.log("Welcome back");
}
else if (hasAccount && !isVerified) {
    console.log("Please verify your account");
}
else {
    console.log("Please sign up");
}

//t24
var a1 = 40;
var b1 = 50;
var c1 = "60";
var d1 = 30;
var e1 = 30;

console.log(a1 + b1 + c1 + d1 + e1);
c1 = Number(c1);
console.log(a1 + b1 + c1 + d1 + e1);

var total1 = a1 + b1 + c1 + d1 + e1;
if (total1 <= 20) {
    for (let i = 1; i <= total1; i++) {
        console.log(i);
    }}
else {
    console.log("Too big to print line by line");
}


//t25
let n = Number(prompt("Enter a number:"));
if (n < 0) {
    alert("Invalid number");
    console.log("Invalid number");
} else {
    let factorial = 1;
    for (let i = 1; i<=n; i++) {
        factorial *= i; }
    console.log(`${n}! = ${factorial}`);
    alert(`${n}! = ${factorial}`);
}