import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-handling1',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-handling1.component.html',
  styleUrl: './form-handling1.component.css'
})
export class FormHandling1Component {

  onSubmit(form: any){
    console.log('Form submitted', form);
    console.log('Name :', form.value.username);
    console.log('Password :', form.value.password);
  }

}
