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
let arr=[1,2,3,4,2,4,2,4,3,3,5,6,4,5,1,5,6]

function concateElement(inputArray){
  return inputArray.reduce((acc,element)=>acc+=element,"");
}
console.log(concateElement(arr));

// Q5. Write a function to create a new array that contains only the unique elements from the original array using reduce().

let arr=[1,2,3,4,2,4,2,4,3,3,5,6,4,5,1,5,6]
function uniqueElements(inputArray){
  return inputArray.reduce((acc,value,index,self)=>{
    if(self.indexOf(value)===index){
      acc.push(value);
    }
    return acc;
  },[]);
}
console.log(uniqueElements(arr));

// Q6. Write a function to reverse the order of elements in an array using reduce().
let arr=[1,2,3,4,2,4,2,4,3,3,5,6,4,5,1,5,6]

 function reverseOrder(inputArray){
   return inputArray.reduceRight((acc,value)=>{
     acc.push(value);
     return acc;
   },[]);
}
 console.log(reverseOrder(arr));

// Q7. Write a function to multiply all elements of an array together using reduce().
 let arr=[1,2,3,4,2]
 function productOfArray(input){
   return input.reduce((acc,value)=>acc*=value,1);
 }
 console.log(productOfArray(arr));

// Q8. Write a function to find the average value of all elements in an array using reduce().6-++-
 let arr=[1,2,3,4,2,4,2,4,3,3,5,6,4,5,1,5,6]
 function averageOfArray(input){
   return (input.reduce((acc,value)=>acc+=value,0))/arr.length;
 }
 console.log(averageOfArray(arr));
// Q9. Write a function to find the product of the even elements in an array using reduce().
 let arr=[1,2,3,4,2,4,7,9]
 function productOfEven(input){
   return input.reduce((acc,value)=>value%2===0?acc*=value:acc,1)
 }
 console.log(productOfEven(arr));
// Q10. Write a function to find the index of the largest element in an array using reduce().
let arr = [1,2,3,4,5,6,11,7,8,9,10];
function indexOfLargetNumber(inputArray){
  let largestValue=inputArray.reduce((acc,value)=> value >acc?acc=value:acc,-Infinity);
  return inputArray.indexOf(largestValue);
}
console.log(indexOfLargetNumber(arr));

//     Q.No#10   find the peaks of the array by usins reduce method
const array=[4, 5, 2, 1, 4, 9, 7, 2];
const result= array.filter((accamulator,value,index,givenArray)=>{
    if(value > givenArray[index-1] && value > givenArray[index+1]){
        accamulator.push(value);
    }
},[]);
console.log(result);

