import { GlobalService } from './../../service/global.service';
import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseRow } from 'src/app/model/responseRow';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  responseRow: ResponseRow | undefined;

  constructor(private userService: UserService,
    private globalService: GlobalService) { }

  ngOnInit(): void {
  }

  async login(): Promise<void> {
    console.log('hello world, now login...');
    this.responseRow = await this.userService.login();

    if (this.responseRow.statusCode == 0) {
      this.globalService.setLoginUser(this.responseRow.entity);
      console.log('login succeeded');
    } else {
      this.globalService.clearLoginUser();
      console.log('login failed');
    }

    console.log("statusCode" + this.responseRow?.statusCode);
    console.log("statusMsg" + this.responseRow?.statusMsg);
    console.log("entity" + this.responseRow?.entity);
  }
}
