import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Element } from '../models/element'; 
import { ListResponseModel } from '../models/listResponseModel';



@Injectable({
  providedIn: 'root'
})//
export class ElementService {

  apiUrl = 'https://localhost:44364/api/Element/getall';

  constructor(private httpClient: HttpClient) { } 

  getElement():Observable<ListResponseModel<Element>> {
    return this.httpClient.get<ListResponseModel<Element>>(this.apiUrl);
  }

}