import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  firstName: string = "";
  lastName: string = "";
  username: string = "";
  password: string = "";
  password1: string = "";
  phone: string = "";
  email: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  createUser(): void {

  }
}
