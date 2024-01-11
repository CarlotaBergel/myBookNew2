import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {

  public book:Book[];

  constructor(){
    this.book = this.refillBooks();
  }

  refillBooks()
  {
    let books: Book[] =
    [
      new Book("La sirenita", "Infantil", "Josefina ", 18,"https://acortar.link/4A8ivP"),
      new Book("La cenicienta", "Infantil","Pepe ",21,"https://acortar.link/2Vjz2t"),
      new Book("Un cuento perfecto", "Juvenil","Elisabett",18,"https://acortar.link/HfXpo2"),
      new Book("Todo lo que nunca fuimos", "Juvenil","Alice",15,"https://acortar.link/iQ8TkE")
    ];

    return books;
  }

  addBooks(title:HTMLInputElement, type:HTMLInputElement, author:HTMLInputElement, price:HTMLInputElement, photo:HTMLInputElement){
    let newBook = new Book(title.value, type.value, author.value, price.valueAsNumber, photo.value)
    console.log(this.book);
    console.log(newBook);
    this.book.push(newBook);
  }
  cerrarCard(number){
    // console.log(number);
    this.book = this.book.filter(book => book.id_book !=number);
  }
<<<<<<< HEAD
=======
  search(id_book:number){
    console.log(id_book);
    this.book = this.refillBooks();
    if(id_book){
      this.book = this.book.filter(book => book.id_book == id_book);
    }else{ this.book = this.book};
  console.log(this.book)
  }
>>>>>>> dia6
}