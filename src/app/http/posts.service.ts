import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from './post.model';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  err = new Subject<any>();
  constructor(private http: HttpClient) {}

  sendPost(postData: Post) {
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-191de-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          this.err.next(error);
        }
      );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-191de-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({
            'custom-header': 'hello',
            'custom-2': 'hello2',
          }),
          params: searchParams,
        }
      )
      .pipe(
        map((responseData: any) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete(
        'https://ng-complete-guide-191de-default-rtdb.firebaseio.com/posts.json',
        {
          observe: 'events',
        }
      )
      .pipe(
        tap((event) => {
          if (event.type == HttpEventType.Sent) {
            console.log('Request sent!');
            console.log(event);
          }
        })
      );
  }

  fetchPosts1() {
    this.http
      .get(
        'https://ng-complete-guide-191de-default-rtdb.firebaseio.com/posts.json',
        {
          responseType: 'text',
        }
      )
      .subscribe((posts) => {
        console.log(posts);
      });
  }
}
