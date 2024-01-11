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
  private service : BooksService;

  constructor(private bookService: BooksService){
    this.service = this.bookService;
    this.book = this.service.getAll();
  }

  cerrarCard(number){
    // console.log(number);
    this.book = this.book.filter(book => book.id_book !=number);
  }
  search(id_book:number){
    console.log(id_book);
    // this.book = this.service.getAll();
    if(id_book){
      this.book = this.service.getAll().filter(book => book.id_book == id_book);
    }else{ this.book = this.service.getAll()};
  console.log(this.book)
  }
}