"use strict";
exports.__esModule = true;
exports.MAGIC_NUMBER = Math.random();
var Student = /** @class */ (function () {
    function Student(obj) {
        this.fname = obj.fname;
        this.lname = obj.lname;
        this.age = obj.age;
    }
    Student.prototype.getFullname = function () {
        return this.fname + " " + this.lname;
    };
    return Student;
}());
exports.Student = Student;
