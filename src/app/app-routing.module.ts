import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book/book-list/book-list.component';
import {BookCreateComponent} from './book/book-create/book-create.component';
import {BookDetailComponent} from './book/book-detail/book-detail.component';
import {BookEditComponent} from './book/book-edit/book-edit.component';


const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
  },
  {
    path: 'create',
    component: BookCreateComponent,
  },
  {
    path: 'detail/:id',
    component: BookDetailComponent,
  },
  {
    path: 'edit/:id',
    component: BookEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
