import { Injectable } from '@angular/core';
import { UserData } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private loginUser: UserData | null = null;

  constructor() { }

  public hasLogin(): boolean {
    if (this.loginUser == null) {
      return false;
    }
    return true;
  }

  public getDisplayName(): string | null {
    if (this.loginUser != null)
      return this.loginUser.firstName.substring(0, 1) + this.loginUser.lastName?.substring(0, 1);
    return "N/A";
  }

  public getLoginUser(): UserData | null {
    return this.loginUser;
  }

  public setLoginUser(loginUser: UserData) {
    this.loginUser = loginUser;
  }

  public clearLoginUser() {
    this.loginUser = null;
  }
}
