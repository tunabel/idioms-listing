import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./services/auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthAddEditIdiomGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.route);
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      alert("user not logged in");
    }
    return false;
  }
}
