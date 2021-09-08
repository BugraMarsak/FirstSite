import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Race } from '../models/race';
import { ListResponseModel } from '../models/listResponseModel';
import { Article } from '../models/article';
import { SingleResponseModel } from '../models/singleResponseModel';



@Injectable({
  providedIn: 'root'
})//
export class ArticleService {

  apiUrl = 'https://localhost:44364/api/';

  constructor(private httpClient: HttpClient) { } 

  getArticle():Observable<ListResponseModel<Article>> {
    let newPath=this.apiUrl+"Article/getall";
    return this.httpClient.get<ListResponseModel<Article>>(newPath);
  }

  getByArticleId(articleId:number):Observable<SingleResponseModel<Article>>{
    console.log("bu articleId"+articleId)
    let newPath=this.apiUrl+"Article/getbyarticleid?articleId="+articleId;
    return this.httpClient.get<SingleResponseModel<Article>>(newPath);
  }

}