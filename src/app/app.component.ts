import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'it255-v09';
  public postForm: FormGroup;
  public posts: Post[] = [];
  constructor(private _postService: PostService) {
    
  }
  ngOnInit() {
    this.initForm();
    this._postService.getPosts().subscribe((res: any) => {
      this.posts = res;
    })
  }

  public initForm() {
    this.postForm = new FormGroup({
      title: new FormControl('', [
      Validators.required
      ]),
      userId: new FormControl(1, [
      Validators.required
      ]),
      body: new FormControl('', [
      Validators.required
      ])
    });
  }

  public submitForm() {
    let title = this.postForm.get('title').value;
    let userId = this.postForm.get('userId').value;
    let body = this.postForm.get('body').value;
    let post = new Post(userId, title,body, 0);
    this.createPost(post)
  }

  public getPost(id: number) {
    this._postService.getPost(id).subscribe((data) => {
      alert(JSON.stringify(data));
    })
  }
  public createPost(post: Post) {
    this._postService.createPost(post).subscribe((data) => {
      this.posts.unshift(data);
    })
  }

  public deletePost(id: number) {
    this._postService.deletePost(id).subscribe((data) => {
    this._removePostFromList(id);
    alert("Post je obrisan sa servera");
    })
  }
  private _removePostFromList(id: number) {
    let ind = this.posts.findIndex(post => post.id == id);
    this.posts.splice(ind, 1);
  }

}
