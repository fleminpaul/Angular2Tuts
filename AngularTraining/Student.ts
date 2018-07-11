import { Person } from "./Person";

export const MAGIC_NUMBER: number = Math.random();
export class Student {
    private fname: string;
    private lname: string;
    private age: number;
    constructor(obj:Person) {
        this.fname = obj.fname;
        this.lname = obj.lname;
        this.age = obj.age;
    }
    getFullname(): string {
        return this.fname + " " + this.lname;
    }
  
}
