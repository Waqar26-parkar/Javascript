"use strict";

/*
function one()
{

    const usname="Chetan";

    function two()
    {

        const website = "Cencora"
        console.log(usname);
    }

    // console.log(two());
    two();
    // one();
}


one();


*/


//-----------Hoisting--------------------------------


console.log(addone(5));
function addone(num1)
{
    return num1+1;

}
// addone(5);


prt();

function prt()
{
    console.log("check  this is hoisting");
}