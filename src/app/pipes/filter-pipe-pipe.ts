import { Pipe, PipeTransform } from '@angular/core';
import { Leaflet } from '../models/Leaflet';


@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value:Leaflet[],filterText:string):Leaflet[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Leaflet)=>p.cardName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
