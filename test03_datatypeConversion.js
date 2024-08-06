
/* 
let score ="33adfb";

console.log(typeof score);
console.log(typeof (score));

let storeNum= Number(score);  // change the string into a number
console.log(typeof storeNum);  

// console.log(storeNum); // if score = "33"  then output= 33

//what if we change the number with string then what will be returned?
// score ="33adfb";

console.log(storeNum);  //if score = "33adfb"  then output= NaN   ==> Not an NUMBER

*/

/*

let  isLoggin= "2342";
let storBoolean = Boolean(isLoggin);
console.log(storBoolean);



//  1=>true  ,  0=>false , ""=>false , "waqar"=>true

*/



/*
const heros=["HATIM","Bikaral Gabral", "Saktiman",  "Aladin"];
let myobj= {

    name:"waqar",
    age: 22,
}

const myfunc = function()
{
    console.log(myobj.name);

}
myfunc();
*/


const namee="Waqar farooqui";

console.log(namee.charAt(2));
console.log(namee.indexOf("r"));

const anotherstr = namee.slice(2,4);
console.log(anotherstr);


const newstr = "   WAQAR   ";

console.log(newstr.trim());


const url = "http://waqar.com";
console.log(url.replace( 'http://', 'wwww.'));

