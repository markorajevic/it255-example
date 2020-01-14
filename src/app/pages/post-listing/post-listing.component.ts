import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.scss']
})
export class PostListingComponent implements OnInit {

  public posts: Post[] = [];
  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._getPosts();
  }

  private _getPosts() {
    this._postService.getPosts().subscribe((res) => {
      this.posts = res;
    })
  }

}
