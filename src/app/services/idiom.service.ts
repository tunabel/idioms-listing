import {Idiom} from "../idioms/idiom.model";
import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs";

const idiomUrl = 'https://idioms-esv-default-rtdb.asia-southeast1.firebasedatabase.app/idioms';
const jsonSuffix = '.json';

@Injectable()
export default class IdiomService {

  idiomSelect = new EventEmitter<Idiom>();

  // private idioms: Idiom[] = [
  //   new Idiom("1", "hola", "saludos", ["xin chao"], 5),
  //   new Idiom("2", "adios", "despedidos", ["tam biet", "hen gap lai"], 5),
  // ]

  private idioms: Idiom[] = [];

  constructor(
    private http: HttpClient,
  ) {

  }

  getIdioms() {
    this.fetchIdioms();
    return this.idioms;
  }

  fetchIdioms() {
    this.http.get<{ [key: string]: Idiom }>(idiomUrl + jsonSuffix)
      .pipe(
        map(res => {
          const idioms: Idiom[] = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              idioms.push({...res[key], id: key})
            }
          }
          return idioms;
        }),
        catchError(errorRes => {
          console.error(errorRes);
          return [];
        })
      ).subscribe(
      res => {
        this.idioms = res;
      }
    )
    ;
  }

  setIdioms(idioms: Idiom[]) {
    this.idioms = idioms;
  }

  getIdiom(id: string): Idiom | undefined {
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
        this.updateIdiom(idiom);
        return;
      }
    }
    this.addIdiom(idiom);
  }

  addIdiom(idiom: Idiom) {
    this.http.post<{ name: string }>(idiomUrl + jsonSuffix, idiom)
      .subscribe(res => console.log(res));
  }

  updateIdiom(idiom: Idiom) {
    this.http.put(idiomUrl + '/' + idiom.id + jsonSuffix, idiom)
      .subscribe(res => console.log(res));
  }

}
