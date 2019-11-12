// // 3
// let newArr = [];
// function findGreaterNum(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     var array = arr[i];
//     if (arr[i] > num) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(findGreaterNum([1, 2, 5, 6, 7], 2));

// 2

// let longestWord = "";

// function findLongestWord(word) {
//   var newWord = word.slice(" ", word.length);

//   for (let i = 0; i < newWord.length; i++) {
//     if (newWord[i].length > longestWord) {
//       longestWord = newWord[i];
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("i am  sabrina"));

// let sentence = "I am sabrina";
// let newSentence = sentence.split(" ").filter(sentence => sentence.length > 0);
// console.log(newSentence);
// var longestFirstSentence = newSentence.sort((x, y) => y.length - x.length);

// console.log(newSentence);
// console.log(longestFirstSentence[0]);

// // exercise 3

// let number = 0;
// let newNum = 0;
// function toReverse(number) {
//   newNum = number.split(" ");
//   return newNum.reverse();
// }
// console.log(toReverse(1234));

// 4

// let string = "";
// let newString = 0;

// function vowels(string) {
//   for (let i = 0; i < string.length; i++) {
//     if (
//       string[i].includes("a") ||
//       string[i].includes("e") ||
//       string[i].includes("i") ||
//       string[i].includes("o") | string[i].includes("u")
//     ) {
//       newString++;
//     }
//   }
//   return newString;
// }
// console.log(vowels("sabrina"));

// 5
