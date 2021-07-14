import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '', component: AppComponent
  },
  {
    path: 'books',
    loadChildren: () => import('./modules/books/books.module').then(m => m.BooksModule)
  },
  {
    path: 'authors',
    loadChildren: () => import('./modules/author/author.module').then(m => m.AuthorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
