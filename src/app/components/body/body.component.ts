import { Component, OnInit } from '@angular/core';
import { Good } from 'src/app/Good';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  goods = [
    new Good(1, '菜鸟教程'),
    new Good(2, 'Google'),
    new Good(3, 'Taobao'),
    new Good(4, 'Facebook')
  ];

  colNumber: number = 3;

  rows: number[] = [];
  cols: number[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.colNumber; i++) {
      this.cols.push(i);
    }

    for (let i = 0; i < Math.ceil(this.goods.length / this.colNumber); i++) {
      this.rows.push(i);
    }
  }

}
