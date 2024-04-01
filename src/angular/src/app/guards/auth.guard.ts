import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/oidc.service';

@Injectable()
export class AuthGuard {
    constructor(private router: Router, private authService: AuthService) { }

    canActivate() {
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            this.authService.login();
            return false;
        }
    }
}