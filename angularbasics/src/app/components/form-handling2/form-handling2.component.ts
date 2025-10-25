import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form-handling2',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-handling2.component.html',
  styleUrl: './form-handling2.component.css'
})
export class FormHandling2Component {

  form !: FormGroup

  constructor(private formbuilder: FormBuilder) {
    this.form = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]],
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]],
      email: ['', [Validators.required, Validators.email]],
      age: [undefined, [Validators.required, Validators.min(18), Validators.max(100)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    })
  }

  onSubmit(form: FormGroup) {
    console.log("Name : ", form.value.name);
    console.log("Username : ", form.value.username);
    console.log("Email : ", form.value.email);
    console.log("Age : ", form.value.age);
    console.log("Password : ", form.value.password);
  }
  

  
}
