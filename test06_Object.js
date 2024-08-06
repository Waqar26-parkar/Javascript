
// Object Literals


/*

const mysmb =Symbol('key-P')

const JsUsers = {
    name: "Waqar",
    age:  22,
    [mysmb]:"object-key-p",
location: "Mumbai",
email: "waqar@gamil.com",
isLoggedIn: false,
Lastlogin: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

};


console.log(JsUsers.name)
console.log(JsUsers["email"])
console.log(JsUsers.email)
console.log(JsUsers[mysmb]);


JsUsers.greeting = function()
{
    console.log("Ramadan Mubarak: ");

}

JsUsers.greetingtwo = function()
{
    console.log('Check the object JsUser:', (this.name));

}

JsUsers.greeting();
JsUsers.greetingtwo();


*/


const regularUsers = {

    email:"waqarnizamuddin@gmail.com",
    id:2,
    fullname:{
        firstname:"Mohammad Waqar",
        Surname:"Farooqui"
    }
}


console.log(regularUsers.fullname.firstname);


const obj1 = {1: "a", 6: "b", 3: "c"}
const obj2 = {4:"d", 5: "e"}

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const obj3=Object.assign({}, obj1, obj2);
console.log(obj3);


console.log(regularUsers.hasOwnProperty("email"));


const courses = {

    coursename: "Js in hindi",
    Price:"100",
    courseInstructor:"Waqar"
}

const {courseInstructor} = courses

const {courseInstructor:Instructor} = courses   // This is Destructuring...

console.log(courseInstructor);
console.log(Instructor);  