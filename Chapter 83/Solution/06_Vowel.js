// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

let str = "rajesh";

// function countVowels(str) {
//   str = str.toUpperCase();
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "A" ||
//       str[i] === "E" ||
//       str[i] === "I" ||
//       str[i] === "O" ||
//       str[i] === "U"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels(str));

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (const element of str) {
    if (vowels.includes(element)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels(str));