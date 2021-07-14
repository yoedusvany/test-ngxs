import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin' 


import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { BooksState } from './store/books/book.state';
import { AuthorComponent } from './components/author/author.component';
import { BookComponent } from './components/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCreateComponent,
    BookListComponent,
    AuthorComponent,
    BookComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
