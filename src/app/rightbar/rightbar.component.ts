import { Component, OnInit} from '@angular/core';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.scss']
})
export class RightbarComponent implements OnInit{
  posts: Array<any>;
  constructor(private postService: PostService){
    // let postService = new PostService();
    this.posts = postService.postList;
  }
  ngOnInit(): void {
    
  }
}
