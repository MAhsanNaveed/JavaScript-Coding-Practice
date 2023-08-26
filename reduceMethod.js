Q1. Write a function to calculate the sum of all elements in an array using reduce().
 let arr = [1,2,3,4,5];
 function sum(input){
   return input.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
 }
 console.log(sum(arr));

// Q2. Write a function to find the maximum value in an array using reduce().
 let arr=[0,1,0,2,3,4,5,8,9,10,-100,55];
 function maxValue(input){
   return input.reduce((accumulator,currentValue)=>currentValue>accumulator?accumulator=currentValue:accumulator,-Infinity);
 }
 console.log(maxValue(arr));

// Q3. Write a function to count the number of occurrences of a given element in an array using reduce().

 let arr=[1,2,3,4,2,4,2,4,3,3,5,6,4,5,1,5,6]
 function frequency(inputArry,element){
   return inputArry.reduce((accumulator,currentValue)=>currentValue===element?++accumulator:accumulator,0);
 }
 console.log(frequency(arr,5))

// Q4. Write a function to concatenate all elements of an array into a single string using reduce().
 




// Q5. Write a function to create a new array that contains only the unique elements from the original array using reduce().
