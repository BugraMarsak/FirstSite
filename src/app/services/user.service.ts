import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Race } from '../models/race';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})//
export class UserService {

  apiUrl = 'https://localhost:44364/api/';

  constructor(private httpClient: HttpClient) { } 

  getuserById(UserId:number):Observable<SingleResponseModel<User>> {
    let newPath=this.apiUrl+"User/getbyid?userId="+UserId
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }

}