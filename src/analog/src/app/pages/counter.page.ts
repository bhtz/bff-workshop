import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule],
  standalone: true,
  template: `
    <h2>Counter</h2>

    <div class="card">
      <p>Count {{ count }}</p>
      <button mat-flat-button (click)="increment()" color="primary">Click me</button>
    </div>
  `,
  styles: [],
})
export default class CounterComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
