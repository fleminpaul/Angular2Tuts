import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
@Injectable()
export class AuthService {

  constructor() { }
  registerUser(username: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(username, password).then(
      response => { 
        console.log(response.user);
        if (response.user.I == true) { 
          console.log("Created") 
        } },
      err => console.log(err.message));
  }
}
