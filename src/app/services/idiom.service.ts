import {Idiom} from "../idioms/idiom.model";

export default class IdiomService {
  idioms: Idiom[];

  constructor(idioms: Idiom[]) {
    this.idioms = idioms;
  }

  getIdioms() {
    return this.idioms;
  }

  setIdioms(idioms: Idiom[]) {
    this.idioms = idioms;
  }

  fetchIdioms() {

  }
}
