import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.scss']
})
export class TaskOneComponent implements OnInit{
  postTitle:string;
  postDetails: string;
  postImgURL:string;
  postURL:string;
  addBackground:boolean;
constructor(){

}
ngOnInit(): void {
  
}
}
