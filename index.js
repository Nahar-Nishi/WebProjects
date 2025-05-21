

//  Add Two Numbers

function add(x,y) {
  
  let result = x + y;
 
  return result
}
let AllResult = add(100,200) + add(600,500) + add(50,80)

console.log(AllResult);

//! Even or odd checker
function isEven (num){
  // if (num % 2 === 0){
  //   return"Even";
  // } else{
  //   return"odd";
  // }
  return num % 2 === 0 ? "Even" : "odd"
}
console.log(isEven(3));
 
  
// Convert celsius to Fahrenheit

function celsiustoFahrenheit(celsius){

  return(celsius * 9/5) + 32
}

console.log(celsiustoFahrenheit(2));

//! Square of a Number

function squareNumber(num){
  return num * num
}
console.log(squareNumber(10));


// Get First Character of a String


function firstCharacter(str){
return str.charAt(0)
}

console.log(firstCharacter("Hello"));

// Number positive or negative

// function checknum (num){
//   if(num >= 0){
//     return "positive";
//   } else {
//     return "negative";
//   }

// }

// console.log(checknum(0));

function checkNum(num) {
 return num >= 0 ? "position" : "negative";


}
console.log(checkNum(-9));
// Add tow multiply

function multiply(x, y) {
  if (typeof x !== "number") {
    return " 1st number is not a number";
  } 
  
  else if (typeof y !== "number") 
  {
    return " 2nd number is not a number";
  } else {
    return x* y;
  }
  
}
  console.log(multiply(10,30));
