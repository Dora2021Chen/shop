import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { UserData } from 'src/app/service/user';
import { ResponseRows } from 'src/app/service/responseRows';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
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
