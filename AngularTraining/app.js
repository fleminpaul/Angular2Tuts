"use strict";
//ES6+ Features
//Destructring
// var arr=[1,2,3];
// var[arr1,arr2,arr3]=arr;
// console.log(arr3);
exports.__esModule = true;
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
var arr = [2, 3, 4];
var nArr = arr.concat([5, 6]);
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
var Student_1 = require("./Student");
var p = {
    fname: "flemin1",
    lname: "paul1",
    age: 30,
    lkl: 1123
};
var foo = new Student_1.Student(p);
console.log(foo.getFullname());
var i = 0;
for (i = 0; i <= Math.random() * 10; i++) {
    console.log(Student_1.MAGIC_NUMBER);
}
