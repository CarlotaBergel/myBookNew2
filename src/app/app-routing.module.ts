import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { BooksService } from './shared/book.service';


const routes: Routes = [
  {path: "register", component: RegisterComponent},
  {path:"profile", component: ProfileComponent},
  {path: "books", component: BooksComponent},
  {path: "add-book", component: AddBookComponent},
  {path: "update-book", component: UpdateBookComponent},
  {path: "books", component: BooksService},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
