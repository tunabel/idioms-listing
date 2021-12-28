import {Component, OnInit} from '@angular/core';
import {Idiom} from "../idiom.model";

@Component({
  selector: 'app-idiom-list',
  templateUrl: './idiom-list.component.html',
  styleUrls: ['./idiom-list.component.css']
})
export class IdiomListComponent implements OnInit {
  idioms: Idiom[] = [
    new Idiom("1", "hola", "saludos", ["xin chao"], 5),
    new Idiom("2", "adios", "despedidos", ["tam biet", "hen gap lai"], 5),
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
