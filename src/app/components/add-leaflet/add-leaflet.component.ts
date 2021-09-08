import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';
import { LeafletService } from 'src/app/services/leaflet.service';

@Component({
  selector: 'app-add-leaflet',
  templateUrl: './add-leaflet.component.html',
  styleUrls: ['./add-leaflet.component.css']
})
export class AddLeafletComponent implements OnInit {
  addForm:FormGroup;
  cards: Card[]=[];
  currentId:number;
  currentCard:Card;
  cardFilter:number;

  constructor(private formBuilder:FormBuilder,private cardService:CardService,private toastrService:ToastrService,private leafletService:LeafletService) { }

  ngOnInit(): void {
    this.getCards();
    this.createAddForm();
  }


  createAddForm(){
    let userId:number = +localStorage.getItem("userId")
    this.addForm= this.formBuilder.group({
      cardId:[this.cardFilter,Validators.required],
      userId:[userId,Validators.required],
      unitPrice:["",Validators.required],
      unitInStock:["",Validators.required],
      region:["",Validators.required]

    })

  }

  add(){
    this.addForm.controls["cardId"].setValue(this.cardFilter)
    if(this.addForm.valid){
      let leafletModel=Object.assign({},this.addForm.value);
      this.leafletService.add(leafletModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
      }); 
    }
    else{
      this.toastrService.error("formunuz eksik","Dikkat!")
    }
    
  }


  getCards()  {
    this.cardService.getCards().subscribe(response=>{
      this.cards = response.data;
      
    })
  }




}
