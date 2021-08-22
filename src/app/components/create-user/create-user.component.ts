import { GlobalService } from './../../service/global.service';
import { UserService } from 'src/app/service/user.service';
import { UserData } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { ResponseRow } from 'src/app/model/responseRow';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userData: UserData | null = null;
  hint: string | null = null;
  responseRow: ResponseRow | null = null;

  firstName: string = "";
  lastName: string = "";
  username: string = "";
  password: string = "";
  password1: string = "";
  phone: string = "";
  email: string = "";
  id?: number | null;

  constructor(private userService: UserService,
    private globalService: GlobalService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id); // Print the parameter to the console. 
    });

    if (this.id != null) {

    }
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
    this.responseRow = await this.userService.saveUser(this.userData);
    this.hint = this.responseRow.statusCode + ":" + this.responseRow.statusMsg;
  }


}
