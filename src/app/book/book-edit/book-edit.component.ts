import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../../model/book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id: number;
  book: Book;
  editForm: FormGroup;

  constructor(private bookService: BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      this.bookService.getById(this.id).subscribe(data => {
        console.log(data);
        this.book = data;
        this.editForm = new FormGroup({
          title: new FormControl(data.title),
          author: new FormControl(data.author),
          description: new FormControl(data.description)
        });
      });
    });
  }

  ngOnInit() {
  }

  submit() {
    this.bookService.edit(this.editForm.value, this.id).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('');
    });
  }

}
