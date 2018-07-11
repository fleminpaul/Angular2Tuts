import { Component } from '@angular/core';
import { USER_DATA } from './mocks';
import { User } from './model/User';
import { DataService } from './services/data.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ds:DataService){}
  title = 'app';
  users: User[];
  ngOnInit() {
    //this.users = this.ds.getUserData();
    //  this.ds.getJsonData().subscribe(
    //    data=>this.users=data,
    //    err=>console.log(err.status + " "+err.statusText),
    //    ()=>console.log("Completed")
      
    //   );
firebase.initializeApp({
  apiKey: "AIzaSyBLsrZ15kr5sgGwQZWaNQg-aqrb4oZjEeg",
    authDomain: "soc-gen.firebaseapp.com"
});

    
  }
}
