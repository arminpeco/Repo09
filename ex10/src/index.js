// Only change code below this line
function logicOrder(num)
{
    if(num<50)
        return console.log("Less than 50");
    else if (num <100)
        return console.log("Less than 100");
    else
        return console.log("Greater than or equal 100");

    
}
logicOrder(28);
logicOrder(60);
logicOrder(110);



// Only change code above this line 

module.exports=logicOrder;