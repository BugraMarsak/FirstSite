import { Pipe, PipeTransform } from '@angular/core';
import { Leaflet } from '../models/Leaflet';

@Pipe({
  name: 'cardtypefilter'
})
export class CardAttributefilterPipe implements PipeTransform {

  transform(value:Leaflet[],cardAttributeFilter:string):Leaflet[] {
    cardAttributeFilter = cardAttributeFilter?cardAttributeFilter.toLocaleLowerCase():""
    return cardAttributeFilter?value.filter((p:Leaflet)=>p.attribute.toLocaleLowerCase().indexOf(cardAttributeFilter)!==-1):value;
  }

}
