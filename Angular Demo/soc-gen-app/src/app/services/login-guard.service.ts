import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class LoginGuardService implements CanActivate {

  constructor(private auth: AuthService,private router:Router) { }

  canActivate() {
    return this.auth.isAuthenticated();
  }
}
