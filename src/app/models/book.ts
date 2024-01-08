export class Book {
    public id_book:number;
    public id_user:number;
    public title:string;
    public type:string;
    public author:string;
    public price:number;
    public photo:string;
    //Variable del objeto BOOK que incrementa con la creación de un book
    private static contador:number = 0;


    constructor(titulo:string, tipo:string, autor:string, precio:number, foto:string){
        this.id_book = Book.contador;
        this.id_user = 0;
        this.title = titulo;
        this.type = tipo;
        this.author = autor;
        this.price = precio;
        this.photo = foto;

        Book.contador++;
    }
}