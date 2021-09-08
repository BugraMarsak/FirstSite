import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardType } from 'src/app/models/cardType';
import { Element } from 'src/app/models/element';
import { Leaflet } from 'src/app/models/Leaflet';
import { Race } from 'src/app/models/race';


import { CardTypeService } from 'src/app/services/cardType.service';
import { ElementService } from 'src/app/services/element.service';
import { LeafletService } from 'src/app/services/leaflet.service';
import { RaceService } from 'src/app/services/race.service';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.css']
})
export class LeafletComponent implements OnInit {
  leaflets:Leaflet[]=[];
  cardTypes: CardType[]=[];
  races:Race[]=[];
  elements:Element[]=[];
  dataLoaded= false;
  filterText = "";
  cardTypeFilter = "";
  raceFilter = "";
  elementFilter = "";
  currentLeafletId:number;
  checkdiv:boolean =false;
  constructor(private leafletService:LeafletService, private activatedRoute:ActivatedRoute,private cardTypeService:CardTypeService,private elementService:ElementService, private raceService:RaceService) { }

  ngOnInit(): void {
    
    this.getLeaflet();
    this.getCardType();
    this.getRace();
    this.getElement();
  }

  getCardType()  {
    this.cardTypeService.getCardType().subscribe(response=>{
      this.cardTypes = response.data;
    })
  }

  getLeaflet(){
    this.leafletService.getLeaflet().subscribe(response=>{
      this.leaflets = response.data;
    })
  }
  getRace(){
    this.raceService.getRace().subscribe(response=>{
      this.races = response.data;
    })
  }
  getElement(){
    this.elementService.getElement().subscribe(response=>{
      this.elements = response.data;
    })
  }

  checkNone(value:string):boolean{
    if(value.toLowerCase() =="none"){
      return false;
    }else{
      return true;
    }
    
  }

  
}
