import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private dataService:DataService) { }

  ngOnInit() {
  }
  Login(f: NgForm) {
    console.log("Username : " + f.value.username + 
    "\nPassword : " + f.value.password);
    this.auth.loginUser(f.value.username,f.value.password);
  }
  getData(){
    this.dataService.getApiData().subscribe(response=>{
      console.log(response);
    },err=>{
    console.log(err)
    });
  }
}
