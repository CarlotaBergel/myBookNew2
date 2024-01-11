import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public books: Book [];
  libro: Book[];

  constructor() {
    
    this.books = [
      new Book("La sirenita", "Infantil", "Josefina Palomares", 18,"https://acortar.link/4A8ivP"),
      new Book("La cenicienta", "Infantil","Pepe Gallardo",21,"https://acortar.link/2Vjz2t"),
      new Book("Un cuento perfecto", "Juvenil","Elisabett Benavent",18,"https://acortar.link/HfXpo2"),
      new Book("Todo lo que nunca fuimos", "Juvenil","Alice Kellen",15,"https://acortar.link/iQ8TkE"),
    ]
  }

  getAll():Book[]{
    return this.books;
  }

  getOne(id_book:number):Book[]{
    return this.books.filter(book => book.id_book == id_book);
  }

  add(book:Book):void{
    this.books.push(book);
  }

 edit(book:Book): boolean{
    let cambiar = this.books.findIndex(val => val.id_book == book.id_book);
    if(cambiar !== -1){
      this.books[cambiar] = book;
      return true;

    }else{
      return false;
    }
  }

  delete(id_book:number): boolean{
    let borrar = this.books.findIndex(val => val.id_book == id_book);
    if(borrar !== -1){
      this.books.filter(val => val.id_book == id_book);
      return true;

    }else{
      return false;
    }
  }

}