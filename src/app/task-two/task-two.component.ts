import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.scss']
})
export class TaskTwoComponent implements OnInit {
  fName: string;
  Email: string;
  Address: string;
  userArray: Array<any> = [];
  constructor() {

  }
  ngOnInit(): void {

  }
  onSubmit() {
    this.userArray.push({
      "Name":this.fName,
      "Email":this.Email,
      "Address":this.Address,
    });
  }
  onDelete(index){
    this.userArray.splice(index,1);
  }
}
