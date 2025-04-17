//4*3*2*1

const findFoctorial = (num) => {
  let factorial = 1;
  for (i = 0; i < num; i++) {
    factorial = factorial * (num - i);
  }
  return factorial;
};
console.log(findFoctorial(4));

const recursiveFn = (num) => {
  if (num === 0) return 1;
  return num * recursiveFn(num - 1);
  //return 4 * recursiveFn(3) => 4*3*recursiveFn(2)==>4*3*2*recursiveFn(1)===> 4*3*2*1 * recursiveFn(0)=4*3*2*1 *1 ==>24
};

console.log(recursiveFn(4));

//rekursuv fn ounu cagirir returnde 