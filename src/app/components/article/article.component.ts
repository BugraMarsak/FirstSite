import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';

import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles:Article[]=[];
  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(){
    this.articleService.getArticle().subscribe(response =>{
      this.articles =response.data;
    })
  }


}
