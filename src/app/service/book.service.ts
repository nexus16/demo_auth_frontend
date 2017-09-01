import { Injectable, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Book} from '../book';
@Injectable()
export class BookService {
  private apiUrl = "http://localhost:8000/api/books?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aGVudGljYXRlIiwiaWF0IjoxNTA0MjUxOTM5LCJleHAiOjE1MDQyNTU1MzksIm5iZiI6MTUwNDI1MTkzOSwianRpIjoiaXhsTGp4dFFubGhPQTJ0dCJ9.xTASHpYSvtH6wg8L4LsXod7Umd4wpaTrAWyn-Q0Qhfc";
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private _http: Http) { }
  getList(): Promise<Book[]>{
  	return(this._http).get(this.apiUrl)
  		.toPromise()
  		// .then(function(res) {
    //      console.log(res.json());
    //      return res => res.json() as Book[];})
    	.then(res => res.json() as Book[])
  		.catch(this.handleError);
  }


  getBook(id: number): Promise<Book>{
    const url = `${this.apiUrl}/${id}`;
    return this._http.get(url)
            .toPromise()
            .then(res => res.json() as Book)
            .catch(this.handleError);
  }

  create(book: Book): Promise<Book> {
    return this._http
      .post(this.apiUrl, JSON.stringify(book), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Book)
      .catch(this.handleError);
  }
  
  update(id: number, book: Book): Promise<Book> {
    const url = `${this.apiUrl}/${id}`;
    return this._http
      .put(url, JSON.stringify(book), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Book)
      .catch(this.handleError);
  }




  private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}

}
