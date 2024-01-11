import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  public email:string;
  public password:string;
  public user:User;
  loginForm: FormGroup;
  public myForm: FormGroup;

  constructor(private router:Router, private formBuilder:FormBuilder){
    this.buildForm();
  }
  
  private buildForm(){
    const minPassLength = 8;

    this.myForm = this.formBuilder.group({
      email: [, [Validators.required, Validators.email]],
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