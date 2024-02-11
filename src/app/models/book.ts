export class Book {
    public id_book:number;
    public id_user:number;
    public title:string;
    public type:string;
    public author:string;
    public price:number;
    public photo:string;
    book: Book[];


    constructor(titulo:string, tipo:string, autor:string, precio:number, foto:string, id_book:number){
        this.id_book = id_book;
        this.id_user = 0;
        this.title = titulo;
        this.type = tipo;
        this.author = autor;
        this.price = precio;
        this.photo = foto;

        
    }

// Para generar libros automaticamente

//Variable del objeto BOOK que incrementa con la creación de un book
        // private static contador:number = 0;
    // Dentro del constructor:
        // Book.contador++;
}