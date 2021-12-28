import {Component, OnInit} from '@angular/core';
import {Idiom} from "../idiom.model";
import IdiomService from "../../services/idiom.service";

@Component({
  selector: 'app-idiom-list',
  templateUrl: './idiom-list.component.html',
  styleUrls: ['./idiom-list.component.css']
})
export class IdiomListComponent implements OnInit {
  idioms: Idiom[] | undefined;

  constructor(
    private idiomService: IdiomService
  ) {

  }

  ngOnInit(): void {
    this.idioms = this.idiomService.getIdioms();
  }

}
