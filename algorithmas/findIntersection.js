const arr = ["1, 2,3,3,4,5", "4,5"];

//1
// const findIntersection = (arr, num) => {
//   const newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     let test = arr[i].split(",");
//     newArr.push(test);
//   }
//   const mapedArr = newArr.flat();
//   console.log(mapedArr);

//   const filterMapedArr = []; //1,2,3,4,5
//   const intersectionArr = []; //3,4
//   mapedArr.forEach((el) => {
//     if (!filterMapedArr.includes(el)) {
//       filterMapedArr.push(el);
//       return;
//     }
//     if (!intersectionArr.includes(el)) {
//       intersectionArr.push(el);
//     }
//   });

//   return intersectionArr.length > 0 ? intersectionArr.join(",") : false;
// };

// console.log(findIntersection(arr));

//2

const findIntersection2 = (arr) => {
  const arr1 = [...new Set(arr[0].replace(/\s/g, "").split(","))]; //1,2,3,4,5 //!On +On
  const arr2 = [...new Set(arr[1].replace(/\s/g, "").split(","))]; //3,4,5 //!On +On

  const result = new Set();
  arr2.forEach((el) => {
    if (arr1.includes(el)) {
      result.add(el);
    }
  });
  return Array.from(result).length > 0 ? Array.from(result).join(",") : false;
};
console.log(findIntersection2(arr));

//3

const findIntersection3 = (arr) => {
  const arr1 = [...new Set(arr[0].replace(/\s/g, "").split(","))]; //1,2,3,4,5 //!On +On
  const arr2 = [...new Set(arr[1].replace(/\s/g, "").split(","))]; //3,4,5 //!On +On
  const result = new Set(arr2.filter((el) => arr1.includes(el)));

  return [...result].length ? [...result].join(",") : false;
};
console.log("3:", findIntersection3(arr));

//4
const findIntersection4 = (arr) => {
  const arr1 = [...new Set(arr[0].replace(/\s/g, "").split(","))]; //1,2,3,4,5 //!On +On
  const arr2 = [...new Set(arr[1].replace(/\s/g, "").split(","))]; //3,4,5 //!On +On
  const newArr = []; //! O1
  for (i = 0; i < arr1.length; i++) {
    //!On * On
    for (j = 0; j < arr2.length; j++) {
      //!On
      if (arr1[i] === arr2[j]) {
        //!On
        newArr.push(arr1[i]); //!O1
      }
    } //! On^2
  }
  return newArr.length ? newArr.join(",") : false;
};
console.log("4:", findIntersection4(arr));
//5

const findIntersection5 = (arr) => {
  const arr1 = [...new Set(arr[0].replace(/\s/g, "").split(","))]; //1,2,3,4,5 //!On +On
  const arr2 = Array.from(new Set(arr[1].replace(/\s/g, "").split(","))); //3,4,5 //!On +On
  const combineArr = arr1.concat(arr2); // [...arr1,...arr2]
  const obj = {};
  const newArr = [];
  for (i = 0; i < combineArr.length; i++) {
    if (obj[combineArr[i]]) {
      newArr.push(combineArr[i]);
    } else {
      obj[combineArr[i]] = combineArr[i];
    }
  }
  return newArr.length ? newArr.join(",") : false;
};
console.log("5:", findIntersection5(arr));
