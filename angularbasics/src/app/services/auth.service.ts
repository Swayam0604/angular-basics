import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn: boolean = false;

  toggleLogin()
{
  this.isLoggedIn = !this.isLoggedIn;
}

isAuthenticated() {
  return this.isLoggedIn;
}
}
