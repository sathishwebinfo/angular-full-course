import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-timeline',
  templateUrl: './post-timeline.component.html',
  styleUrls: ['./post-timeline.component.scss']
})

export class PostTimelineComponent implements OnInit {
  
timelinePost : string ="Message from timelinepost";
childpost : string = "message from child";
  constructor() { }

  ngOnInit() {
  }

}