import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): boolean {

    if( email === 'Administrateur' && password === 'azerty'){
      return true;
    }
    else return false;
  }
}
