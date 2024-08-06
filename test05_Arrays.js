


const myarr=['a', 'b', 'c', 'd', 'e'];
console.log(myarr);
console.log(myarr.join('e,f'));

//-------------------- Shallow Array ------------------------------
/*
// Original array
const originalArray = [1, 2, [3, 4]];

// Shallow copy using the spread operator
const shallowCopyArray = [...originalArray];

// Modifying the nested array in the copied array
shallowCopyArray[2][0] = 5;

console.log(originalArray); // Output: [1, 2, [5, 4]]
console.log(shallowCopyArray); // Output: [1, 2, [5, 4]]





//--------------------------Deep Array ------------------------------



const deeparray = [1,2,3,4,5,6]

const copydeeparray = JSON.parse(JSON.stringify(deeparray));

copydeeparray[3]=23;

console.log(deeparray); // Output: [);

console.log(copydeeparray); // Output: [)



*/

//---------------ARRAY METHODS ------------------------------


// myarr.push(45);
// console.log(myarr); // );
// myarr.pop();

// console.log(myarr); // );



/*
let newLengthh =myarr.unshift();
console.log(newLengthh);
console.log(myarr);
console.log(myarr.length);


let fruits = ['banana', 'mango'];
let newLength = fruits.unshift('apple', 'orange');

console.log(newLength); // Output: 4
console.log(fruits); // Output: ['apple', 'orange', 'banana', 'mango']

*/


//   ----SLice & Splice --------------------------------

/*
console.log("A", myarr);
const myn1 = myarr.slice(1,3);
console.log(myn1);


console.log("B", myarr);
const myn2 = myarr.splice(1,3);
console.log("C", myarr);
console.log(myn2);

*/


// ----------ADS -ARRAYS----------------------------

/*
const inheros=["Hatim", "Bikaral Gbaral", "Shaktiman", " Aladin"]

const forheros=["Ironman", "Thor", "Superman", "Batman", "CaptainAmerica"]


// inheros.push(forheros);

// console.log(inheros);


const allheros=inheros.concat(forheros);    // This method is one of the correct method for mergering array
console.log(allheros);
console.log(allheros.length);


//Spread operator
//This is more easy method for merging  1 or more  arrays together.

const allheros1= [ ...forheros, ...inheros]
console.log(allheros1);
console.log(allheros1.length);

*/

//--------------------


/*
const mularray=[1,2,3,4,[5,6,7],[23,5,55,78]];

const allin1ar= mularray.flat(2);
console.log(allin1ar);

// If you dont know how may sub array you have then you also used INFINITY Keyword


const allin2ar= mularray.flat(Infinity);
console.log(allin2ar);

*/

console.log(Array.from("Waqar Farooqui"));  // This line is used to convert the string into an array


// let as=234;
// console.log((as).toString());
// console.log(Array.of(as));



let asg=235;

let storeasg=asg.toString();

let asstoreasg=storeasg.split('').map(Number);
console.log(storeasg);
console.log(asstoreasg);

console.log(Array.from(storeasg));
console.log(Array.of(storeasg));





