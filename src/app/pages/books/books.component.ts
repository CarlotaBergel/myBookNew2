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

  constructor(private books: BooksService){
    this.book = this.books.books;
  }
  
  check(num:number){
    let tick = this.book.findIndex(valor => valor.id_book == num);
    if (tick !==-1){
      this.book = this.books.getOne(num);
    }else{
      console.log(this.book = this.books.getAll());
    }
  }

  addBooks(title:HTMLInputElement, type:HTMLInputElement, author:HTMLInputElement, price:HTMLInputElement, photo:HTMLInputElement){
    let newBook = new Book(title.value, type.value, author.value, price.valueAsNumber, photo.value)
    this.book.push(newBook);
  }
  cerrarCard(number){
    // console.log(number);
    this.book = this.book.filter(book => book.id_book !=number);
  }

  search(id_book:number){
    console.log(id_book)
    if(id_book){
      this.book = this.book.filter(book => book.id_book == id_book);
    }else{ this.book = this.books.getAll()};
  console.log(this.book)
  }
}