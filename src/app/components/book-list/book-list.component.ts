import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import Book from 'src/app/store/books/book.model';
import * as bookActions from '../../store/books/book.actions';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.books$ = this.store.select(state => state.books.books);
  }

  removeBook(book: Book){
    this.store.dispatch(new bookActions.Book.Delete(book.name));
  }

}
