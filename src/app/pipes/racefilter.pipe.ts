import { Pipe, PipeTransform } from '@angular/core';
import { Leaflet } from '../models/Leaflet';

@Pipe({
  name: 'racefilter'
})
export class RacefilterPipe implements PipeTransform {

  transform(value:Leaflet[],filterText:string):Leaflet[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Leaflet)=>p.race.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
