import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Race } from '../models/race';
import { ListResponseModel } from '../models/listResponseModel';



@Injectable({
  providedIn: 'root'
})//
export class RaceService {

  apiUrl = 'https://localhost:44364/api/Race/getall';

  constructor(private httpClient: HttpClient) { } 

  getRace():Observable<ListResponseModel<Race>> {
    return this.httpClient.get<ListResponseModel<Race>>(this.apiUrl);
  }

}