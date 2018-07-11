import { User } from "./model/User";

export const USER_DATA:User[]= [{
    fname: "Bill",
    lname: "Gates",
    company: "Microsoft",
    designation: "Chairman",
    dob: new Date(1963, 11, 30),
    income: 50000,
    votes: 205,
    isworking:true,
    image: "https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/20258236_10154756882766961_3434466954525858896_n.jpg?_nc_cat=0&oh=ae0a1babe83abe6cac2ba3c1be107f86&oe=5BD9460B"
  },{
    fname: "Steve",
    lname: "Jobs",
    company: "Apple",
    designation: "CEO",
    dob: new Date(1963, 1, 10),
    income: 0,
    votes: 500,
    isworking:false,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_rzTgJoXN2oLLKOSApGyDYMBRV9ZMOlazoWYPbjf4XUaCl_5mA"
  },{
    fname: "Tim",
    lname: "Lee",
    company: "WWW",
    designation: "Sr. Architect",
    dob: new Date(1975, 10, 13),
    income: 75000,
    votes: 150,
    isworking:true,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg"
  }];