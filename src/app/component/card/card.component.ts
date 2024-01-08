import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

 @Input() libro:Book;
 @Input() index:Number;
 @Output() cerrarCard = new EventEmitter<number>;


  closedX():void{
    // console.log("hola desde el hijo")
    this.cerrarCard.emit(this.libro.id_book)
  }

}