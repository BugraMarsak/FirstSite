import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardType } from '../models/cardType';
import { ListResponseModel } from '../models/listResponseModel';



@Injectable({
  providedIn: 'root'
})//
export class CardTypeService {

  apiUrl = 'https://localhost:44364/api/cardType/getall';

  constructor(private httpClient: HttpClient) { } 

  getCardType():Observable<ListResponseModel<CardType>> {
    return this.httpClient.get<ListResponseModel<CardType>>(this.apiUrl);
  }

}
