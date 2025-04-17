const sentence2 = "fun&!! tim....!e ...";
//keep empties and remove characters  after fint longest word  result:time

const afterRemovedSpesificCharacters = sentence2.replaceAll(/[!&.]/g, "");
const findLongestWordInSentence = afterRemovedSpesificCharacters.split(" ");
//solution1
const findLongestWord = (findLongestWordInSentence) => {
  let word = "";
  for (i = 0; i < findLongestWordInSentence.length; i++) {
    if (findLongestWordInSentence[i].length > word.length) {
      word = findLongestWordInSentence[i];
    }
  }
  return word;
};
console.log("rest", findLongestWord(findLongestWordInSentence));
//solition2

const sentence = "I love Azerbaijan";
//find the longest world in the sentence fun time

//1
const findLongestWorld = (sentence) => {
  const arr = sentence.split(" ");

  let word = "";
  for (i = 0; i < arr.length; i++) {
    if (arr[i]?.length > word.length) {
      word = arr[i];
    }
  }
  return word;
};
console.log(findLongestWorld(sentence));

//2
const findLongestWorld2 = (sentence) => {
  const arr = sentence.split(" ");
  arr.sort((a, b) => a.length - b.length);
  return arr[arr.length - 1];
};
console.log("END", findLongestWorld2(sentence));

const arr = [3, 4, 2, 1, 4, 5];
console.log(arr.sort((a, b) => a - b));
const arrStr = ["Azerbaycan", "Azerz", "Baba", "Basak"];

console.log(arrStr.sort((a, b) => a.length - b.length));
const findLongestWord3 = (str) => {
  const lengthArr = str.split(" ").map((el) => el.length);
  lengthArr.sort();
  const findedEl = str
    .split(" ")
    .find((el) => el.length === lengthArr[lengthArr.length - 1]);
  return findedEl;
};

console.log(findLongestWord3("I love Elmar"));
