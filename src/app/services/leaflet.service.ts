import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { Leaflet } from '../models/Leaflet';
import { ListResponseModel } from '../models/listResponseModel';

import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})//
export class LeafletService {

  
  apiUrl = 'https://localhost:44364/api/';

  constructor(private httpClient: HttpClient) { } //import { HttpClient } from '@angular/common/http'; lazım olan importu

  getLeaflet():Observable<ListResponseModel<Leaflet>> {
    let newPath=this.apiUrl+"leaflet/getall"//let bir fonksiyon için de dğeişken tanımlamak için yapmamız gerekn şey
    return this.httpClient.get<ListResponseModel<Leaflet>>(newPath);
  }

  getLeafletById(LeafletId:number):Observable<ListResponseModel<Leaflet>> {
    let newPath=this.apiUrl+"Leaflet/getbyleafletid?leafletId="+LeafletId
    return this.httpClient.get<ListResponseModel<Leaflet>>(newPath);
  }
 
  add(leaflet:Leaflet):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"leaflet/add",leaflet);
  }

  delete(leaflet:Leaflet):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"leaflet/delete",leaflet);
  }

  update(leaflet:Leaflet):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"leaflet/update",leaflet);
  }

}