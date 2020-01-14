import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  id: number = null;
  post: Post = null;
  fetchDone: boolean = false;
  constructor(private _route: ActivatedRoute, private _postService: PostService) { }

  ngOnInit() {
    this._route.params.subscribe((res => {
      this.id = parseInt(res['id']);
      this._getPost(this.id);
    }))
  }

  private _getPost(id) {
    this._postService.getPost(id).subscribe((res: Post) => {
      this.post = res;
      this.fetchDone = true;
    }, err => {
      this.post = null;
      this.fetchDone = true;

    }, () => {
      console.log('complete se izvrsio');
    })
  }

}
