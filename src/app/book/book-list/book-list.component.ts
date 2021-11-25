import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  deleteId: number;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.bookService.getAll().subscribe(data => {
      this.books = data;
    });
  }

  showDeleteConfirm(id: number) {
    this.deleteId = id;
  }

  delete() {
    this.bookService.delete(this.deleteId).subscribe(data => {
      console.log(data);
      this.getAll();
    });
  }

}
