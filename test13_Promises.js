
/*
const Promiseone = new Promise (function (resolve, reject) {
    setTimeout(function () {
        resolve('Success');
    }, 2000);
    setTimeout(function () {
        reject('Failure');
    }, 3000);

    });

    Promiseone.then(function (result) {
        console.log(result);
    }).catch(function (error) {
        console.log(error);
    });
// the below code fragment can be found in:

*/



/*
const promisetwo = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve({Username: 'Waqar' , Email:'Anderson@gmail.com'})
    },1000)

    // setTimeout(() =>
    // {
    //     reject('ERROR: Something went wrong')
    // },2000)

});



promisetwo.then(function(result){
    console.log(result);
});


*/







/*

const promisescheck = new Promise(function (resolve, reject)
{


    setTimeout(function (){

        let error = true
        if(!error)

            {
                resolve({Username: 'waqar' , Email: 'farooqui@gmail.com'})
            }
            else{
                reject('ERROR: Something went wrong');
            }
    },1000)
});



promisescheck.then(function(result)
{
    console.log(result);
    return result.Username;
}).then((username)=> 
    {
        console.log(username);
    
    
    }).catch((error) =>
    {
        console.log(error);
    } )



*/





/*

async function promech ()
{
   try{
    const result = await promisescheck;
    console.log(result);
   }
   catch(error)
   {
    console.log(error);
   }
}

promech();

*/








/* Fetch method call using async and Promises */


/*
async function fetchapicheck ()
{

    try{

        const result = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await result.json();
        console.log(data);
    }
    catch(error)
    {
        console.log(error);
    }
}

fetchapicheck();


*/


fetch('https://jsonplaceholder.typicode.com/users')
.then((respomse) =>
{
    return respomse.json();
})
.then((data)=> console.log(data))
.catch((error)=> console.log(error))













