import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule],
  standalone: true,
  template: `
    <h2>Microscope</h2>
    <h2>Boilerplate Analog</h2>
  `,
  styles: [],
})
export default class HomeComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
