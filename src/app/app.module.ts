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

@NgModule({
  declarations: [
    AppComponent,
    LeftbarComponent,
    RightbarComponent,
    PostTimelineComponent,
    PostListComponent,
    TaskOneComponent,
    AngularDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
