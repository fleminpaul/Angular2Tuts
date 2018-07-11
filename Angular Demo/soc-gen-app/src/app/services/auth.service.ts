import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
@Injectable()
export class AuthService {
 private token:any;
  constructor() { }
  registerUser(username: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(username, password).then(
      response => { 
        console.log(response.user);
        // if (response.user.I == true) { 
        //   console.log("Created") 
        // }
       },
      err => console.log(err.message));
  }

  loginUser(username: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(username,password).then(
      response=>{
        console.log(response)
        firebase.auth().currentUser.getIdToken().then(token=>{
          this.token=token;
        }).catch(err=>{
          console.log(err);
        })
      }
    ).catch(err=>console.log(err))
  }

  getToken(){
    return this.token;
  }
}
