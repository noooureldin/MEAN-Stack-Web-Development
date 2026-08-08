//             Welcome Day 3 


//t1
function formatFullName(fullName) {
    let cleaned = fullName.trim().replace(/\s+/g, " ");

    let formatted = cleaned
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");

    let charsCount = formatted.replace(/\s/g, "").length;

    console.log("Formatted Name:", formatted);
    console.log("Characters (excluding spaces):", charsCount);
}

//t2
function validateEmail(email) {
    let isValid =
        email.includes("@") &&
        email.endsWith(".com") &&
        !email.startsWith("@") &&
        !email.includes(" ");
    if (isValid) {
        console.log("Valid Email");
    } else {
        console.log("Invalid Email");
    }
}


//t3
function countchar( str, char) {
       let lowerText = str.toLowerCase();
    let lowerChar = char.toLowerCase();
    let count = 0;
    for (let i = 0; i < lowerText.length; i++) {
        if (lowerText[i] === lowerChar) {
            count++;} }
    console.log(`The character "${char}" appears ${count} times.`);
}


//t4
function replaceWord(sentence, targetWord) {
    let regex = new RegExp(`\\b${targetWord}\\b`, "gi");
    let result = sentence.replace(regex, "***");
    console.log(result);
}


//t5
function generateUsername(firstName, lastName) {
    let first = firstName.trim().toLowerCase().replace(/\s+/g, "");
    let last = lastName.trim().toLowerCase().replace(/\s+/g, "");
    let username = `${first}.${last}`;
    if (username.length > 15) {
        username = username.slice(0, 15);
    }
    console.log("Username:", username);
}


// t6
function searchInText(sentence, word) {
    let lowerSentence = sentence.toLowerCase();
    let lowerWord = word.toLowerCase();
    let firstPosition = lowerSentence.indexOf(lowerWord);
    let lastPosition = lowerSentence.lastIndexOf(lowerWord);
    if (firstPosition === -1) {
        console.log("Word does not exist in the sentence.");
        return ; }
    let count = 0;
    let pos = lowerSentence.indexOf(lowerWord);
    while (pos !== -1) {
        count++;
        pos = lowerSentence.indexOf(lowerWord, pos + 1); }
    console.log("Word exists:", true);
    console.log("First position:", firstPosition);
    console.log("Last position:", lastPosition);
    console.log("Total occurrences:", count);
}


//t7
function reverseEveryWord(sentence) {
    let words = sentence.split(" ");
    let reversedWords = words.map(word => {
        let reversed = "";
        for (let i = word.length - 1; i >= 0; i--) {
            reversed += word[i];
        }
        return reversed;});
    let result = reversedWords.join(" ");
    console.log(result);
}


//t8
function analyzeText(text) {
    let words = text.trim().split(/\s+/);
    let wordCount = words.length;
    let charsExcludingSpaces = text.replace(/\s/g, "").length;
    let vowels = text.match(/[aeiou]/gi);
    let vowelCount = vowels ? vowels.length : 0;
    let digits = text.match(/[0-9]/g);
    let digitCount = digits ? digits.length : 0;
    let uppercase = text.match(/[A-Z]/g);
    let uppercaseCount = uppercase ? uppercase.length : 0;
    let lowercase = text.match(/[a-z]/g);
    let lowercaseCount = lowercase ? lowercase.length : 0;
    let longestWord = words[0];
    let shortestWord = words[0];
    for (let word of words) {
        if (word.length > longestWord.length) longestWord = word;
        if (word.length < shortestWord.length) shortestWord = word;
    }
    console.log("Word count:", wordCount);
    console.log("Characters (excluding spaces):", charsExcludingSpaces);
    console.log("Vowels:", vowelCount);
    console.log("Digits:", digitCount);
    console.log("Uppercase letters:", uppercaseCount);
    console.log("Lowercase letters:", lowercaseCount);
    console.log("Longest word:", longestWord);
    console.log("Shortest word:", shortestWord);
}


//t9
function maskPhoneNumber(phone) {
  if (typeof phone !== "string" || phone.length <= 7) {
    return phone; }
  const start=phone.slice(0,4);
  const end=phone.slice(-3);
  const middle="*".repeat(phone.length-7);
  return start+middle+end;
}


//t10
function cleanSentence(sentence) {
  sentence = sentence.trim().replace(/\s+/g, " ");
  sentence = sentence.replace(/javascript/g, "JavaScript");
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  if (!sentence.endsWith(".")) {
    sentence += ".";
  }
  return sentence;
}


//bonus

function toUpperCaseText(text) {
  console.log(text.toUpperCase());}

function toLowerCaseText(text) {
  console.log(text.toLowerCase());
}

function countCharacters(text) {
  console.log("Characters:",text.length);}

function countWords(text) {
  let words=text.trim().split(/\s+/);
  console.log("Words:", words.length);}

function searchWord(text, word) {
  let found = text.toLowerCase().includes(word.toLowerCase());
  console.log(found ? "Word found" : "Word not found");}

function replaceWordInText(text, oldWord, newWord) {
  let regex = new RegExp(`\\b${oldWord}\\b`, "gi")  ;
  let result = text.replace(regex, newWord);
  console.log(result);
}

function reverseText(text) {
  console.log(text.split("").reverse().join(""));   }

  function textMenu() {
  let text = prompt("Enter your text:");
  let choice;
  do {
    choice = prompt(
      "Choose an option:\n" +
      "1. Uppercase\n" +
      "2. Lowercase\n" +
      "3. Count characters\n" +
      "4. Count words\n" +
      "5. Search for a word\n" +
      "6. Replace a word\n" +
      "7. Reverse text\n" +
      "8. Exit"
    );

    switch (choice) {
      case "1": toUpperCaseText(text); break;
      case "2": toLowerCaseText(text); break;
      case "3": countCharacters(text); break;
      case "4": countWords(text); break;
      case "5":
        let word = prompt("Enter word to search:");
        searchWord(text, word);
        break;
      case "6":
        let oldWord = prompt("Word to replace:");
        let newWord = prompt("Replace with:");
        replaceWordInText(text, oldWord, newWord);
        break;
      case "7": reverseText(text); break;
    }
  } while (choice !== "8");
}
textMenu();