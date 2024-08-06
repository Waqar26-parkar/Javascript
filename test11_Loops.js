
/*


for(let i = 0; i<=10;i++)
{  
    const value=i;
    console.log(value);
}

*/



/*
const myarray = [ "Bikaral Gabral", "Hatim" , "Aladin" , "Shaktiman"];
for(let index = 0; index <myarray.length; index++)
{
    const element = myarray[index];
    console.log(element);
}

*/



// const person = {fname:"John", lname:"Doe", age:25};

// // let text = "";
// for (let x in person) {
//   person[x];
// }


// const tasks=[ "Bikaral Gabral", "Hatim" , "Aladin" , "Shaktiman"]

// while(tasks.length > 0)
// {
//      console.log(tasks.shift());
// }






/*
const myobject = 

{
    'game1': 'WC3',
    'game2': 'Car Racing',
}


for (const object in myobject)
{
    console.log(myobject[object]);

}

*/




// const programming =  ["C++", "Java", "JavaScript", "Python"]
// for(const key in programming)
// {
//     console.log(programming[key]);
// }



//----------------MAPS-----------------

/*

const programming1 =  ["C++", "Java", "JavaScript", "Python"]


//----------------Type 1---------------
programming1.forEach( function(val){ 
    console.log(val);
})

console.log( "----------------");

//----------------Type 3---------------

programming1.forEach( (item) =>
{
    console.log(item);
})



//---------------- Type 3------------------

function printme(item)
{
    console.log(item);
}


programming1.forEach(printme);



*/






// const coding =
// [
//     {
//         name:"c++",
//         score: 90
//     },
//     {
//         name:"Pyhton",
//         score: 80
//     },
//     {
//         name:"Javascript",
//         score: 70
//     }
// ]


// coding.forEach( (item) =>
// {
//    console.log(item.name);
// })


// coding.forEach( () =>
// {
//    console.log(item.name);
// })




//---------Type-1---------------

/*

let lst= [1,2,3,4,5,6,7,8,9,10,11,12];

const newnums=[]
lst.forEach( (item) =>{

    if(item>4)
    {
        newnums.push(item);
    }
    
})
console.log(newnums);




//---------Type -2-----------------
let storenums = lst.filter( (item) =>{ 
    return item>4;
})

 
storenums= lst.map( (item) => {return item+10})

console.log(storenums);


*/

//--------------------Reduce -3----------------


const arrayReduce =[1,2,3,4,5,6,7,8,9]

const initalvalue = 0;




// const reducer = arrayReduce.reduce(function(accumulator , currentValue) {
//     console.log(`value of accumulator: ${accumulator} and currentValue: ${currentValue}`);
//     return accumulator+currentValue
// },0)a


//rewriting this function uisng arrow  functions.

// const reducer = arrayReduce.reduce( (accumulator, currentValue)=> accumulator+currentValue ,0)

// console.log(reducer);





const shoppingCart = [

    {

        itemName:"Javascrip cource",
        price:299
    },
    
    {
        itemName:"Python Courses",
        price:999
    },
    
    {
        itemName:"C++ Courses",
        price:1299
    },
    
    
]


const price2= shoppingCart.reduce((accumulator, item)=> accumulator+item.price ,0)

console.log(typeof price2.toString());