import { Injectable } from '@angular/core';
import { UserData } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private loginUser?: UserData;

  constructor() { }

  public hasLogin(): boolean {
    if (this.loginUser == null) {
      return true;
    }
    return false;
  }

  public getDisplayName(): string | null {
    if (this.loginUser != null)
      return this.loginUser.firstName.substring(1, 2) + this.loginUser.lastName?.substring(1, 2);
    return "N/A";
  }

  public getLoginUser(): UserData | null {
    console.log(this.loginUser);
    if (this.loginUser != null)
      return this.loginUser;

    return null;
  }

  public setLoginUser(loginUser: UserData) {
    this.loginUser = loginUser;
  }

  public clearLoginUser() {
    this.loginUser = new UserData();
  }
}
