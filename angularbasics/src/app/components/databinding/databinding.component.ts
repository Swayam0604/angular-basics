import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  imports: [],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  title = 'Data Binding in Angular';
  name = 'ABC';
  age = 25;
  placeholder = "*********";
  color = "red";

  showAlert(){
    alert("Button Clicked");
  }

  changePlaceholder(value:string){
    this.placeholder = value;
}
}