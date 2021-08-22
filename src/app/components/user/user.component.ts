import { GlobalService } from './../../service/global.service';
import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/model/user';
import { ResponseRow } from 'src/app/model/responseRow';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  responseRow!: ResponseRow;
  userData: UserData | null = null;
  hint: string | null = null;

  constructor(private userService: UserService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.userData = this.globalService.getLoginUser();
  }

  async modify(): Promise<void> {
    if (this.userData != null) {
      this.responseRow = await this.userService.saveUser(this.userData);
      this.hint = this.responseRow.statusCode + ":" + this.responseRow.statusMsg;
    } else {
      this.hint = "No user to be modified.";
    }
  }
}
