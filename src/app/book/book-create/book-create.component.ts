import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  createForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });

  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit() {
  }

  submit() {
    this.bookService.create(this.createForm.value).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('');
    });
  }

}
