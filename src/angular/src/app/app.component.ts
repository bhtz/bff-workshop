import { Component, OnInit, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from './services/oidc.service';
import { CommonModule } from '@angular/common';
import { FeatureFlagService } from './services/feature-flags.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private authService = inject(AuthService);
  private featureFlagService = inject(FeatureFlagService);

  isAuthenticated: boolean = false;
  isUserPageEnabled: boolean = false;
  public opened: boolean = true;
  
  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.featureFlagService.loadFeatureFlags().subscribe(()=> this.isUserPageEnabled = this.featureFlagService.getFeature('ShowUserPage'));
  }

  toggle() {
    this.opened = !this.opened;
  }

  logout() {
    this.authService.logout();
  }

  login() {
    this.authService.login();
  }

  goToAccount() {
    alert('Not implemented yet');
  }
}
