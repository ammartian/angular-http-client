import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-http-client';

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts!: Observable<any>;

  constructor(private http: HttpClient) {}

  getPosts() {
    let params = new HttpParams().set('userId', '1');
    let headers = new HttpHeaders().set('Authorization', 'auth-token');

    this.posts = this.http.get(this.ROOT_URL + '/posts', { params, headers })
  }

}
