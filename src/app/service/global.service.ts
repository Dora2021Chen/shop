import { UserData } from '../model/user';
import { Injectable } from '@angular/core';

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
}
