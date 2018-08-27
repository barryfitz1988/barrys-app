import {Component, OnDestroy, OnInit} from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
//     posts = [
//         {title: '1' , content: 'Barry'},
//         {title: '2' , content: 'Jennifer'},
//         {title: '3' , content: 'David'},
// ];

   posts: Post[] = [];
   private postsSub: Subscription;

   constructor(public postService: PostsService) {

   }

   ngOnInit() {
       this.posts = this.postService.getPosts();
       this.postsSub = this.postService.getPostUpdateListener()
           .subscribe((posts: Post[]) => {
               this.posts = posts;
           });
   }

   ngOnDestroy() {
       this.postsSub.unsubscribe();

   }
}
