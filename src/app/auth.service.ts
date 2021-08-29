import { Injectable } from '@angular/core';
import { TokenManagerService } from './token-manager.service';
import { User } from './user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private tokenManagerservice: TokenManagerService,
    private route: Router
  ) {}

  public get isAuthenticated(): boolean {
    return !!this.tokenManagerservice.getToken();
  }

  public get currentUserValue(): User | undefined {
    if (this.isAuthenticated) {
      return this.tokenManagerservice.getUser();
    }
    return;
  }

  login(user: User) {
    if (user.token) {
      this.tokenManagerservice.saveToken(user.token);
      this.tokenManagerservice.saveUser(user);
      this.route.navigate(['/account']);
    }
  }
}
