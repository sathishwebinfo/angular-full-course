import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-directive',
  templateUrl: './angular-directive.component.html',
  styleUrls: ['./angular-directive.component.scss']
})
export class AngularDirectiveComponent implements OnInit {
  postArray: Array<string> = ['post 1', 'post 2', 'post 3', 'post 4', 'post 5'];
  objArray: Array<any> = [
    { id: 1, postTitle: 'Post 1' },
    { id: 2, postTitle: 'Post 2' },
    { id: 3, postTitle: 'Post 3' },
    { id: 4, postTitle: 'Post 4' },
    { id: 5, postTitle: 'Post 5' },
  ]
  constructor() {
    for (let i = 0; i < this.postArray.length; i++) {
      console.log(this.postArray[i]);

    }
  }
  ngOnInit(): void {

  }
  addNew() {
    this.objArray.push({ id: 6, postTitle: 'post 6' });
  }
  onDelete(index){
    this.objArray.splice(index, 1);
  }
}
