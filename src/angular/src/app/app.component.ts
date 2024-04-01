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

  isAuthenticated: boolean;
  public opened: boolean = true;

  constructor() {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  ngOnInit(): void {
    // this.isAuthenticated = this.authService.isAuthenticated();
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
