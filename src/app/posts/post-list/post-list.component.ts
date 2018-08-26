import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
//     posts = [
//         {title: '1' , content: 'Barry'},
//         {title: '2' , content: 'Jennifer'},
//         {title: '3' , content: 'David'},
// ];

   @Input() posts = [];
}
