import {Idiom} from "../idioms/idiom.model";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export default class IdiomService {

  idiomSelect = new EventEmitter<Idiom>();
  private curId = 2;

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

  getIdiom(id: string | undefined): Idiom | undefined {
    for (let idiom of this.idioms) {
      if (id === idiom.id) {
        return idiom;
      }
    }
    return undefined;
  }

  saveIdiom(idiom: Idiom): void {
    if (idiom.id !== null) {
      let index = this.idioms.findIndex(idiomDb => idiomDb.id === idiom.id);
      if (index >= 0) {
        this.idioms[index] = idiom;
        return;
      }
    }
    this.curId++;
    idiom.id = String(this.curId);
    this.idioms.push(idiom);
  }

}
