import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, NgIf,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  //form control example
  // name = new FormControl();
  // password = new FormControl();

  // displayValue() {
  //   console.log(this.name.value, this.password.value);
  // }

  // setValues() {
  //   this.name.setValue('mohit');
  //   this.password.setValue('12345');
  // }

  //form group example
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
    ]),
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }

  get name() {
    return this.profileForm.get('name');
  }

  get email() {
    return this.profileForm.get('email');
  }

  get password() {
    return this.profileForm.get('password');
  }

  //template driven forms
  addDetails(val:NgForm){
    console.log(val);
    
  }
}
