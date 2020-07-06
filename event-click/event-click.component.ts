import {Component, OnInit} from '@angular/core';
import get = Reflect.get;

@Component({
  selector: 'app-event-click',
  templateUrl: './event-click.component.html',
  styleUrls: ['./event-click.component.css']
})
export class EventClickComponent implements OnInit {
  title = 'Angular';
  month = ['thang 1', 'thang 2', 'thang 3',
    'thang 4', 'thang 5', 'thang 6',
    'thang 7', 'thang 8', 'thang 9',
    'thang 10', 'thang 11', 'thang 12'
  ];
  // tslint:disable-next-line:variable-name
  is_valiable = true;
  messages: string[];
  message = '';

  constructor() {
  }

  // tslint:disable-next-line:typedef
  updateMessage() {
    this.messages.push(this.message);
    this.message = '';
  }

  // tslint:disable-next-line:typedef
  myClickFunction(event) {
    // tslint:disable-next-line:prefer-for-of

    alert('hien thi thong bao su kien da duoc thuc hien');
  }

  // tslint:disable-next-line:typedef
  changeEvent(event) {

    alert('ban vua thay doi sang thang');
  }

  ngOnInit(): void {
  }

}
