import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{NgForm} from '@angular/forms'
@Component({
  selector: 'app-create-listings',
  templateUrl: './create-listings.component.html',
  styleUrls: ['./create-listings.component.scss']
})
export class CreateListingsComponent implements OnInit {
  registerForm:any= FormGroup;
  signupForm:any=FormGroup;
  submitted = false;
  submitteded = false;
  date: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    
  }, );
  this.signupForm = this.formBuilder.group({
    title: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    acceptTerms: [false, Validators.requiredTrue]
}, );


  }
 // convenience getter for easy access to form fields
 get f() { return this.registerForm.controls; }
 get f1() { return this.signupForm.controls; }

 onSubmit() {
  // data:NgForm
    //  this.submitted = true;
    //  console.log(data)

     // stop here if form is invalid
     if (this.registerForm.invalid) {
         return;
     }
     // display form values on success
        
     console.log(this.registerForm.value);
 }
 onSubmites() {
  this.submitteded = true;

  // stop here if form is invalid
  if (this.signupForm.invalid) {
      return;
  }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value, null, 4));
}

}

