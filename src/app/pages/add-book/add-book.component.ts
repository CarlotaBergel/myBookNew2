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

  constructor(private addBook: BooksService, private router:Router){
    this.books= this.addBook.getAll();
  } 

  addBooks(title:string, type:string, author:string, price:number, photo:string, id_book:number, id_user:number):void{
    console.log(title)
    this.books.push(new Book(title, type, author, price, photo));
  }

  
}
