import { Pipe, PipeTransform } from '@angular/core';
import { Leaflet } from '../models/Leaflet';

@Pipe({
  name: 'cardtypefilter'
})
export class CardtypefilterPipe implements PipeTransform {

  transform(value:Leaflet[],filterText:string):Leaflet[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Leaflet)=>p.cardTypeName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}