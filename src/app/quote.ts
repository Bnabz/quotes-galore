export class Quote {
  showDetails: boolean;
  popularQuote:boolean;

constructor(public username: string,public author: string , public quotation: string,public likes: number, public dislikes: number,public submitDate: Date){
this.showDetails=false;
this.popularQuote=false;


}
}
