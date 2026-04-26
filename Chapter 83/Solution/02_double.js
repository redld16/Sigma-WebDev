// The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let arr = [1, 2, 3, 4, 4, 5, 6, 7];

function doubleTrouble(array) {
  let result = [];
  array.forEach((element, index) => {
    array[index + 1] === element
      ? result.push(element)
      : result.push(element * 2);
  });
  return result;
}

console.log(doubleTrouble(arr));
