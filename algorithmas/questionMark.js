//1
const questionMark = (str) => {
  const seperetedArr = str.split("");
  let newArr = [];
  let isCheck = false;
  for (i = 0; i < seperetedArr.length; i++) {
    if (!isNaN(+seperetedArr[i]) || seperetedArr[i] === "?") {
      newArr.push(seperetedArr[i]);
    }
  }
  for (i = 0; i < newArr.length; i++) {
    if (
      !isNaN(newArr[i]) &&
      !isNaN(newArr[i + 4]) &&
      +newArr[i] + +newArr[i + 4] == 10
    ) {
      isCheck = true;
    }
  }

  return isCheck;
};
console.log(questionMark("acc?7??sss?3rr1??????5"));
//2

const questionMark1 = (str) => {
  const newStr = str.replace(/[a-z-A-Z]/g, "");
  let isCheck = false;
  for (i = 0; i < newStr.length; i++) {
    let num1 = newStr[i];
    let num2 = newStr[i + 4];
    if (!isNaN(num1) && !isNaN(num2)) {
      isCheck = true;
    }
  }
  return isCheck;
};
console.log("2", questionMark1("acc?7??sss?3rr1??????5"));
//3

const questionMark2 = (str) => {
  const newStr = str
    .split("")
    .map((char) => (/[a-zA-Z]/.test(char) ? "" : char))
    .join("");
  for (i = 0; i < newStr.length; i++) {
    let num1 = newStr[i];
    let num2 = newStr[i + 4];
    if (!isNaN(num1) && !isNaN(num2)) {
      isCheck = true;
    }
  }
  return isCheck;
};
console.log("3", questionMark2("acc?7??sss?3rr1??????5"));
//4

const questionMark3 = (str) => {
  const newStr = str
    .split("")
    .map((char) => (/[a-zA-Z]/.test(char) ? "" : char))
    .join("");
  for (i = 0; i < newStr.length; i++) {
    let num1 = newStr[i];
    let num2 = newStr[i + 4];
    if (!isNaN(num1) && !isNaN(num2)) {
      isCheck = true;
    }
  }
  return isCheck;
};
console.log("4", questionMark3("acc?7??sss?3rr1??????5"));
//5

const questionMark4 = (str) => {
  const strArray = [...str];
  let newArr = [];
  let isCheck = false;
  for (i = 0; i < strArray.length; i++) {
    if (!isNaN(+strArray[i]) || strArray[i] === "?") {
      newArr.push(strArray[i]);
    }
  }
  for (i = 0; i < newArr.length; i++) {
    if (
      !isNaN(newArr[i]) &&
      !isNaN(newArr[i + 4]) &&
      +newArr[i] + +newArr[i + 4] == 10
    ) {
      isCheck = true;
    }
  }
  return isCheck;
};
console.log("5", questionMark4("acc?7??sss?3rr1??????5"));
