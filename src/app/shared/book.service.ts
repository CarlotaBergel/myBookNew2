import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  //public books: Book [];
  //libro: Book[];
  private url = "http://localhost:3000/books"

  constructor(private http: HttpClient) {
    
    // this.books = [
    //   new Book("La sirenita", "Infantil", "Josefina", 18,"https://acortar.link/4A8ivP"),
    //   new Book("La cenicienta", "Infantil","Pepe",21,"https://acortar.link/2Vjz2t"),
    //   new Book("Un cuento perfecto", "Juvenil","Elisabett",18,"https://acortar.link/HfXpo2"),
    //   new Book("Todo lo que nunca fuimos", "Juvenil","Alice",15,"https://acortar.link/iQ8TkE"),
    // ]
  }

  getAll(){
    console.log("LLAMO AL SERVICE");
    //console.log(this.http.get(this.url));
    //console.log(this.http.get(`${this.url}?id_book=${"1"}`));
    return this.http.get(this.url);
  }
  getBookOne(id_book:number){
    return this.http.get(`${this.url}?id_book=${id_book}`)
  }
  add(newBook: Book){
    return this.http.post(this.url, newBook);  
  }
  edit(bookActualizar: Book){
    return this.http.put(this.url, bookActualizar);
  }
  delete(idBook:number){
    let deletedBook = {headers: null, body:{"id_book":idBook}};
    return this.http.delete(this.url,deletedBook);
  }
}