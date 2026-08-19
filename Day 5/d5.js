//

// FOR LOOP
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//  EVEN NUMBERS
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

//  SUM 1 TO 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//  WHILE LOOP
let count = 10;
while (count >= 1) {
    console.log(count);
    count--;
}

//  DO WHILE LOOP
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

//  BREAK
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
}

// CONTINUE
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}

//  FOR OF
let nums = [10, 20, 30, 40, 50];
for (let item of nums) {
    console.log(item);
}

//  FOR IN
let student = { name: 'Ahmed', age: 21, grade: 'A' };
for (let key in student) {
    console.log(key, student[key]);
}

//  NESTED LOOPS
for (let row = 1; row <= 5; row++) {
    let line = '';
    for (let col = 1; col <= row; col++) {
        line += '* ';
    }
    console.log(line);
}

//  FACTORIAL
let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(factorial);

//  SEARCH IN ARRAY
let names = ['Sara', 'Omar', 'Laila', 'Hassan'];
let found = false;
for (let name of names) {
    if (name === 'Laila') {
        found = true;
        break;
    }
}
console.log(found);

//  COUNT VOWELS
let word = 'JavaScript';
let vowels = 'aeiou';
let vowelCount = 0;
for (let letter of word.toLowerCase()) {
    if (vowels.includes(letter)) vowelCount++;
}
console.log(vowelCount);
