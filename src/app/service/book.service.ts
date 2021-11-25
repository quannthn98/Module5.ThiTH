import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';

const apiUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${apiUrl}/books`);
  }

  getById(id: number): Observable<Book> {
    return this.http.get<Book>(`${apiUrl}/books/${id}`);
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(`${apiUrl}/books`, book);
  }

  edit(book: Book, id: number): Observable<Book> {
    return this.http.put<Book>(`${apiUrl}/books/${id}`, book);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${apiUrl}/books/${id}`);
  }

}


