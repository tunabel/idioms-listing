import {Component, OnInit} from '@angular/core';
import {Idiom} from "../idiom.model";
import IdiomService from "../../services/idiom.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-idiom-detail',
  templateUrl: './idiom-detail.component.html',
  styleUrls: ['./idiom-detail.component.css']
})
export class IdiomDetailComponent implements OnInit {
  idiom: Idiom | undefined;
  id: string | undefined;

  constructor(
    private idiomService: IdiomService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        this.id = params['id'];
        this.idiom = this.idiomService.getIdiom(this.id);
      });

    if (this.idiom == undefined) {
      alert("no idiom found. redirecting..");
      this.router.navigate(['/idioms']);
    }
  }

  editIdiom() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
}
