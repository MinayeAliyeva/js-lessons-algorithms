const reverseStr = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseStr("Salam Minaya"));

const reverseStr2 = (str) => {
  let reverseStr = "";
  //a+''
  // a+y
  for (i = 1; i <= str.length; i++) {
    reverseStr = reverseStr + str?.[str.length - i];
  }
  return reverseStr;
};

console.log(reverseStr2("Salam Minaya"));
