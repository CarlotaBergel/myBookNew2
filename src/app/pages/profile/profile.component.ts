import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public person:User
  constructor(){
    this.person= new User("Carlota", "Bergel Pozo","carlota.234@gmail.com","https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg","Carlota234");
  }
  update(name:HTMLInputElement, last_name:HTMLInputElement, email:HTMLInputElement, photo:HTMLInputElement){
    this.person.name = name.value;
    this.person.last_name = last_name.value;
    this.person.email = email.value;
    this.person.photo = photo.value;
  }
}