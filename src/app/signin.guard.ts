import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

// import the auth service here
// import { AuthService } from '../core/auth.service';

@Injectable()
export class SignInGuard implements CanActivate {

  // add the service we need
  constructor(
    private auth: UserService,
    private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // handle any redirects if a user isn't authenticated
    if (this.auth.role !== '') {
      // redirect the user
      this.router.navigate(['/sign-in']);
      return false;
    }

    return true;
  }

}
