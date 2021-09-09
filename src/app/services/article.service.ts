import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Race } from '../models/race';
import { ListResponseModel } from '../models/listResponseModel';
import { Article } from '../models/article';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ResponseModel } from '../models/responseModel';



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
    
    let newPath=this.apiUrl+"Article/getbyarticleid?articleId="+articleId;
    return this.httpClient.get<SingleResponseModel<Article>>(newPath);
  }

  

  add(article:Article):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"article/add",article);
  }

}