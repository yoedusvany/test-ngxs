import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import * as bookActions from './book.actions';

import { BooksStateModel } from './book.model';

@State({
  name: 'books',
  defaults: {
    books: []
  }
})
@Injectable()
export class BooksState {
  @Selector() static getBooks(state: BooksStateModel){ return state.books}

  @Action(bookActions.Book.Add)
  add({getState, patchState}: StateContext<BooksStateModel>, {book}: bookActions.Book.Add){
    const state = getState();
    patchState({
      books: [...state.books, book]
    });
  }

  @Action(bookActions.Book.Delete)
  delete({getState, patchState}: StateContext<BooksStateModel>, {bookName}: bookActions.Book.Delete){
    patchState({
      books: getState().books.filter(item => item.name !== bookName)
    });
  }
}