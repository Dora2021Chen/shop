import { GlobalService } from './../../service/global.service';
import { UserService } from 'src/app/service/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { ResponseRow } from 'src/app/model/responseRow';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  responseRow: ResponseRow | undefined;

  username: string = "";
  password: string = "";
  error: string | null = "";

  constructor(private userService: UserService,
    private globalService: GlobalService) { }

  ngOnInit(): void {
    this.error = null;
  }

  async login(): Promise<void> {
    if (this.username == null || this.username.length == 0) {
      this.error = "please input username.";
      return;
    }

    if (this.password == null || this.password.length == 0) {
      this.error = "please input password.";
      return;
    }
    this.error = null;
    //console.log("username:" + this.username + " password:" + this.password);
    this.responseRow = await this.userService.login(this.username, this.password);

    if (this.responseRow.statusCode == 0) {
      this.globalService.setLoginUser(this.responseRow.entity);
      //console.log('login succeeded');
    } else {
      this.globalService.clearLoginUser();
      this.error = this.responseRow.statusCode + ":" + this.responseRow.statusMsg;
      //console.log('login failed');
    }
  }
}
