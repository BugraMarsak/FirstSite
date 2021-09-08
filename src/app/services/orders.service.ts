import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Order } from '../models/order';
import { ResponseModel } from '../models/responseModel';



@Injectable({
  providedIn: 'root'
})//
export class OrderService {

  apiUrl = 'https://localhost:44364/api/';

  constructor(private httpClient: HttpClient) { } 

  getOrdersByUserId(userId:number):Observable<ListResponseModel<Order>> {
    let newPath=this.apiUrl+"Order/GetOrdersByUserId?userId="+userId
    return this.httpClient.get<ListResponseModel<Order>>(newPath);
  }

  add(order:Order):Observable<ResponseModel>{  
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Order/add",order);
  }
  update(order:Order):Observable<ResponseModel>{  
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Order/update",order);
  }
  delete(order:Order):Observable<ResponseModel>{  
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Order/delete",order);
  }

}