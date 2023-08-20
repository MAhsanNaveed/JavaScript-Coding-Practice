/// filter out the duplicate elements in an array

 let numbers=[0,1,0,3,4,3,2,1,5,6,7,1,5,4,6,7,9];

 let uniquNumbers=numbers.filter((value,index,inputArray)=>{
  
     return inputArray.indexOf(value)===index;///  it will find the index of first occurence if the element is present at that place 
  // it will be filtered after the first location of element it will never be true so the element will be skipped
 
 })
 console.log(uniquNumbers);
