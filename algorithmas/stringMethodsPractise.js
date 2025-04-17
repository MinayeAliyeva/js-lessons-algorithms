//Basic Level
//1️⃣ Palindrome yoxlama
const str = "racecar";

const checkPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
};

console.log(checkPalindrome(str));

//2️⃣ String-i tərsinə çevirmək

const str2 = "JavaScript";
const reverseStr = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseStr(str2));
//3️⃣ Sözlərin sayını tapmaq
const sentence = "Hello world, this is JavaScript!";
const findCountOfWords = (sentence) => {
  return sentence.split(" ").length;
};
console.log(findCountOfWords(sentence));

//4️⃣ Bütün hərfləri böyük etmək
const text = "hello world";
const doUpperCase = (text) => {
  return text.toUpperCase();
};
console.log(doUpperCase(text));

//5️⃣ Bütün hərfləri kiçik etmək

const text2 = "HELLO WORLD";
const doLowerCase = (text) => {
  return text.toLowerCase();
};
console.log(doLowerCase(text2));

//6️⃣ Baş hərfləri böyük etmək

const sentence2 = "javaScript is fun";
const doCapitalize = (sentence) => {
    return sentence.capitalize();
  };
  console.log(doCapitalize(sentence2));