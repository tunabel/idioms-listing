export class Idiom {
  public id: string;
  public espPhrase: string;
  public espMeaning: string;
  public vietPhrase: string[];
  public ratings: number;

  constructor(id: string, espPhrase: string, espMeaning: string, vietPhrase: string[], ratings: number) {
    this.id = id;
    this.espPhrase = espPhrase;
    this.espMeaning = espMeaning;
    this.vietPhrase = vietPhrase;
    this.ratings = ratings;
  }
}
