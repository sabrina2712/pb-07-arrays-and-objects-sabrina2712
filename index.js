// // // exercise 1

// // var myArray = ["Hi", "Hello", "How", "old", 5];
// // console.log(myArray);

// // var thirdElement = myArray[2];
// // console.log(thirdElement);

// // myArray.splice(3, 1, "fourth element");
// // console.log(myArray);

// // exercise 2

// // 2.1

// var euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
// var secondItem = euroCities[1];

// // console.log(secondItem);

// // 2.2

// euroCities.splice(0, 1, "Berlin");
// console.log(euroCities);

// // 2.3
// console.log(euroCities.length);

// 2.4;
// euroCities.pop(euroCities.length - 1);
// console.log(euroCities);

// // 2.5
// euroCities.push("Budapest");
// console.log(euroCities);

// // // 2.6
// euroCities.splice(1, 2);

// console.log(euroCities);

// // 2.7
// var asianCities = ["Dhaka", "Bangkok", "Delhi", "Beijing", "Tokyo"];

// // 2.8

// var sortedAsianCities = asianCities.slice(2, asianCities.length);
// console.log(sortedAsianCities);

// // 2.9
// var worldCities = euroCities.concat(asianCities);

// console.log(worldCities);

// // 2.10

// // order??

// // 2.11

// worldCities.splice(2, 1, "Toronto");
// console.log(worldCities);

// // 2.12

// worldCities.splice(1, 0, "Washington");
// console.log(worldCities);

// // 2.13

// var joinWorldCities = worldCities.join();
// console.log(joinWorldCities);

// var joinWorldCitiesPlus = worldCities.join("+");
// console.log(joinWorldCitiesPlus);

// 2 Bonus

// var string = "Hello World";
// var toReverse = string.split(" ", 2);

// console.log(toReverse);

// var reverseString = toReverse.reverse();
// console.log(reverseString);

// extra

var siblings = ["Rezoana", "Rainy", "Shiny", "Riya"];

var parents = ["Rehana", "Rabiul"];

var combineSibPar = siblings.concat(parents);
console.log(combineSibPar);

combineSibPar.push("lucy");
console.log(combineSibPar);

console.log(combineSibPar[4]);

var replaceParent = combineSibPar.splice(4, 1, "Rony");
console.log(combineSibPar);
