import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User, UserDetail } from '../user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;
  userProfile?: UserDetail;
  user?: User;

  constructor(private route: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated;
    this.user = this.authService.currentUserValue;
    if (this.user) {
      [this.userProfile] = this.user.profiles;
    }
  }

  gotoLogin()
  {
    this.route.navigate(['/login']);
  }

  gotoAccount()
  {
    this.route.navigate(['/account']);
  }
  
}
