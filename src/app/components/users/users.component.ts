import { Component, OnInit } from '@angular/core';
import { ResponseRows } from 'src/app/service/responseRows';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  responseRows: ResponseRows = new ResponseRows;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
    console.log(this.responseRows);
  }

  getUsers() {
    this.userService.getUsers().subscribe((data: ResponseRows) => {
      this.responseRows = data;
    })
  }
}
