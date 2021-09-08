import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Leaflet } from 'src/app/models/Leaflet';
import { Order } from 'src/app/models/order';
import { LeafletService } from 'src/app/services/leaflet.service';
import { OrderService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-leafletdetail',
  templateUrl: './leafletdetail.component.html',
  styleUrls: ['./leafletdetail.component.css']
})
export class LeafletdetailComponent implements OnInit {

  constructor(private leafletService:LeafletService, private toastrService:ToastrService,private orderService:OrderService,private activatedRoute:ActivatedRoute ,private formBuilder:FormBuilder ) { }
  addOrderForm:FormGroup;
  leaflets:Leaflet[]=[];
  check:boolean=true;

  ngOnInit(): void {
  this.dosomething();
  this.getOrders();
  }
  

  dosomething(){
    
    this.activatedRoute.params.subscribe(params =>{
      
    this.getByLeafletId(params["leafletId"]);

      
  })

 }

  checkPoints(type:string):boolean{
    if(type.toLowerCase()=="monster"){
      return true;
    }
    else{
      return false;
    }
    
  }

  getByLeafletId(leafletId:number){
    this.leafletService.getLeafletById(leafletId).subscribe(response =>{
      this.leaflets = response.data
    } )
  }

  createAddForm(leaflet:Leaflet){
    let userId:number = +localStorage.getItem("userId")
    this.addOrderForm= this.formBuilder.group({
      leafletId:[leaflet.leafletId,Validators.required],
      userId:[userId,Validators.required],
      price:[leaflet.unitPrice,Validators.required],
      number:[1,Validators.required],
      cardName:[leaflet.cardName,Validators.required],
      active:[true,Validators.required],
    })

    
    if(this.check){
      let orderModel=Object.assign({},this.addOrderForm.value);
      this.orderService.add(orderModel).subscribe(response =>{
        this.toastrService.success(response.message,"Sepete Eklendi.")
      })
    }    
    window.location.reload();
  }

  

  getOrders(){
    let userId = +localStorage.getItem("userId");
    this.orderService.getOrdersByUserId(userId).subscribe(response=>{
      this.checkOrders(response.data);

    })
  }

  checkOrders(orders:Order[]){
    for(let i=0;orders.length>i;i++){
      if(orders[i].leafletId==this.leaflets[0].leafletId){
        this.check =false;
        this.toastrService.error("Ürün Sepette ekli!")
      }
    }
  }

}
