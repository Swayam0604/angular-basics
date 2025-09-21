import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AComponent } from '../components/a/a.component';
import { ProductsComponent } from "../components/products/products.component";
import { StudentsComponent } from "../components/students/students.component";
import { ParentComponent } from '../components/parent/parent.component';

@Component({
  selector: 'app-input-and-output',
  imports: [AComponent, ProductsComponent, StudentsComponent, ParentComponent, FormsModule],
  templateUrl: './input-and-output.component.html',
  styleUrl: './input-and-output.component.css'
})
export class InputAndOutputComponent {

}
