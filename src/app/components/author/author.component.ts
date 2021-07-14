import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    console.log(this.store.snapshot());
  }

}
