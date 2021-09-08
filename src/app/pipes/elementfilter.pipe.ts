import { Pipe, PipeTransform } from '@angular/core';
import { Leaflet } from '../models/Leaflet';

@Pipe({
  name: 'elementfilter'
})
export class ElementfilterPipe implements PipeTransform {

  transform(value:Leaflet[],filterText:string):Leaflet[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Leaflet)=>p.attribute.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
