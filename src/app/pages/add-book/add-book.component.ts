import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent {
  public books : Book[];
  private service : BooksService;

  constructor(private bookService: BooksService, private router:Router){
    this.books= this.bookService.getAll();
    this.service = this.bookService;
    console.log(this.books);
  } 

  addBooks(title:string, type:string, author:string, price:number, photo:string):void{
    console.log(title);
    this.service.add(new Book(title, type, author, price, photo));
    console.log(this.books);
  }
}
