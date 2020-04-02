import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote('Brian','Brian','quote1',new Date()),
    new Quote ('Brian','Brian','quote2',new Date()),
    new Quote('Brian','Brian','quote3',new Date()),

  ];

  toggleDetails(index){
     this.quotes[index].showDetails = !this.quotes[index].showDetails;
   }

  deleteQuote(isComplete, index){
   if (isComplete) {
     let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}'s'?`)

     if (toDelete){
       this.quotes.splice(index,1)
     }
   }
 }
 addNewQuote(quote){
   let quoteLength = this.quotes.length;
   quote.id = quoteLength+1;
   quote.submitDate = new Date()
   this.quotes.push(quote)

 }






  constructor() { }

  ngOnInit(): void {
  }

}
