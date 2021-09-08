import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Leaflet } from 'src/app/models/Leaflet';
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

  ngOnInit(): void {
  this.dosomething();
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

    

    let orderModel=Object.assign({},this.addOrderForm.value);
    this.orderService.add(orderModel).subscribe(response =>{
      this.toastrService.success(response.message,"Sepete Eklendi.")
    })
    
  }

}
