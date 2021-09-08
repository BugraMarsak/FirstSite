import { Component, OnInit } from '@angular/core';
import { CardType } from 'src/app/models/cardType';
import { CardTypeService } from 'src/app/services/cardType.service';

@Component({
  selector: 'app-card-type',
  templateUrl: './card-type.component.html',
  styleUrls: ['./card-type.component.css']
})
export class CardTypeComponent implements OnInit {

  cardTypes: CardType[]=[];
  
  constructor(private cardTypeService:CardTypeService) { }

  ngOnInit(): void {
    this.getCardType();
  }

  getCardType()  {
    this.cardTypeService.getCardType().subscribe(response=>{
      this.cardTypes = response.data;
    })
  }
  

}
