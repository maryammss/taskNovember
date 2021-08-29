import { Injectable } from '@angular/core';
import { User } from './user.model';

const TOKEN_KEY = 'token';
const USER_KEY = 'user';

@Injectable({
  providedIn: 'root',
})
export class TokenManagerService {
  constructor() {}

  public saveUser(user: any): void {
    window.sessionStorage.removeItem('user');
    window.sessionStorage.setItem('user', JSON.stringify(user));
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem('token');
    window.sessionStorage.setItem('token', token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem('token');
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
  }
}
