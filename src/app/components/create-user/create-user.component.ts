import { GlobalService } from './../../service/global.service';
import { UserService } from 'src/app/service/user.service';
import { UserData } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { ResponseRow } from 'src/app/model/responseRow';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userData: UserData | null = null;
  error: string | null = null;
  responseRow: ResponseRow | null = null;

  firstName: string = "";
  lastName: string = "";
  username: string = "";
  password: string = "";
  password1: string = "";
  phone: string = "";
  email: string = "";

  constructor(private userService: UserService,
    private globalService: GlobalService) { }

  ngOnInit(): void {
  }

  async createUser(): Promise<void> {
    this.userData = new UserData(
      this.firstName,
      this.lastName,
      this.username,
      this.password,
      this.phone,
      this.email
    );
    console.log('hello')
    this.responseRow = await this.userService.createUser(this.userData);

    if (this.responseRow.statusCode == 0) {
      this.globalService.setLoginUser(this.responseRow.entity);
      this.error = null;
    } else {
      this.error = this.responseRow.statusCode + ":" + this.responseRow.statusMsg;
    }
  }
}