import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {IdiomsComponent} from './idioms/idioms.component';
import {IdiomListComponent} from './idioms/idiom-list/idiom-list.component';
import {IdiomDetailComponent} from './idioms/idiom-detail/idiom-detail.component';
import {IdiomDailyComponent} from './home/idiom-daily/idiom-daily.component';
import {IdiomSearchComponent} from './home/idiom-search/idiom-search.component';
import {IdiomItemComponent} from './idioms/idiom-list/idiom-item/idiom-item.component';
import {IdiomEditComponent} from './idioms/idiom-edit/idiom-edit.component';
import {AppRoutingModule} from "./app-routing.module";
import {AboutUsComponent} from './about-us/about-us.component';
import IdiomService from "./services/idiom.service";
import {NotFoundComponent} from './not-found/not-found.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    IdiomsComponent,
    IdiomListComponent,
    IdiomDetailComponent,
    IdiomDailyComponent,
    IdiomSearchComponent,
    IdiomItemComponent,
    IdiomEditComponent,
    AboutUsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [IdiomService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
