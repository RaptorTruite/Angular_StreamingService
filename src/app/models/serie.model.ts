import { Commentary } from './commentary.model';

export class Serie{

  id: number;
  name: string;
  dateFirstSeason: Date;
  numberOfSeason: number;
  description: string;
  critic: string;
  picture: string;
  commentaries: Array<Commentary>;

  constructor(id: number, name: string, dateFirstSeason: Date, numberOfSeason: number,
              description: string, critic: string, picture: string){
    this.id = id;
    this.name = name;
    this.dateFirstSeason = dateFirstSeason;
    this.numberOfSeason = numberOfSeason;
    this.description = description;
    this.critic = critic;
    this.description = description;
    this.picture = picture;
    this.commentaries = new Array<Commentary>();
  }

  public getId(): number { return this.id; }
  public getName(): string { return this.name; }
  public getDateFirstSeason(): Date { return this.dateFirstSeason; }
  public getNumberOfSeason(): number { return this.numberOfSeason; }
  public getDescription(): string { return this.description; }
  public getCritic(): string { return this.critic; }
  public getPicture(): string { return this.picture; }
  public getCommentaries(): Array<Commentary> { return this.commentaries; }

  public setId(id: number): void { this.id = id; }
  public setName(name: string): void { this.name = name; }
  public setDateFirstSeason(date: Date): void {  this.dateFirstSeason = date; }
  public setNumberOfSeason(numberOfSeasons: number): void {  this.numberOfSeason = numberOfSeasons; }
  public setDescription(description: string): void {  this.description = description; }
  public setCritic(critic: string): void {  this.critic = critic; }
  public setPicture(picture: string): void {  this.picture = picture; }
  public setCommentaries(commentaries: Array<Commentary>): void {  this.commentaries = commentaries; }
}
