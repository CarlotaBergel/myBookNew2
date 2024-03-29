import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  public name:string;
  public apellido:string;
  public email:string;
  public URL:string;
  public password:string;
  loginForm: FormGroup;
  public myForm: FormGroup;

  constructor(private router:Router, private formBuilder:FormBuilder){
    this.buildForm();
  }
  
  private buildForm(){
    const minPassLength = 8;
    this.myForm = this.formBuilder.group({
      name: [,[Validators.required]],
      apellido: [,[Validators.required]],
      email: [, [Validators.required, Validators.email]],
      URL: [, [Validators.required]],
      password:[,[Validators.required, Validators.minLength(minPassLength)]]
    })
  }
  
  goPlace(){
   this.router.navigate(['loginComponent'])
 }
  
  onSubmit(form:NgForm){
    console.log(form.value);
  }

  ngOnInit():void{}
  
}

