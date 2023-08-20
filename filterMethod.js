/// filter out the duplicate elements in an array

 let numbers=[0,1,0,3,4,3,2,1,5,6,7,1,5,4,6,7,9];
 let uniquNumbers=numbers.filter((value,index,inputArray)=>{
     return inputArray.indexOf(value)===index;
 })
 console.log(uniquNumbers);
