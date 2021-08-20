import { Component, OnInit } from '@angular/core';
import { Good } from 'src/app/model/Good';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  goods = [
    new Good(1, 'apple'),
    new Good(2, 'banana'),
    new Good(3, 'tomato'),
    new Good(4, 'strawberry'),
    new Good(5, 'blueberry')
  ];

  colNumber: number = 3;

  goodsMatrix: number[][] = [];
  constructor() { }

  ngOnInit(): void {
    const rowNumber = Math.ceil(this.goods.length / this.colNumber);
    for (let row = 0; row < rowNumber; row++) {
      var rows: number[] = [];
      for (let col = 0; col < this.colNumber; col++) {
        var index = row * this.colNumber + col;
        if (index < this.goods.length) {
          rows.push(index);
        }
      }
      this.goodsMatrix.push(rows)
    }
  }
}
