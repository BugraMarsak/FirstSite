import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Leaflet } from 'src/app/models/Leaflet';
import { Order } from 'src/app/models/order';
import { LeafletService } from 'src/app/services/leaflet.service';
import { OrderService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private orderService:OrderService,private toasterService:ToastrService,private formBuilder:FormBuilder, private toastrService:ToastrService,private leafletService:LeafletService) { }
  orders:Order[]=[];
  dataLoad:boolean=true;
  addOrderForm:FormGroup;
  totalPrice:number=0;
  leaflet:Leaflet[]=[];

  ngOnInit(): void {
    this.getOrdersByUserId();
  } 

  getOrdersByUserId(){
    let userId = +localStorage.getItem("userId")
    this.orderService.getOrdersByUserId(userId).subscribe(response=>{
      this.orders = response.data;
      console.log(response.data.length)
      if (response.data.length>=1){
        this.dataLoad =false
      }else{
        this.dataLoad =true;
      }
      this.updateTotalPrice()

    });
    
  }
  updateNegativeNumber(order:Order){
    if(order.number>0){
      order.number-=1;
      this.createUpdateForm(order);
    }
    else{
      this.createDeleteForm(order)
      window.location.reload();
    }
    this.updateTotalPrice()
  }

  updatePositeveNumber(order:Order){
    this.checkSomething(order);
  }

  updateTotalPrice(){
    this.totalPrice =0;
    for(let i =0;this.orders.length>i;i++){
    this.totalPrice += this.orders[i].number * this.orders[i].price
    }

  }
  createUpdateForm(order:Order){
    this.addOrderForm= this.formBuilder.group({
      orderId:[order.orderId,Validators.required],
      leafletId:[order.leafletId,Validators.required],
      userId:[order.userId,Validators.required],
      price:[order.price,Validators.required],
      number:[order.number,Validators.required],
      cardName:[order.cardName,Validators.required],
      active:[true,Validators.required],
    })


    let orderModel=Object.assign({},this.addOrderForm.value);
    this.orderService.update(orderModel).subscribe(response =>{
      this.toastrService.success(response.message,"Güncellendi")
    })
    
  }

  createDeleteForm(order:Order){
    this.addOrderForm= this.formBuilder.group({
      orderId:[order.orderId,Validators.required],
      leafletId:[order.leafletId,Validators.required],
      userId:[order.userId,Validators.required],
      price:[order.price,Validators.required],
      number:[order.number,Validators.required],
      cardName:[order.cardName,Validators.required],
      active:[true,Validators.required],
    })
    let orderModel=Object.assign({},this.addOrderForm.value);
    this.orderService.delete(orderModel).subscribe(response =>{
      this.toastrService.success(response.message,"silindi")
    })
    
  }

  

  
  checkSomething(order:Order){
    this.leafletService.getLeafletById(order.leafletId).subscribe(response=>{
      this.leaflet =response.data;
    });
    for(let i=0;this.leaflet.length>i;i++){
      if(this.leaflet[i].leafletId == order.leafletId){
        if(this.leaflet[i].unitInStock>order.number ){
          order.number+=1;
          this.createUpdateForm(order);
          this.updateTotalPrice()
        }
        else if(this.leaflet[i].unitInStock==order.number){
          this.toastrService.error("Stokta olandan fazlasını şeçemezsiniz.")
        }
      }
    }
  }
  loopforOrders(){
    console.log("that worked")
    for(let j=0;this.orders.length>j;j++){
      this.destroyLeafletsAndOrders(this.orders[j]);
    }
  }

  destroyLeafletsAndOrders(order:Order){
    this.leaflet=[];
    this.leafletService.getLeafletById(order.leafletId).subscribe(response=>{
      this.leaflet =response.data;
      if(this.leaflet[0].unitInStock>order.number){
        this.leaflet[0].unitInStock = this.leaflet[0].unitInStock - order.number
        
        this.leafletService.update(this.leaflet[0]).subscribe();
        this.orderDeleteHelper(order);
      }
      else if(this.leaflet[0].unitInStock==order.number){
        this.leafletService.delete(this.leaflet[0]).subscribe();
        this.orderDeleteHelper(order);
      }
      console.log(this.leaflet[0])
    });   
  }

  orderDeleteHelper(order:Order){
    this.orderService.delete(order).subscribe();
  }
}
