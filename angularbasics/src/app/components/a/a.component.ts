import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';  
import {BComponent} from '../b/b.component';
@Component({
  selector: 'app-a',
  imports: [FormsModule, BComponent],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {
  parentData = "Data From Parent"

  
}
