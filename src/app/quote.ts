export class Quote {
  showDescription: boolean;
constructor(public username: string,public author: string , public quotation: string, public submitDate: Date){
this.showDescription=false;
}
