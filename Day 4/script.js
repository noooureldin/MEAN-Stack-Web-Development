// Welcome Day 3
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

function validateEmail(email) {
    let isValid = email.includes("@") && email.endsWith(".com") && !email.startsWith("@") && !email.includes(" ");
    console.log(isValid ? "Valid Email" : "Invalid Email");
}

function countchar(str, char) {
    let lowerText = str.toLowerCase();
    let lowerChar = char.toLowerCase();
    let count = 0;
    for (let i = 0; i < lowerText.length; i++) {
        if (lowerText[i] === lowerChar) count++;
    }
    console.log(`The character "${char}" appears ${count} times.`);
}

function replaceWord(sentence, targetWord) {
    let regex = new RegExp(`\b${targetWord}\b`, "gi");
    console.log(sentence.replace(regex, "***"));
}

function generateUsername(firstName, lastName) {
    let first = firstName.trim().toLowerCase().replace(/\s+/g, "");
    let last = lastName.trim().toLowerCase().replace(/\s+/g, "");
    let username = `${first}.${last}`;
    if (username.length > 15) username = username.slice(0, 15);
    console.log("Username:", username);
}

function searchInText(sentence, word) {
    let lowerSentence = sentence.toLowerCase();
    let lowerWord = word.toLowerCase();
    let firstPosition = lowerSentence.indexOf(lowerWord);
    let lastPosition = lowerSentence.lastIndexOf(lowerWord);
    if (firstPosition === -1) {
        console.log("Word does not exist in the sentence.");
        return;
    }
    let count = 0;
    let pos = lowerSentence.indexOf(lowerWord);
    while (pos !== -1) {
        count++;
        pos = lowerSentence.indexOf(lowerWord, pos + 1);
    }
    console.log("Word exists:", true);
    console.log("First position:", firstPosition);
    console.log("Last position:", lastPosition);
    console.log("Total occurrences:", count);
}

function reverseEveryWord(sentence) {
    let words = sentence.split(" ");
    let reversedWords = words.map(word => word.split("").reverse().join(""));
    console.log(reversedWords.join(" "));
}

function analyzeText(text) {
    let words = text.trim().split(/\s+/);
    console.log("Word count:", words.length);
}

function maskPhoneNumber(phone) {
    if (typeof phone !== 'string' || phone.length <= 7) return phone;
    return phone.slice(0,4) + '*'.repeat(phone.length - 7) + phone.slice(-3);
}

function cleanSentence(sentence) {
    sentence = sentence.trim().replace(/\s+/g, ' ');
    sentence = sentence.replace(/javascript/g, 'JavaScript');
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    if (!sentence.endsWith('.')) sentence += '.';
    return sentence;
}
