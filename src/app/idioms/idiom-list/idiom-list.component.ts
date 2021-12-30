import {Component, OnInit} from '@angular/core';
import {Idiom} from "../idiom.model";
import IdiomService from "../../services/idiom.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-idiom-list',
  templateUrl: './idiom-list.component.html',
  styleUrls: ['./idiom-list.component.css']
})
export class IdiomListComponent implements OnInit {
  idioms: Idiom[] | undefined;

  constructor(
    private idiomService: IdiomService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.idioms = this.idiomService.getIdioms();
  }

  addNewIdiom() {
    this.router.navigate(['add'], {relativeTo: this.route});
  }
}
