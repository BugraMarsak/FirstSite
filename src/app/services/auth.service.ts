import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModule } from '../models/LoginModule';
import { RegisterModule } from '../models/registerModule';
import { SingleResponseModel } from '../models/singleResponseModel';

import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:44364/api/';

  constructor(private httpClient:HttpClient) { }

  login(loginModule:LoginModule){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"auth/login",loginModule)
  }

  register(registerModule:RegisterModule){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"auth/register",registerModule)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }

}
