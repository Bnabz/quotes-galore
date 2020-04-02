import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail-component',
  templateUrl: './quote-detail-component.component.html',
  styleUrls: ['./quote-detail-component.component.css']
})
export class QuoteDetailComponentComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isDelete = new EventEmitter<boolean>();


  quoteDelete(deleteQ:boolean){

    this.isDelete.emit(deleteQ);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
