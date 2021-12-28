import {Component, Input, OnInit} from '@angular/core';
import {Idiom} from "../../idiom.model";
import IdiomService from "../../../services/idiom.service";

@Component({
  selector: 'app-idiom-item',
  templateUrl: './idiom-item.component.html',
  styleUrls: ['./idiom-item.component.css']
})
export class IdiomItemComponent implements OnInit {
  @Input() idiom: Idiom | undefined;
  @Input() index: number | undefined;

  constructor(
    private idiomService: IdiomService
  ) {
  }

  ngOnInit(): void {
  }

  selectIdiom(idiom: Idiom | undefined) {
    this.idiomService.idiomSelect.emit(idiom);
  }
}
