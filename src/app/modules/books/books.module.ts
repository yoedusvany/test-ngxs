import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { NgxsModule } from '@ngxs/store';
import { BooksState } from 'src/app/store/books/book.state';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookRoutingModule,
    NgxsModule.forFeature([BooksState])
  ]
})
export class BooksModule { }
