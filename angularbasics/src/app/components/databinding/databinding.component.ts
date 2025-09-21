import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  title = 'Data Binding in Angular';
  name = 'ABC';
  age = 25;
  placeholder = "*********";
  color = "red";
  username = '';

  showAlert(){
    alert("Button Clicked");
  }

  changePlaceholder(value:string){
    this.placeholder = value;
}

}