import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit, OnDestroy {
  @ViewChild('postForm') frm!: NgForm;
  loadedPosts: Post[] = [];
  loading = false;
  err: string = '';
  private errSub!: Subscription;
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.errSub = this.postsService.err.subscribe((error) => {
      this.err =
        'Message: ' +
        error.message +
        '<br/><br/> Error Object: ' +
        JSON.stringify(error.error);
    });
    this.fetchPosts();
  }

  onSendPost(postData: Post) {
    this.postsService.sendPost(postData);
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  private fetchPosts() {
    this.loading = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.loadedPosts = posts;
        this.loading = false;
        console.log(posts);
      },
      (error) => {
        this.loading = false;
        this.err =
          'Message: ' +
          error.message +
          '<br/><br/> Error Object: ' +
          JSON.stringify(error.error);
      }
    );
    this.postsService.fetchPosts1();
  }

  ngOnDestroy(): void {
    this.errSub.unsubscribe();
  }

  onHandleError() {
    this.err = '';
  }
}
