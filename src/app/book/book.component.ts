import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';
import {Book} from '../book';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
   providers: [BookService],

})
export class BookComponent implements OnInit {
	public books: Book[];
  constructor(private bookService: BookService) {}

  ngOnInit():void {
  	this.getList();
  }

  getList(): void{
    this.bookService.getList().then(books => {this.books = books;console.log(books);});
  }


  getBook(){
    this.bookService.getBook(100).then(book =>{console.log(book)});
  }

  createBook(form){
    this.bookService.create(form)
    .then(book=>{this.books.push(book); console.log(book)});
  }

  editBook(form){
    this.bookService.update(1,form)
    .then(book=>{console.log(book)});

  }


}
