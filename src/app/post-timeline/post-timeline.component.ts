import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-timeline',
  templateUrl: './post-timeline.component.html',
  styleUrls: ['./post-timeline.component.scss']
})

export class PostTimelineComponent implements OnInit {

  messageTlComp: string = "Message coming from PostTimelineComponent";
  childTlcomp: string = "Message coming from Child PostTimelineComponent";
  outputTLcomp: string = "Message coming from Child PostTimelineComponent Via Output";

  @Input() fromAppParentCom: string;

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }
  sendMessage() {
    this.messageEvent.emit(this.outputTLcomp);

  }
}