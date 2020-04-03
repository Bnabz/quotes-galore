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
    new Quote ('Stacy','Carl Sagan',"\"We'r made of star stuff.We are a way for the universe to know itself.\"" ,8,new Date()),
    new Quote('Laureen','Marcus Aurelius',"\"Choose not to be harmed,and you wont feel harmed.Don't feel harmed,and you have not been harmed\"",3,new Date()),

  ];
  most:number = 0;


  /* findMostPopular() {
      let popular =0;
      for(let i =0;i<this.quotes.length; i++){
        if(this.quotes[i].likes>popular){
          popular=this.quotes[i]
          return true

      }



      }

    }*/

    findMostPopular() {

      //let most = 0;
      for (let i = 0; i < this.quotes.length; i++) {
          if(this.quotes[i].likes>this.most){
            this.most= this.quotes[i].likes;
            /*this.popular=this.quotes[i].likes
             this.quotes[i].popularQuote = !this.quotes[i].popularQuote;*/
              //console.log(most)
          }




      }
       for (let i = 0; i < this.quotes.length; i++) {
              if(this.quotes[i].likes===this.most){
                      console.log(this.quotes[i])
                  this.quotes[i].popularQuote = true
              }

        }


    }



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

    this.findMostPopular()
}



}
