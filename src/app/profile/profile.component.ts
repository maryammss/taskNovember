import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User, UserDetail } from '../user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  isLoggedIn = false;
  userProfile?: UserDetail;
  user?: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated;
    this.user = this.authService.currentUserValue;
    if (this.user) {
      [this.userProfile] = this.user.profiles;
    }
  }
}
