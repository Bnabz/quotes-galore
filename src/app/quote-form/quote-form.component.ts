import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Quote } from '../quote';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote("","","",0,0,new Date());
  @Output() addQuote = new EventEmitter<Quote>();

  quoteForm = new FormGroup({
    username: new FormControl("",Validators.required),
    author: new FormControl("",Validators.required),
    quotation: new FormControl("",Validators.required)

  });

   onSubmit(){
      this.addQuote.emit(this.newQuote);
      console.log(this.newQuote)
    }
  constructor() { }

  ngOnInit(): void {
  }

}
