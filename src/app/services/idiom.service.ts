import {Idiom} from "../idioms/idiom.model";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export default class IdiomService {

  idiomSelect = new EventEmitter<Idiom>();

  private idioms: Idiom[] = [
    new Idiom("1", "hola", "saludos", ["xin chao"], 5),
    new Idiom("2", "adios", "despedidos", ["tam biet", "hen gap lai"], 5),
  ]

  constructor() {
  }

  getIdioms() {
    return this.idioms;
  }

  setIdioms(idioms: Idiom[]) {
    this.idioms = idioms;
  }


}
