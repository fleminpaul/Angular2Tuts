import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('', [Validators.minLength(6), Validators.required]);
  password = new FormControl('', [Validators.required,this.hasExclamation]);
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,private authService:AuthService) {
    this.registerForm = this.fb.group({
      username: this.username,
      password: this.password
    });
  }

  hasExclamation(input: FormControl) {
    const i = input.value.indexOf('!') >= 0;
    return i ? null : { needExclamation: true };
  }

  ngOnInit() {
  }
  register() {
    console.log(this.registerForm);
    this.authService.registerUser(this.registerForm.value.username,this.registerForm.value.password);
  }
}
