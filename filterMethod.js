// ---------    Q# 01
/// filter out the duplicate elements in an array

 let numbers=[0,1,0,3,4,3,2,1,5,6,7,1,5,4,6,7,9];

 let uniqueNumbers=numbers.filter((value,index,inputArray)=>{
  
     return inputArray.indexOf(value)===index;///  it will find the index of first occurence if the element is present at that place 
  // it will be store to  after the first location of element it will never be true so the element will be skipped
 
 })
 console.log(uniqueNumbers);

function evenNumbrs(inputArray){

    return inputArray.filter(element => element%2===0);
    // it will return the current element if it is even otherwise nothing will return
   
}

console.log(evenNumbrs([0,1,3,4,2,5,6,7,9]))//  output  [0, 4, 2, 6]

// _________ Q.No#03

//------   filter strings longer than a user given length:

function specificLenght(inputArray,userLength){
    return inputArray.filter(element => element.length >= userLength);
    //  it will check the length of each element and if it is greater or equal to specified value than it will return the current element
}
console.log(specificLenght(['apple','banana','kiwi','watermellon','mangoes','grapes'],6));// output ['banana', 'watermellon', 'mangoes', 'grapes']

// _________ Q.No#04

//------   filter the objects on the bases of property 
const students=[
    {
        name:"Ahsan",
        score:80,
    },
    {
        name:"Naveed",
        score:78,
    },
    {
        name:"Waqas",
        score:90,
    },
    {
        name:'Imran',
        score:95,
    }
]
/// filter the all students which have specific score given to the function

function filterData(inputObject, inputScore){
    
    return inputObject.filter(element => element.score >= inputScore);
}
console.log(filterData(students,90));

// output [{name: 'Waqas', score: 90},{name: 'Imran', score: 95}]

// _________ Q.No#05

//------   filter out the null or undefined value from the array

const mixedValues = [1, null, "apple", undefined, true, false];

//  remove the null and undefined

function filterValues(inputArray){
    filteredArray= inputArray.filter(element => {
        if (element !== null && element !== undefined){
            // if each value is not null or undefined than it will move the value in filtered array
            return element;
        }
    });
    return filteredArray;
};

console.log(filterValues(mixedValues));// output [1, 'apple', true]



// _________ Q.No#06

//------   filter out the prime number in the array 

let arr=[1,2,3,4,5,6,7,8,9,10]; 

let primeNum=arr.filter(isPrime);

console.log(primeNum);

function isPrime(number){
    if(number <=1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(number);i++){
        if(number%i===0){
            return false;
        }
    }
    return true;
}

_________ Q.No#07

//------   filter out the unique character in the string by using filter method

function uniqueChar(inputString){
    const outputChar=inputString.toLowerCase().split("").filter((char, index, array)=> array.indexOf(char)===index);
    // it will first convert the string into lowercase to make it case nsensitive
    // then it split the string characters into the array of characters
    // finally it will return the character having only one occurence
    return outputChar;
}

console.log(uniqueChar("Muhammad Ahsan Naveed"));//  output ['m', 'u', 'h', 'a', 'd', ' ', 's', 'n', 'v', 'e']


// _________ Q.No#08

//------   filter the array on the based of substring

function fiterStr(input, searchStr){
    const outputArray= input.filter(element => element.includes(searchStr));
    return outputArray;
}
console.log(fiterStr(["apple", "banana", "cherry", "grape"],"ap"));//['apple', 'grape']

//     Q.No#09 
///       Find the miniPeaks of the array
//
const array=[4, 5, 2, 1, 4, 9, 7, 2];
const result= array.filter((value,index,givenArray)=>{
    if(value > givenArray[index-1] && value > givenArray[index+1]){
        return value;
    }
});
console.log(result);////  result is  [5,9]
