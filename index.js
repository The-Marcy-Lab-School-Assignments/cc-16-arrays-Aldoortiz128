//write your code here

function replaceWithYerr(array, startIndex, deleteCount){
  //check how many parameters are actually defined 
  //if(startIndex === undefined and deleteCount === undefined) 
  
  let newarray = [...array]; // make a copy of the OG array
  
  if (startIndex === undefined && deleteCount === undefined) { //I have one arguement, just the array
      //newarray.fill('yerr')
  for (let i = 0; i < newarray.length; i++) {
      newarray[i] = 'yerr';
  }
      
  } else if (deleteCount === undefined) { //I have two arguements, startIndex and the array
       for (let i = startIndex; i < newarray.length; i++) {
           newarray[i] = 'yerr';
       }
      // newarray.length = newarray.length-startIndex
   }
   
  
 // else if (startIndex === 0 && deleteCount === 0) {
      //newarray.fill('yerr')
   //we only have an array
   //create a new array and fill it with all 'yerr'
   //Array.prototype.fill()
   
   
   else { // I have three arguements condition
       for (let i = startIndex; i < deleteCount + startIndex; i++) { //deleteCount = startIndex creates the range of elements you want to replace
           newarray[i] = 'yerr';
       }
       //newarray.length = newarray.length-startIndex-deleteCount
   }
   
  //if(deleteCount === undefined) 
    // replace the elements starting at startIndex until the end
    // .slice() .splice()
    
  //else
    //replace the elements starting at startIndex
    //but only replace deleteCount number of elemenets
    //.slice() .splice()
return newarray;
}

const months = ['Jan', 'Feburary', 'March', 'April', 'May', 'June']

console.log(replaceWithYerr(months, 3, 2))  //['Jan', 'yerr', 'yerr', 'yerr', 'May', 'June'])
replaceWithYerr(months, 1) // ['Jan', 'yerr', 'yerr', 'yerr', 'yerr', 'yerr']
replaceWithYerr(months) // ['yerr', 'yerr', 'yerr', 'yerr', 'yerr', 'yerr']
