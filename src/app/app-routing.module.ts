import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {IdiomListComponent} from "./idioms/idiom-list/idiom-list.component";
import {IdiomDetailComponent} from "./idioms/idiom-detail/idiom-detail.component";
import {IdiomEditComponent} from "./idioms/idiom-edit/idiom-edit.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {IdiomsComponent} from "./idioms/idioms.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'idioms', component: IdiomsComponent, children: [
      {path: '', component: IdiomListComponent},
      {path: 'add', component: IdiomEditComponent},
      {path: ':id', component: IdiomDetailComponent},
      {path: ':id/edit', component: IdiomEditComponent}
    ]
  },
  {path: 'about-us', component: AboutUsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
