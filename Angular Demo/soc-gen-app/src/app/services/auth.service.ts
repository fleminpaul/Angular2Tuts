import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  logoutUser(): any {
    firebase.auth().signOut().then(res=>{
      console.log("logout",res);
      this.token=null;
      this.router.navigate(['']);
    })
  }
 private token:any = null;
  constructor(private router:Router) { }
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
    this.router.navigate(['/user'])

        }).catch(err=>{
          console.log(err);
        })
      }
    ).catch(err=>console.log(err))
  }

  getToken(){
    return this.token;
  }

  isAuthenticated(){
    return this.token!=null;
  }
}
