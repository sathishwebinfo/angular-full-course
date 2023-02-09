import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';
@Component({
  selector: 'app-angular-services',
  templateUrl: './angular-services.component.html',
  styleUrls: ['./angular-services.component.scss']
})
export class AngularServicesComponent implements OnInit {
  
  posts : Array<any>;
  
  constructor(private postService: PostService) {
    // let postService = new PostService();
    this.posts = postService.postList;
  }
  ngOnInit(): void {

  }
  addNew(){
    let newPost :Post = {
      id:1, 
      postTitle: "Post 7"
    }
    this.postService.addPost(newPost);
  }
}
