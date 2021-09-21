// Only change code below this line
function myForLoop1()
{
   var evenNumbers="";
   for (let i = 0; i <= 8; i++) {
      if (i%2==0) {
          evenNumbers+=i;
          if(i==8)
            break
        else
            evenNumbers+=",";
      }
      
       
   }
    return evenNumbers;
}
function myForLoop2()
{
   var evenInverseNumbers="";
   for (let i = 8; i >=0; i--) {
      if (i%2==0) {
          evenInverseNumbers+=i;
          if(i==0)
            break
        else
            evenInverseNumbers+=",";
      }
      
       
   }
   return evenInverseNumbers;
    
}
console.log(myForLoop1());
console.log(myForLoop2());


// Only change code above this line 

module.exports={
    myForLoop1,
    myForLoop2
};