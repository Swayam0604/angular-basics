import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [CommonModule,FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  darkTheme: boolean = true;
  size = '20px';
  status: boolean = true;
  loggedIn: boolean = false;
  colors = ['red', 'blue', 'green', 'yellow', 'purple'];
  todos = [
    {
      id: 1,
      todo: 'Do something nice for someone you care about',
      completed: false,
      userId: 152,
    },
    {
      id: 2,
      todo: 'Memorize a poem',
      completed: true,
      userId: 13,
    },
    {
      id: 3,
      todo: 'Watch a classic movie',
      completed: true,
      userId: 68,
    },
    {
      id: 4,
      todo: 'Watch a documentary',
      completed: false,
      userId: 84,
    },
  ];
  newColor = '';

  addColor() {
    const value = (this.newColor || '').trim();
    if (!value) return;
    this.colors.push(this.newColor);
    
  }

  toggleLogin() {
    this.loggedIn = !this.loggedIn;
  }

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
  }

  style() {
    return { color: 'red', 'font-size': this.size };
  }

  changeSize(fontSize: string) {
    this.size = fontSize;
  }
}
