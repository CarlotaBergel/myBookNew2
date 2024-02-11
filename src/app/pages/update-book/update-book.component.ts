import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  private service : BooksService;

  constructor(private bookService: BooksService){
    this.service = this.bookService;
  }

  update(title:string, type:string, author:string, price:number, photo:string, id_book: number):void{
    console.log(title);
    let newBook = new Book(title, type, author, price, photo, id_book);
    let resultado;
    //let resultado = this.service.edit(newBook);
    this.service.edit(newBook).subscribe((data:string) => {resultado = data})
  }
}
