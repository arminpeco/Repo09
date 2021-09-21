// Only change code below this line
function compareDifferentValues(m,n)
{
    if(m===n)
        return console.log("Equal");
    return  console.log("Not equal");
}
compareDifferentValues(8,"8");
compareDifferentValues("8",8);
compareDifferentValues('8',8);
compareDifferentValues("8","8");
compareDifferentValues(8,8);

// Only change code above this line 

module.exports=compareDifferentValues;