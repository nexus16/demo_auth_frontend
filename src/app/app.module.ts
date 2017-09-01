import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import {BookService} from './service/book.service';

@NgModule({
	imports: [ BrowserModule, HttpModule, FormsModule],
  	declarations: [
   		AppComponent,
    	BookComponent
  	],
  providers:[BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
