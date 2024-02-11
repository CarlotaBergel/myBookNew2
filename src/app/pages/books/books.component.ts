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

  constructor(private bookService: BooksService){
    this.book = [];
    this.bookService.getAll().subscribe((data:Book[]) => {this.book = data})
  }

  cerrarCard(id:number){
    console.log(id);
    let libro = this.book.filter(b => b.id_book == id);
    this.book = this.book.filter(b => b.id_book != id);
    let resultado;
    console.log(libro);

    this.bookService.delete(libro[0].id_book).subscribe((data:string) => {resultado = data})
  }

  search(id_book:number){
    console.log(id_book);
    // this.book = this.service.getAll();
    if(id_book.toString().length == 0){
      console.log("LLAMO SIN ID DEL LIBRO");
      this.bookService.getAll().subscribe((data:Book[]) => {this.book = data})
    }else{
      console.log("LLAMO CON ID DEL LIBRO");
      this.bookService.getBookOne(id_book).subscribe((data:Book[]) => {this.book = data})
    }
  console.log(this.book)
  }
}