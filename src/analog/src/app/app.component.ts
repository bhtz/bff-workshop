import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  template: ` 
    <mat-toolbar color="primary">
      <mat-icon style="cursor: pointer;" (click)="toggle()" aria-hidden="false" aria-label="Example home icon" fontIcon="menu"></mat-icon>
      <span style="margin-left: 10px;">Microscope.Boilerplate.Angular</span>
    </mat-toolbar>

    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav class="sidenav" mode="side" [(opened)]="opened" >
        <mat-action-list>
          <a mat-list-item href="/"><mat-icon mat-list-icon>home</mat-icon>Home</a>
          <a mat-list-item href="/counter"><mat-icon>add</mat-icon>Counter</a>
        </mat-action-list>
      </mat-sidenav>
      <mat-sidenav-content class="sidenav-content">
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  opened: boolean = true;
  toggle() {
    this.opened = !this.opened;
  }
}
