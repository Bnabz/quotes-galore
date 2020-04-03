import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote('Brian','George Carlin','"Think of how stupid the average person is, then realize half of them are stupider than that."', 5,new Date()),
    new Quote ('Stacy','Carl Sagan',"\"We'r made of star stuff.We are a way for the universe to know itself.\"" ,3,new Date()),
    new Quote('Laureen','Marcus Aurelius',"\"Choose not to be harmed,and you wont feel harmed.Don't feel harmed,and you have not been harmed\"",1,new Date()),

  ];

  toggleDetails(index){
     this.quotes[index].showDetails = !this.quotes[index].showDetails;
   }

  deleteQuote(isDelete, index){
   if (isDelete) {
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
