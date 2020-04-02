export class Quote {
  showDescription: boolean;
constructor(public username: string,public author: string , public quote: string, public submitDate: Date){
this.showDescription=false;
}
