import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any= FormGroup;
  signupForm:any=FormGroup;
  submitted = false;
  submitteded= false;
  constructor(private formBuilder: FormBuilder,private router: Router,
  
    private api: AuthService){ }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
    
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  }, );
  this.signupForm=this.formBuilder.group({
   
    firstName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],


  })
    
  }

  get f() { return this.loginForm.controls; }
  get f1() { return this.signupForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        let request = {
          email: this.loginForm.value.email,
          password : this.loginForm.value.password,
        }

        // display form values on success
        
        console.log(this.loginForm.value, null, 4);
    }


    public onSubmites(){

  this.submitteded = true;
  // stop here if form is invalid
  if (this.signupForm.invalid) {
      return;
  }
   // display form values on success
   console.log(this.signupForm.value);
    }
    // this._http.loginApi(request).subscribe(res => {
    //   let response = res; 
    //   this.test = response.data.role
    //   console.log(this.test)}
  // login api calling
  //  login(){
  //   var formValues = this.signupForm.value;
  //   this.api.loginApi(formValues).subscribe(res => {
  //     const response: any = res;
  //     if (response.success == true){
  //       localStorage.setItem('userData', JSON.stringify(response.data));
  //       localStorage.setItem('token', response.data.tokens)
       
  //       // this.router.navigate(['/dashboard']);
  //     }
  //     // else{
  //     //   this.openErrrorSnackBar(response.message);
  //     // }
  //     console.log(res);
  //   },(err: { error: any; }) => {
  //     const error = err.error;
  //     // this.openErrrorSnackBar(error.message);
  //   });
  // }




  

}
