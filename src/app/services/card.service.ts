import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { ListResponseModel } from '../models/listResponseModel';

import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})//
export class CardService {

  apiUrl = 'https://localhost:44364/api/';

  constructor(private httpClient: HttpClient) { } //import { HttpClient } from '@angular/common/http'; lazım olan importu

  getCards():Observable<ListResponseModel<Card>> {
    let newPath=this.apiUrl+"cards/getall"//let bir fonksiyon için de dğeişken tanımlamak için yapmamız gerekn şey
    return this.httpClient.get<ListResponseModel<Card>>(newPath);
  }
  getCardsByCardType(cardTypeId:number):Observable<ListResponseModel<Card>> {
    let newPath=this.apiUrl+"Cards/getsbycardtype?cardTypeId="+cardTypeId
    return this.httpClient.get<ListResponseModel<Card>>(newPath);
  }
  getCardsByCardName(cardName:string):Observable<ListResponseModel<Card>> {
    let newPath=this.apiUrl+"Cards/getsbycardtype?cardName="+cardName
    return this.httpClient.get<ListResponseModel<Card>>(newPath);
  }
  add(card:Card):Observable<ResponseModel>{  
    return this.httpClient.post<ResponseModel>(this.apiUrl+"card/add",card);
  }
}