import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { RightbarComponent } from './rightbar/rightbar.component';
import { PostTimelineComponent } from './post-timeline/post-timeline.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormsModule } from '@angular/forms';
import { TaskOneComponent } from './task-one/task-one.component';
import { AngularDirectiveComponent } from './angular-directive/angular-directive.component';
import { TaskTwoComponent } from './task-two/task-two.component';
import { AngularPipeComponent } from './angular-pipe/angular-pipe.component';
import { AppendPipe } from './pipes/append.pipe';
import { AppendCLIPipe } from './pipes/append-cli.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { AngularServicesComponent } from './angular-services/angular-services.component';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    LeftbarComponent,
    RightbarComponent,
    PostTimelineComponent,
    PostListComponent,
    TaskOneComponent,
    AngularDirectiveComponent,
    TaskTwoComponent,
    AngularPipeComponent,
    AppendPipe,
    AppendCLIPipe,
    SummaryPipe,
    AngularServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
