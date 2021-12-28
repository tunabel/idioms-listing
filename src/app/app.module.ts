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
    IdiomItemComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
