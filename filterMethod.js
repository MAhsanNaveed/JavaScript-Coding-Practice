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


