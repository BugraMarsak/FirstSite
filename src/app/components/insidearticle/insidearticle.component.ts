import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'app-insidearticle',
  templateUrl: './insidearticle.component.html',
  styleUrls: ['./insidearticle.component.css']
})
export class InsidearticleComponent implements OnInit {

  constructor(private articleService:ArticleService, private activatedRoute:ActivatedRoute) { }
  
  article:Article;

  ngOnInit(): void {
    this.dosomething();
  }
  dosomething(){
    this.activatedRoute.params.subscribe(params=>{
      this.getArticle(params["articleId"])
      })
  }

  getArticle(articleId:number){
    this.articleService.getByArticleId(articleId).subscribe(response =>{
      this.article =response.data;
    })
  }

  
  //ngOnInit(): void {
  //this.dosomething();
  //}

//   dosomething(){
    
//     this.activatedRoute.params.subscribe(params =>{
      
//     this.getByLeafletId(params["articleId"]);

      
//   })

//  }


//   getByLeafletId(leafletId:number){
//      this.articleService.getByArticleId(leafletId).subscribe(response =>{
//       console.log(response.data)
//       this.articles = response.data
//     } )
//   }

}
