import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Post } from '../models/post';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _httpClient: HttpClient) { 
  }

  private _getHeaders() {
    let headers =  new HttpHeaders();
    headers = headers.set('authorization', 'ovde_ide_token');
    headers = headers.set('novi_header', 'novi_header');
    return headers;
  }
  public getPosts() : Observable<Post[]> {
    return this._httpClient.get(this.baseUrl, {headers: this._getHeaders()}).pipe(
      map((data: any[]) => data.map((item: any) =>
      this._createPostFromObject(item))),
    );
  }

  public getPost(id: number) : Observable<Post> {
    return this._httpClient.get(this.baseUrl + '/' + id).pipe(
      map((data: any) => this._createPostFromObject(data)),
    );
  }

  public deletePost(id: number) : Observable<Post> {
    return this._httpClient.delete(this.baseUrl + '/' + id).pipe(
      map((data: any) => this._createPostFromObject(data)),
    );
  }

  public createPost(post: Post) : Observable<Post> {
    return this._httpClient.post(this.baseUrl, post, {headers: this._getHeaders()}).pipe(
      map((data: any) => this._createPostFromObject(data)),
    );
  }

  private _createPostFromObject(item:any) {
    return new Post(item.userId, item.title, item.body, item.id);
  }
}
