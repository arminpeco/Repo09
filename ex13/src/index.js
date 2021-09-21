// Only change code below this line
function inverseWhile()
{
    var i=5;
    var fiveNumbers="";
    while(i>=0)
    {
        fiveNumbers+=i;
        if(i==0)
            break
        else
            fiveNumbers+=",";
        i--;
      
    }
    return fiveNumbers;
    
}
console.log(inverseWhile());



// Only change code above this line 

module.exports=inverseWhile;