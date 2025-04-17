const str = "eeabgmmmeb";
// {e:2,a:1,b:1,g:1,m:3}

const converStrToObj = (str) => {
  const obj = {};
  for (i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] = obj[str[i]] + 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
};
const x = "7";
const y = "8";
console.log(+x + +y);
// js ilk once deyisenlerin deyerini hesablayir sonra hesablamalar aparir
console.log(converStrToObj(str));
const obj = { name: "Minaye" };
obj.name = "Elmar" + obj.name;
console.log(obj);


