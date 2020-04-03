export class Quote {
  showDetails: boolean;
constructor(public username: string,public author: string , public quotation: string,public likes: number, public submitDate: Date){
this.showDetails=false;
}
}
