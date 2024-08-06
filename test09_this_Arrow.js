/*

const user =
{

    username:"Waqar",
    age:22,
    email:"waqar@gmail.com",

    welcomeMessage: function()
    {

           console.log(` ${this.username}, Welcome to Parkar Digital`)


           console.log(this);
    }

}

user.welcomeMessage();


*/


const chk2 =  () =>
{
    const email =" waqar@google,com";
    console.log(`${this.email},check this `);
    
}

console.log(chk2());


//Implicit function


const addtwo = (num1, num2) => (num1 + num2);

console.log(addtwo(3,4));




// Immediately Invoked Function Expressions (IIFE)

(function code(){

    console.log(`IT is Working!`);
})();


//  --  same thing by using arrow  function


( () => {
    console.log(`this type is also working!`);
})();