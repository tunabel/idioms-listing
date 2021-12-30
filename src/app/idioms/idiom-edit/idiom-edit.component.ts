import {Component, OnInit} from '@angular/core';
import IdiomService from "../../services/idiom.service";
import {ActivatedRoute, Params, Router, UrlTree} from "@angular/router";
import {Idiom} from "../idiom.model";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-idiom-edit',
  templateUrl: './idiom-edit.component.html',
  styleUrls: ['./idiom-edit.component.css']
})
export class IdiomEditComponent implements OnInit {
  editForm!: FormGroup;
  idiom!: Idiom;
  id: string | undefined;
  vietPhraseArray: FormArray = new FormArray([]);
  isAddNew = false;
  changesSaved = false;

  constructor(
    private idiomService: IdiomService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        if (this.id == null) {
          this.idiom = new Idiom('', '', '', [], 0);
          this.isAddNew = true;
        } else {
          this.idiom = this.idiomService.getIdiom(this.id)!;
        }
        let vietPhrases = this.idiom.vietPhrase.map(
          phrase => phrase === undefined ? new FormControl('') : new FormControl(phrase)
        );
        this.editForm = new FormGroup({
          'espPhrase': new FormControl(this.idiom?.espPhrase),
          'espMeaning': new FormControl(this.idiom?.espMeaning),
          'ratings': new FormControl(this.idiom?.ratings),
          'vietPhrases': new FormArray(vietPhrases!)
        });
        this.vietPhraseArray = (<FormArray>this.editForm.get('vietPhrases'));
      }
    )
  }

  addMoreVietPhrase() {
    const control = new FormControl(null);
    this.vietPhraseArray.push(control);
  }

  submitEditForm() {
    this.idiom.ratings = this.editForm.get('ratings')?.value;
    this.idiom.espMeaning = this.editForm.get('espMeaning')?.value;
    this.idiom.espPhrase = this.editForm.get('espPhrase')?.value;
    this.idiom.vietPhrase = this.vietPhraseArray.controls.map(
      control => control.value
    );

    console.log(this.idiom);
    this.idiomService.saveIdiom(this.idiom);
    this.changesSaved = true;
    if (this.isAddNew) {
      this.editForm.reset();
    }
  }

  canDeactivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.editForm.dirty && !this.changesSaved) {
      return confirm('Do you want to discard changes?');
    } else {
      return true;
    }
  }
}
