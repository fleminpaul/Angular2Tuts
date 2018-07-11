//ES6+ Features
//Destructring
// var arr=[1,2,3];
// var[arr1,arr2,arr3]=arr;
// console.log(arr3);

// var obj = {
//     drawCircle:function(r){console.log(Math.PI*r*r);},
//     drawText:function(text){console.log(`Drawing $(text)`);}
// }

// var {drawCircle,drawText} = obj;
// drawText("test");

//Template String Syntax
//multi-line string
//include variable in string
// var fname="foo";
// console.log(`testing $(fname)`);

//Block Scope
// - let
// - const
//console.log(errr);
//let errr;

//Rest & Spread OPerator (...)
//Spread
let arr = [2, 3, 4];
let nArr = [...arr, 5, 6];
// console.log(nArr);
// //Rest
// function demo(a,...params)
// {
//     params.forEach(element => {
//         console.log(element);
//     });
// }

// demo("1a",22,"asdh",4.5);

//Lambda
//ES5
// let dArr = nArr.map(function(v)
//             {return v*2;
//             });
//ES6
// let dArr = nArr.map(v=>v*2);

// console.log(dArr);

//Class
// import { Student, MAGIC_NUMBER } from './Student';
// import { Person } from './Person'
// let p: Person= {
//     fname: "flemin1",
//     lname: "paul1",
//     age: 30
// }
// let foo = new Student(p);
// console.log(foo.getFullname());
// let i: number = 0;
// for (i = 0; i <= Math.random() * 10; i++) {
//     console.log(MAGIC_NUMBER);
// }

//ES7 
//Decorators in angular core package
//class decorator
//property decorator
//method decorator
