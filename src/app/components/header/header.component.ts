import { GlobalService } from './../../service/global.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public globalService: GlobalService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.globalService.clearLoginUser();
    this.router.navigate(['']);
  }
}
