import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  mycomments:string;
  constructor() { }

  ngOnInit() {
  }
 
  showcomments(comments){
   this.mycomments=comments;
   this.mycomments.toLocaleLowerCase();
  }
}
