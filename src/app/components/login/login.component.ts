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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  async login(): Promise<void> {
    console.log('hello world, now login...');
    this.responseRow = await this.userService.login();

    console.log("statusCode" + this.responseRow?.statusCode);
    console.log("statusMsg" + this.responseRow?.statusMsg);
    console.log("entity" + this.responseRow?.entity);
  }
}
