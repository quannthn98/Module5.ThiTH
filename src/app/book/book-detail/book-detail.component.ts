import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  id: number;
  book: Book;

  constructor(private bookService: BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      this.bookService.getById(this.id).subscribe(data => {
        this.book = data;
      });
    });
  }

  ngOnInit() {
  }
}
