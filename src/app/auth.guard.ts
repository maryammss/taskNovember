import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenManagerService } from './token-manager.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private tokenManagerservice:TokenManagerService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.tokenManagerservice.getToken()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
