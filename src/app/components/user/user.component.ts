import { GlobalService } from './../../service/global.service';
import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData: UserData | null = null;

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {

    this.userData=this.globalService.getLoginUser();


  }

}
