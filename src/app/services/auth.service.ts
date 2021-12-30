export class AuthService {
  constructor() {
  }

  private _isLoggedIn = false;

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  logIn() {
    this._isLoggedIn = true;
  }

  logOut() {
    this._isLoggedIn = false;
  }
}
