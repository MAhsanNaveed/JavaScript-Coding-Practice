// ---------    Q# 01
/// filter out the duplicate elements in an array

 let numbers=[0,1,0,3,4,3,2,1,5,6,7,1,5,4,6,7,9];

 let uniqueNumbers=numbers.filter((value,index,inputArray)=>{
  
     return inputArray.indexOf(value)===index;///  it will find the index of first occurence if the element is present at that place 
  // it will be store to  after the first location of element it will never be true so the element will be skipped
 
 })
 console.log(uniqueNumbers);

function evenNumbrs(inputArray){

    const evenNum=inputArray.filter(element => element%2===0);
    // it will return the current element if it is even otherwise nothing will return
    return evenNum;
}

console.log(evenNumbrs([0,1,3,4,2,5,6,7,9]))//  output  [0, 4, 2, 6]

// _________ Q.No#03

//------   filter strings longer than a user given length:

function specificLenght(inputArray,userLength){
    const filteredArray= inputArray.filter(element => element.length >= userLength);
    //  it will check the length of each element and if it is greater or equal to specified value than it will return the current element
    return filteredArray;
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
    
    const filteredObject= inputObject.filter(element => element.score >= inputScore);
    
    return filteredObject;
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

