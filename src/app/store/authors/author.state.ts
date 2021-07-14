import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AuthorStateModel } from './author.model';
import * as authorActions from './author.actions'

@State({
  name: 'authors',
  defaults: {
    authors: []
  }
})
@Injectable()
export class AuthorState {
  @Selector() static getAuthors(state: AuthorStateModel){ return state.authors}

  @Action(authorActions.Author.Add)
  add({getState, patchState}: StateContext<AuthorStateModel>, {name}: authorActions.Author.Add){
    const state = getState();
    patchState({
      authors: [...state.authors, {name}]
    });
  }
}