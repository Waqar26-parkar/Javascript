// function addTwoNumbers(a, b)
// {
//      console.log(a+b);
// }


// addTwoNumbers(10, 20);


/*
function calculateCartPrice(num1)
{
     return num1;

}

console.log(calculateCartPrice(200, 400 ,500));
*/


/*

function calculateCartPrice(...num1)
{
     return num1;

}

console.log(calculateCartPrice(200, 400 ,500));

// output:[ 200, 400, 500 ]

*/


const user={

     username: "Waqar",
     age:22,
     email:"waqar@gmail.com",
     role:"Full Stack Developer"
}


function handleObject(anyObject){

     console.log(`name is ${anyObject.username} and the email is ${anyObject.email} ` );

}

handleObject(user);


const myar=[200,400,100,600]

function returnsecondvalue(obj)
{
     return obj[1]
}

console.log(returnsecondvalue(myar));


