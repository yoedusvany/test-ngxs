import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import Book from 'src/app/store/books/book.model';
import * as bookActions from '../../store/books/book.actions' 

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  nameBook: string = '';
  

  constructor(
    private store: Store,
  ) {

   
  }

  ngOnInit(): void {
  }

  addBook(){
    const book: Book = {
      name: this.nameBook,
      author: 'authorX'
    }
    this.store.dispatch(new bookActions.Book.Add(book));
  }

}
