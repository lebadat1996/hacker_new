import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-luyen-tap',
  templateUrl: './luyen-tap.component.html',
  styleUrls: ['./luyen-tap.component.css']
})
export class LuyenTapComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  student = {
    firstName: `le ba`,
    lastName: `dat`,
    address: `hung yen`,
    phone: `090909`
  };


  title: `Student`;

  constructor() {
  }

  // tslint:disable-next-line:typedef
  onChangeFirstName(firstName) {
    this.student.firstName = firstName;
  }

  // tslint:disable-next-line:typedef
  onChangeLastName(lastName) {
    this.student.lastName = lastName;
  }

  // tslint:disable-next-line:typedef
  onChangeAddress(address) {
    this.student.address = address;
  }

  // tslint:disable-next-line:typedef
  onChangePhone(phone) {
    this.student.phone = phone;
  }

  ngOnInit(): void {
  }

}
