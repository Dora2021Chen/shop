import { GlobalService } from './../../service/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public globalService: GlobalService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.globalService.clearLoginUser();
  }
}
