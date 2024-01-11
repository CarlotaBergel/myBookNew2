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
      new Book("La sirenita", "Infantil", "Josefina", 18,"https://acortar.link/4A8ivP"),
      new Book("La cenicienta", "Infantil","Pepe",21,"https://acortar.link/2Vjz2t"),
      new Book("Un cuento perfecto", "Juvenil","Elisabett",18,"https://acortar.link/HfXpo2"),
      new Book("Todo lo que nunca fuimos", "Juvenil","Alice",15,"https://acortar.link/iQ8TkE"),
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

 edit(book:Book, id:number): boolean{
    let indice = this.books.findIndex(val => val.id_book == id);
    if(indice !== -1){
      this.books[indice].id_book = id;
      this.books[indice].title = book.title;
      this.books[indice].type = book.type;
      this.books[indice].author = book.author;
      this.books[indice].price = book.price;
      this.books[indice].photo = book.photo;

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