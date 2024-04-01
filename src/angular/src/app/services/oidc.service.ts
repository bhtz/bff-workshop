import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private oAuthService = inject(OAuthService);
    private router = inject(Router);

    constructor() {
        this.initConfiguration();
    }

    initConfiguration() {
        const authConfig: AuthConfig = {
            issuer: 'http://localhost:8083/realms/microscope/',
            clientId: 'boilerplate',
            dummyClientSecret: 'JxaXjmKOd08cMpaKrThAObUzeOmyRiLN',
            scope: 'roles',
            responseType: 'code',
            redirectUri: 'http://localhost:4200/',
            strictDiscoveryDocumentValidation: false,
            skipIssuerCheck: true
        };

        this.oAuthService.configure(authConfig);
        this.oAuthService.setupAutomaticSilentRefresh();
        this.oAuthService.loadDiscoveryDocumentAndTryLogin();
    }

    login() {
        this.oAuthService.initLoginFlow();
    }

    logout() {
        this.oAuthService.revokeTokenAndLogout();
        this.oAuthService.logOut();
    }

    getProfile() {
        const profile = this.oAuthService.getIdentityClaims();
        return profile;
    }

    getToken() {
        return this.oAuthService.getAccessToken();
    }

    isAuthenticated() {
        return this.oAuthService.hasValidAccessToken() && this.oAuthService.hasValidIdToken();
    }
}