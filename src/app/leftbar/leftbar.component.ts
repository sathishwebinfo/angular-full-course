import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss']
})

export class LeftbarComponent implements OnInit {
  
  @Input() fromParent!: string;

  constructor() { }

  ngOnInit() {
  }

}
