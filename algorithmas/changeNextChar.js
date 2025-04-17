//const name="Elmarz" //fmnbsA
//console.log(letterChanges2("Fun Time"));  // Gvo UjnF
//1
const fn = (str) => {
  let newStr = "";
  for (i = 0; i < str.length; i++) {
    let nextCharNum = str[i].charCodeAt() + 1;
    if (str[i].charCodeAt() === 90) {
      newStr = newStr + "A";
    } else if (str[i].charCodeAt() === 122) {
      newStr = newStr + "a";
    } else if (str[i].charCodeAt() === 32) {
      newStr = newStr + " ";
    } else {
      newStr = newStr + String.fromCharCode(nextCharNum);
    }
  }
  return newStr;
};
console.log(fn("Fun Time"));

//2
const fn1 = (str) => {
  const arr = str.split("");
  const newArr = [];
  for (i = 0; i < arr.length; i++) {
    const nextCharNum = arr[i].charCodeAt() + 1;
    if (arr[i].charCodeAt() === 90) {
      newArr.push("A");
    } else if (arr[i].charCodeAt() === 122) {
      newArr.push("a");
    } else if (arr[i].charCodeAt() === 32) {
      newArr.push(" ");
    } else {
      newArr.push(String.fromCharCode(nextCharNum));
    }
  }
  return newArr.join("");
};
console.log(fn1("Fun Time"));
//3
const fn2 = (str) => {
  return str
    .split("")
    .map((char) => {
      let nextCharNum = char.charCodeAt() + 1;
      if (char === "Z") return "A";
      if (char === "z") return "a";
      if (char === " ") return " ";
      return String.fromCharCode(nextCharNum);
    })
    .join("");
};
console.log("3", fn2("Fun Time"));
//4
const fn3 = (str) => {
  return str.replace(/[a-zA-Z]/g, (char) => {
    console.log("char", char);
    if (char === "Z") return "A";
    if (char === "z") return "a";
    if (char === "") return "";
    return String.fromCharCode(char.charCodeAt() + 1);
  });
};
console.log("4", fn3("Fun Time"));
//5
const fn4 = (str) => {
  return [...str].reduce((acc, char) => {
    console.log("char", char);
    if (char === "Z") return acc + "A";
    if (char === "z") return acc + "a";
    if (char === " ") return acc + " ";
    return acc + String.fromCharCode(char.charCodeAt() + 1);
  }, "");
};
console.log("5", fn4("Fun Time"));
//6 Internet
const fn5 = (str, i = 0, result = "") => {
  if (i >= str.length) return result;
  let char = str[i];
  if (char === "Z") char = "A";
  else if (char === "z") char = "a";
  else if (char !== " ") char = String.fromCharCode(char.charCodeAt() + 1);

  return fn5(str, i + 1, result + char);
};

console.log("6", fn5("Fun Time"));
