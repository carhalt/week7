// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Ages:", ages);
let minusAge = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAge);

ages.push(100);
console.log("Ages after pushing a new value", ages);
let minusAgePush = ages[ages.length -1] - ages [0];
console.log("minusAge", minusAgePush);

let sumOfAges = 0;

for (let i = 0; i < ages.length; i++)
{
    sumOfAges =+ ages(i)
    console.log("index",i, "sumOfAges", sumOfAges);
}
console.log("Total Sum", sumOfAges);
let average = sumOfAges / ages.length;
console.log("Average" , average);

// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// Use a loop to iterate through the array and calculate the average number of letters per name.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let names = ["Sam", "Tommy" , "Tim" , "Sally" , "Buck" , "Bob"];
let totalChars= 0;

for (let i = 0; i < names.length; i++)
{
    totalChars += names[i].length;
    console.log("Average of Names:", averageName);
}

let concatNames = "";
for (let i = 0; i < names.length; i++)
{
    concatNames = concatNames.concat(names[i] + " ");
    console.log("Names Concatenated" , concatNames);
}





// (almost done) How do you access the last element of any array?


console.log("Last element of ages array:" , ages[ages.length - 1]);


// (done) How do you access the first element of any array?

console.log("First element of ages array:" , ages[0]);

// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

 let nameLengths = ["Kelly", "Sam", "Kate"]
for (let i = 0; i < names.length; i++) 
{
    nameLengths.push(names[i].length)
    console.log("Name lengths array:" , nameLengths);
}
// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let charsTotal = 0;
for (let i = 0; i < nameLengths.length; i++)
{
    charsTotal += nameLengths[i];
    console.log("CharsTotal:" , charsTotal);
}

// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function concatWords(word , n)
{
console.log(word, n);
let concat = word.repeat(n);
}
concatWords()

//(done) Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.



// function fullName(firstName, lastName){
// return (firstName + " " + lastName);}
// console.log (fullName("Jim", "Bob"));

//(done??) Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

  let numbers1 = [100,200,300,400];
  let numbers2 = [1,2,3,4];

  function sumNumbersArray(array) 
  {
    let total =+ 0;

    for (let i = 0; i < array.length; i++){
        total += array[i];
        console.log(total);
    }
    if (total > 100){
    console.log(total, true);
    return true;
    }
    else {
        console.log(total, false);
        return false;
    }
  }
sumNumbersArray(number2);

// Write a function that takes an array of numbers and returns the average of all the elements in the array.

function claculateNumbersAverage(array)
{
    let total = 0;

    for (let i = 0; i < array.length; i++)
    {
        total += array[i];
        console.log(total);
    }
    let average = total / array.length;
    console.log("Average of number:" , average);
    return average;
}
claculateNumbersAverage(numbers1);

// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let numbers3 = [100, 100, 100];
let numbers4 = [100, 100, 99];

function twoAverages(array1, array2)
let total1 = 0;
let total2 = 0;
for (const number of array1) 
{
    total1 += number;
    console.log(number, total1);

}

for (const number of array2) 
{
    total2 += number;
    console.log(number, total2);
}
let average1 = total1 / array1.length;
let average2 = total2 / array2.length;
console.log(average1, average2);

if (average1 > average2) 
{
    console.log(true);
    return true;

}
else if (average1 < average2) {
    console.log(false);
    return false;

}
else {
    console.log("Numbers are equal");
}
//(done) Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
// let willBuyDrink = (isHotOutside, moneyInPocket) => {
//     return isHotOutside === true && moneyInPocket > 10.50;
//   }
  
//   console.log(willBuyDrink(true, 10.20));
  