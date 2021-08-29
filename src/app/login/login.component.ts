import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserDetail } from '../user.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  user!: User;
  firtProfile?: UserDetail;
  secondProfile?: UserDetail;
  showModal: boolean = false;

  constructor(
    private http: HttpClient,
    private route: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated;
    if (this.isLoggedIn) {
      this.route.navigate(['/account']);
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        (data) => {
          if (data) {
            [this.user] = data;
            if (this.user.profiles.length > 1) {
              [this.firtProfile, this.secondProfile] = this.user.profiles;
              this.showModal = true;
            } else {
              this.authService.login(this.user);
            }
          }
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
  }

  gotoAccount() {
    this.route.navigate(['/account']);
  }

  loginUsingFirstProfile() {
    this.user.profiles.pop();
    this.authService.login(this.user);
  }

  loginUsingSecondProfile() {
    this.user.profiles.shift();
    this.authService.login(this.user);
  }
}
