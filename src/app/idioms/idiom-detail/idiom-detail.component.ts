import {Component, Input, OnInit} from '@angular/core';
import {Idiom} from "../idiom.model";
import IdiomService from "../../services/idiom.service";

@Component({
  selector: 'app-idiom-detail',
  templateUrl: './idiom-detail.component.html',
  styleUrls: ['./idiom-detail.component.css']
})
export class IdiomDetailComponent implements OnInit {
  @Input() idiom: Idiom | undefined;

  constructor(
    private idiomService: IdiomService
  ) {
  }

  ngOnInit(): void {
    this.idiomService.idiomSelect.subscribe(
      (idiom: Idiom) => {
        this.idiom = idiom;
      }
    )
  }

}
