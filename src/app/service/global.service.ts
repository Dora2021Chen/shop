import { Injectable } from '@angular/core';
import { UserData } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private loginUser!: UserData | null;

  constructor() { }

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
