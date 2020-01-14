import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  public form: FormGroup;
  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._initForm();
  }

  private _initForm() {
    this.form = new FormGroup({
      title: new FormControl('', [
      Validators.required
      ]),
      userId: new FormControl(1, [
        Validators.required
      ]),
      body: new FormControl('', [
        Validators.required
      ])
    })
  }

  public submitForm() {
    let post = new Post(this.form.get('userId').value, this.form.get('title').value, this.form.get('body').value);
    this._postService.createPost(post).subscribe((res) => {
      alert('Post kreiran');
    })
    console.log('thissss', this.form.value);
  }
}
