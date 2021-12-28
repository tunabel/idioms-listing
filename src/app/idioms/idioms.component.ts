import {Component, OnInit} from '@angular/core';
import IdiomService from "../services/idiom.service";

@Component({
  selector: 'app-idioms',
  templateUrl: './idioms.component.html',
  styleUrls: ['./idioms.component.css'],
  providers: [IdiomService]
})
export class IdiomsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
