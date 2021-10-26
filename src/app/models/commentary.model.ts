export class Commentary{

  id:number;
  date: Date;
  author: string;
  content: string;

  constructor(id:number, author:string, content:string, date?: Date){
    this.id = id;
    this.author = author;
    this.content = content;

    if(date) this.date = date;
    else this.date = new Date();
  }

  public getId(): number { return this.id; }
  public getDate(): Date { return this.date}
  public getAuthor(): string { return this.author; }
  public getContent(): string { return this.content; }

  public setId(id:number): void { this.id = id; }
  public setDate(date:Date): void { this.date = date; }
  public setAuthor(author:string): void { this.author = author; }
  public setContent(content:string): void { this.content = content; }
}
