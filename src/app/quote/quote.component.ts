import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[];

  toggleDetails(index){
     this.quotes[index].showDescription = !this.quotes[index].showDescription;
   }

  deleteQuote(isComplete, index){
   if (isComplete) {
     let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

     if (toDelete){
       this.quotes.splice(index,1)
     }
   }
 }
 addNewQuote(goal){
   let quoteLength = this.quotes.length;
   quote.id = quoteLength+1;
   quote.submitDate = new Date()
   this.quotes.push(quote)

 }








  constructor() { }

  ngOnInit(): void {
  }

}
