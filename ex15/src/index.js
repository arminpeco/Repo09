// Only change code below this line
function myDoWhile()
{
    var myNumbers="";
    var i=0;
    do{
        myNumbers+=i;
        if (i==9) {
            break;
        }else
            myNumbers+=",";
        i++;
    }while(i<10)
    return myNumbers;
}
var MyNumbers=myDoWhile();

console.log(MyNumbers);



// Only change code above this line 

module.exports=myDoWhile;