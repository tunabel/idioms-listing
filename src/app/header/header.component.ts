import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn = false;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.isUserLoggedIn = this.authService.isLoggedIn;
  }


  logIn() {
    this.authService.logIn();
    this.isUserLoggedIn = this.authService.isLoggedIn;
  }

  logOut() {
    this.authService.logOut();
    this.isUserLoggedIn = this.authService.isLoggedIn;
  }
}
