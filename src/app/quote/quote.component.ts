import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote('Brian','George Carlin','"Think of how stupid the average person is, then realize half of them are stupider than that."', 5,5,new Date('2020-03-25')),

    new Quote('Laureen','Marcus Aurelius',"\"Choose not to be harmed,and you wont feel harmed.Don't feel harmed,and you have not been harmed\"",3,1,new Date('2020-03-20')),

  ];
  most:number = 0;

    findMostPopular() {

      for (let i = 0; i < this.quotes.length; i++) {
          if(this.quotes[i].likes>this.most){
            this.most= this.quotes[i].likes;
          }
      }

     for (let i = 0; i < this.quotes.length; i++) {
            if(this.quotes[i].likes===this.most){
                    console.log(this.quotes[i])
                this.quotes[i].popularQuote = true
            }
            else{
              this.quotes[i].popularQuote = false
            }
      }
    }



    upVote(i){

      this.quotes[i].likes = this.quotes[i].likes +1
      this.findMostPopular()
    }

    downVote(i){

      this.quotes[i].dislikes = this.quotes[i].dislikes +1
      this.findMostPopular()
    }

    todayCheck(){
      for (let i = 0; i < this.quotes.length; i++) {
        let s= this.quotes[i].submitDate
        let n= new Date()
          if(s.getDay()===n.getDay()){
            this.quotes[i].today=true;
          }
      }
    }



  toggleDetails(index){
    console.log(this.quotes[1].today)
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
   this.todayCheck()

 }


  constructor() { }

  ngOnInit(): void {
    this.findMostPopular()
    this.todayCheck()
  }

}
