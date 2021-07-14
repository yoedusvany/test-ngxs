import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorRoutingModule } from './author-routing.module';
import { NgxsModule } from '@ngxs/store';
import { AuthorState } from 'src/app/store/authors/author.state';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    NgxsModule.forFeature([AuthorState])
  ]
})
export class AuthorModule { }
