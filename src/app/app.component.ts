import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostTimelineComponent } from './post-timeline/post-timeline.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-full-course';
  parentMessage: string = "Message Changed";
  message : string;
  test : boolean;

  @ViewChild(PostTimelineComponent) postChild : string;

  constructor() {

  }

  ngAfterViewInit() {
    // console.log(this.postChild);
    this.message = this.postChild;
  }

}
