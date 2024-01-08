import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {

  public book:Book[];

  constructor(){
    this.book = [
      new Book("La sirenita", "Infantil", "Josefina ", 18,"https://acortar.link/4A8ivP"),
      new Book("La cenicienta", "Infantil","Pepe ",21,"https://acortar.link/2Vjz2t"),
      new Book("Un cuento perfecto", "Juvenil","Elisabett",18,"https://acortar.link/HfXpo2"),
      new Book("Todo lo que nunca fuimos", "Juvenil","Alice",15,"https://acortar.link/iQ8TkE")
    ];
  }
  addBooks(title:HTMLInputElement, type:HTMLInputElement, author:HTMLInputElement, price:HTMLInputElement, photo:HTMLInputElement){
    let newBook = new Book(title.value, type.value, author.value, price.valueAsNumber, photo.value)
    console.log(this.book);
    console.log(newBook);
    this.book.push(newBook);
  }
}