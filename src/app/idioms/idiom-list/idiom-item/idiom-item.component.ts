import {Component, Input, OnInit} from '@angular/core';
import {Idiom} from "../../idiom.model";

@Component({
  selector: 'app-idiom-item',
  templateUrl: './idiom-item.component.html',
  styleUrls: ['./idiom-item.component.css']
})
export class IdiomItemComponent implements OnInit {
  @Input() idiom: Idiom | undefined;
  @Input() index: number | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
